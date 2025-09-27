import { NavLink } from "react-router-dom"

export const MenuBar = () => {
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

    return (
        <>
            <div className="px-[30px] py-[10px] justify-between">
                <div className="app-container">
                    <ul className="flex items-center justify-between ml-[-22px] 2xl:ml-[-21px]">
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="p-[22px] 2xl:p-[21px] text-client-secondary font-[500] uppercase hover:text-client-primary transition-[color] duration-300 ease-linear cursor-pointer">
                                <NavLink
                                    to={item.to}
                                    className="flex items-center gap-[10px]"
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
        </>
    )
}