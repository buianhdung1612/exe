
import { Link, NavLink } from "react-router-dom";
import { SocialIcon } from "../ui/SocialIcon";

import { Facebook, Instagram, X, Threads, YoutubeSolid, MailSolid, Heart, Handbag, User, Search } from "iconoir-react";
import { useEffect, useState } from "react";

export const Header = () => {
    const socialItems = [
        { icon: Instagram, to: "/" },
        { icon: Facebook, to: "/" },
        { icon: X, to: "/" },
        { icon: Threads, to: "/" },
        { icon: YoutubeSolid, to: "/" },
    ];

    const menuItems = [
        {
            label: "Trang chủ",
            to: "/",
            img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/Menu-img-2.png",
        },
        {
            label: "Các trang khác",
            to: "/shop",
            img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/Menu-img-1.png",
        },
        {
            label: "Trang bài viết",
            to: "/about",
            img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/07/Menu-img-12.png",
        },
        {
            label: "Tất cả sản phẩm",
            to: "/contact",
            img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/07/Menu-img-11-1.png",
        },
        {
            label: "Mua cho chó",
            to: "/about",
            img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/Menu-img-4.png",
        },
        {
            label: "Mua cho mèo",
            to: "/about",
            img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/Menu-img-5.png",
        },
        {
            label: "Khuyến mãi",
            to: "/contact",
            img: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/Menu-img-7.png",
        },
    ];

    const texts = ["Summer Specials Are Live & Enjoy Free Delivery Above $350", "Dive Into Summer Savings – Free Delivery Over $630!", "Hot Prices, Cool Perks – Enjoy Free Shipping Above $200!"];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [texts.length]);

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + texts.length) % texts.length);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % texts.length);
    };

    return (
        <header>
            <div className="px-[30px] py-[10px] bg-client-primary">
                <div className="flex items-center justify-between max-w-[1520px] w-full mx-auto">
                    <SocialIcon items={socialItems} />
                    <div className="flex items-center justify-center">
                        <svg
                            onClick={handlePrev}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className="w-[20px] h-[20px] shrink-0"
                            fill="white"
                        >
                            <path d="M98.6,45.6c-15.5-5.9-35-4.5-51.5-4.4c-3.2,0-6.4,0-9.6,0.1c4.5-2.6,10.9-5.2,9.8-10.9c-0.7-3.9-4.9-5.9-9.2-5.3 c-3.8,0.6-8.1,3.6-11.4,5.3c-4.2,2.1-8.4,4.2-12.5,6.6c-3.2,1.8-6.5,3.5-8.8,6c-1.2,0.6-2.5,1.4-3.8,2.6c-1.7,1.5-2.4,4.5-0.4,6.1 c0.7,0.5,1.3,1,1.9,1.4c1,2.8,3.4,5.1,6.3,7.1C17,65.3,25.1,70,33.3,74.3c5.9,3,13.4-3.8,8.1-8.4c-3-2.6-5.9-5.3-9.1-7.7 c-0.9-0.7-2.1-1.7-3.3-2.7c6.5-0.1,13-0.3,19.6-0.4c16.2-0.4,35.3,0.3,50.3-5.9C100.6,48.3,100.2,46.2,98.6,45.6z"></path>
                        </svg>
                        <span className="transition-opacity duration-500 ease-in-out shrink-0 text-white px-[40px]">{texts[index]}</span>
                        <svg
                            onClick={handleNext}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className="w-[20px] h-[20px] shrink-0"
                            fill="white"
                        >
                            <path d="M1.4,45.6c15.5-5.9,35-4.5,51.5-4.4c3.2,0,6.4,0,9.6,0.1c-4.5-2.6-10.9-5.2-9.8-10.9c0.7-3.9,4.9-5.9,9.2-5.3 c3.8,0.6,8.1,3.6,11.4,5.3c4.2,2.1,8.4,4.2,12.5,6.6c3.2,1.8,6.5,3.5,8.8,6c1.2,0.6,2.5,1.4,3.8,2.6c1.7,1.5,2.4,4.5,0.4,6.1 c-0.7,0.5-1.3,1-1.9,1.4c-1,2.8-3.4,5.1-6.3,7.1C83,65.3,74.9,70,66.7,74.3c-5.9,3-13.4-3.8-8.1-8.4c3-2.6,5.9-5.3,9.1-7.7 c0.9-0.7,2.1-1.7,3.3-2.7c-6.5-0.2-13-0.3-19.6-0.4C35.2,54.5,16.1,55.2,1.1,49C-0.6,48.2-0.2,46.2,1.4,45.6z"></path>
                        </svg>
                    </div>
                    <Link to={"/"} className="flex items-center text-white hover:text-[#FFFFFFBF] transition-[color] duration-300">
                        <MailSolid className="w-[1.7rem] h-[1.7rem] mr-[10px] text-white" />
                        <span>Sweetheart@example.com</span>
                    </Link>
                </div>
            </div>
            <div className="p-[30px] bg-white border-b border-[#1029371A]">
                <div className="flex items-center justify-between max-w-[1520px] w-full mx-auto">
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
                        <div className="relative">
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

            {/* Menu bar */}
            <div className="px-[30px] py-[10px] justify-between">
                <div className="max-w-[1520px] w-full mx-auto">
                    <ul className="flex items-center justify-between">
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="p-[22px]">
                                <NavLink
                                    to={item.to}
                                    className="text-client-secondary font-[500] uppercase flex items-center gap-[10px] hover:text-client-primary transition-[color] duration-300 ease-linear"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        width={25}
                                        height={25}
                                        loading="eager"
                                        decoding="async"
                                    />
                                    <span>{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};
