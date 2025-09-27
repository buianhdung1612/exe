import { Handbag, Heart, Search, User } from "iconoir-react"
import { Link } from "react-router-dom"

export const MainHeader = () => {
    return (
        <>
            <div className="p-[30px] bg-white border-b border-[#1029371A]">
                <div className="app-container flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-[25.6%]">
                        <Link to="/">
                            <img src="https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/gradient-logo.png" alt="" width={208} height={59} className="object-cover" />
                        </Link>
                    </div>

                    {/* Form Search */}
                    <form action="" className="w-[34.2%] flex">
                        <input type="text" name="keyword" placeholder="Tìm kiếm sản phẩm" className="w-[95.2%] bg-[#10293708] rounded-l-[4rem] h-[50px] border border-[#d7d7d7] px-[32px] py-[16px] focus:outline-none focus:border-[#102937] transition-[border] duration-300 ease-linear" />
                        <div className="ml-[-25px] w-[5rem] h-[5rem] rounded-full bg-client-secondary flex items-center justify-center text-white cursor-pointer hover:bg-client-primary transition-[background] duration-300 ease-linear">
                            <Search stroke="3" />
                        </div>
                    </form>

                    {/* Actions */}
                    <div className="flex items-center gap-[30px] w-[34.2%] justify-end mr-[16px]">
                        <div className="w-[3.5rem] h-[3.5rem] p-[5px] flex items-center justify-center text-[#102937] hover:text-client-primary transition-[color] duration-300 cursor-pointer">
                            <Heart stroke="2" className="w-[2.5rem] h-[2.5rem]" />
                        </div>
                        <div className="w-[3.5rem] h-[3.5rem] p-[5px] flex items-center justify-center text-[#102937] hover:text-client-primary transition-[color] duration-300 cursor-pointer">
                            <Handbag stroke="2" className="w-[2.5rem] h-[2.5rem]" />
                        </div>
                        <div className="w-[3.5rem] h-[3.5rem] p-[5px] flex items-center justify-center text-[#102937] hover:text-client-primary transition-[color] duration-300 cursor-pointer">
                            <User stroke="2" className="w-[2.5rem] h-[2.5rem]" />
                        </div>
                        <div className="relative inline-block min-w-[142px] outside-button-contact">
                            <Link
                                to="/"
                                className="inline-block relative mask-[url('/mask-bg-button.svg')] mask-no-repeat mask-center mask-[size:100%] rounded-[10px] bg-client-secondary px-[30px] py-[12px] text-[2rem] font-secondary text-white button-contact transition-all duration-300 linear"
                            >
                                Liên hệ chúng tôi
                            </Link>
                            <svg fill="currentColor" className="w-[1.6rem] h-[1.6rem] absolute right-[-11px] top-[-9px] svg-contact" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" xmlSpace="preserve">
                                <path d="M6.3,19.9c-0.2-0.1-0.6-0.3-0.8-0.6c-0.2-0.5,0.1-0.8,0.6-0.9c1.2-0.4,2.4-0.7,3.6-1c2.2-0.6,4.4-1.2,6.6-1.8 c0.2-0.1,0.5-0.2,0.7-0.1c0.6,0.2,1,0.7,0.5,1.3c-0.2,0.2-0.5,0.3-0.8,0.4c-1.3,0.4-2.7,0.8-4,1.2C10.4,18.8,8.5,19.2,6.3,19.9 L6.3,19.9z"></path>
                                <path d="M1.2,11.3c-0.5-0.6-0.8-0.8-0.4-1.7c0.9-3,2.2-5.9,3.6-8.7C4.9,0,5.3-0.3,5.7,0c0.5,0.2,0.5,0.8,0.1,1.7 c-1.4,2.7-2.6,5.5-3.5,8.5C2.2,10.6,2,11.1,1.2,11.3L1.2,11.3z"></path>
                                <path d="M5.9,13.8c-0.7,0.1-1.2-0.4-0.9-1c0.2-0.4,0.5-0.8,0.8-1.1c2.1-2,4.3-4,6.3-6.1c0.4-0.4,0.8-0.5,1.2-0.1 c0.8,0.9-0.8,1.9-1.3,2.5C10,9.9,8.1,12,5.9,13.8L5.9,13.8z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}