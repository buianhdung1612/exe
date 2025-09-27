import { Outlet } from "react-router-dom"
import { Header } from "../components/client/layouts/Header"
import PetsIcon from '@mui/icons-material/Pets';
import { useEffect, useState } from "react";

export const Layout = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) setVisible(true);
            else setVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 400);
    };

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Header />
            <Outlet />
            <div
                onClick={scrollToTop}
                className={`
                    fixed right-[30px] bottom-[30px]
                    w-[50px] h-[50px]
                    flex items-center justify-center
                    rounded-full border-2 border-white
                    bg-client-primary hover:bg-client-secondary
                    cursor-pointer transition-all duration-500 ease-in-out
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
                `}
            >
                <PetsIcon sx={{ width: '25px', height: "25px", color: "white" }} />
            </div>
        </div>
    )
}
