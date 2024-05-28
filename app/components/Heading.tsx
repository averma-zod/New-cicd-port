


function Heading({ title }:any) {
    return (
        <div className="py-[40px] text-white">
            <div className="text-[24px] font-semibold py-[10px]">
                {title}
            </div>
            <div className="w-full h-[1px] bg-white">
            </div>
        </div>
    )
}


export default Heading;
