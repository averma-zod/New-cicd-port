import boto3
import paramiko
import os

# Configuration
instance_id = 'i-002afa357fae8d1fb'
region = 'us-east-1'  # e.g., 'us-east-1'
username = 'ec2-user'  # Default user for Amazon Linux, change if different
key_file = '../../../Downloads/portfolio-key-new.pem'  # Path to your PEM key file
image_name_next = 'nextjs-image'
image_name_nginx = 'nginx-image'
dockerfile_dir = '/home/ec2-user/portfolio/AkashPortfolio/'  # Directory containing the Dockerfile and necessary files

# Commands to be executed on the EC2 instance
commands = {
    'set_dir' : f'cd {dockerfile_dir} && ls -la',
    'nextjs_build' : f'cd {dockerfile_dir} && docker build --tag nextjs-image .',  # Build the Docker image of nextjs
    'nginx_build' : f'cd {dockerfile_dir} && docker build --tag nginx-image ./nginx', # Build nginx image
    'create_network' : f'cd {dockerfile_dir} && docker network create my-network', # create a network
    'nextjs_run' : f'cd {dockerfile_dir} && docker run --network my-network -d --name nextjs-container nextjs-image', # run the nextjs container
    'nginx_run' : f'cd {dockerfile_dir} && docker run --network my-network --link nextjs-container:nextjs --publish 80:80 nginx-image' # run nginx with nextjs
}

def get_instance_ip(instance_id, region):
    """Get the public IP address of the EC2 instance."""
    ec2 = boto3.client('ec2', region_name=region)
    response = ec2.describe_instances(InstanceIds=[instance_id])
    return response['Reservations'][0]['Instances'][0]['PublicIpAddress']

def ssh_connect(ec2_ip, username, key_file):
    """Establish SSH connection to the EC2 instance."""
    k = paramiko.RSAKey.from_private_key_file(key_file)
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(hostname=ec2_ip, username=username, pkey=k)
    return client

def execute_command(client, commands):
    """Execute a list of commands on the remote server."""
    print(f"Executing command: {commands}")
    stdin, stdout, stderr = client.exec_command(commands)
    stdout_result = stdout.read().decode()
    stderr_result = stderr.read().decode()
    print(stdout_result)
    if stderr_result:
        print(stderr_result)

def main():
    try:
        # Get EC2 instance IP
        ec2_ip = get_instance_ip(instance_id, region)
        if not ec2_ip:
            print("Could not get the IP address of the instance.")
            return
        
        # Establish SSH connection
        with ssh_connect(ec2_ip, username, key_file) as client:

            check_nextjs_cmd = f'docker images -q {image_name_next}'
            check_nginx_cmd = f'docker images -q {image_name_nginx}'
            image_stdin, image_stdout, image_stderr = client.exec_command( check_nextjs_cmd)
            image_stdin1, image_stdout1, image_stderr1 = client.exec_command(check_nginx_cmd)
            print("$$$$$", image_stdout.read())
            if not image_stdout:
                if not image_stdout1.strip():
                    # Execute commands to build and run Docker container
                    print("going to Execute:")
                    for command in commands:
                        execute_command(client, commands[command])
            else:
                execute_command(client, commands['nextjs_run'])
                execute_command(client, commands['nginx_run'])
        
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    main()