export default function Header({title}) {
    return (
        <div className=" bg-[#8d8d8d66] px-5 bmss:px-9 bmss:py-9 py-5">
            <div className="">
                <div className=' w-[120px] bmss:w-[150px] flex justify-between items-center'>
                    <span style={{color: '#331a4b'}} className='side-bar-paragraph'>{title}</span>
                    <img className='w-[20px]' src="/toggler.png" alt="" />
                </div>
                <p className="paragraph mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit mollitia exercitationem, suscipit quia, est cumque ipsam ea maxime facere in inventore consequuntur aliquid error fuga? Aliquam nihil eaque unde.</p>
            </div>
        </div>
    )
}