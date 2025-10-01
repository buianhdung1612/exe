import { Handbag, Heart, Search, User } from "iconoir-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/Button"

export const MainHeader = () => {
    return (
        <>
            <div className="p-[30px] bg-white border-b border-[#1029371A]">
                <div className="app-container flex items-center justify-between">
                    {/* Logo */}
                    <div className="w-[15%] flex justify-center">
                        <Link to="/">
                            <img src="https://i.imgur.com/07baJyd.png" alt="" className="w-[195px] h-[70px] object-cover z-10" />
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
                        <Button
                            content="Liên hệ chúng tôi"
                            background="bg-client-secondary"
                            hoverBackground="group-hover:bg-client-primary"
                            svgColor="text-client-secondary"
                            hoverSvgColor="group-hover:text-client-primary"
                            textColor="text-white"
                            hoverTextColor="text-white"
                            iconColor="before:bg-white after:bg-white"
                            hoverIconColor="hover:before:bg-white hover:after:bg-white"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}