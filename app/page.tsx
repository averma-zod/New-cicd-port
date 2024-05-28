import Image from "next/image";
import Home from './home/home';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Home/>
    </main>
  );
}
