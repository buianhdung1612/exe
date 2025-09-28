import { Link } from "react-router-dom"
import { SectionHeader } from "../../ui/SectionHeader"

export const Section6 = () => {
    return (
        <section className="relative px-[30px] py-[150px] bg-white section-6 h-[800px] 2xl:h-[700px]">
            <div className="app-container flex">
                <div className="w-[50%] pr-[100px]">
                    <SectionHeader
                        subtitle="Giảm Giá Nhanh"
                        align="left"
                        title="Ưu Đãi Tuyệt Vời Cho Chú Cưng — Sắp Kết Thúc!"
                        desc="Nhanh tay tận hưởng những ưu đãi đặc biệt cho thú cưng của bạn. Chương trình có thời hạn, đừng bỏ lỡ cơ hội sở hữu những món đồ yêu thích với giá hời và chất lượng đảm bảo."
                    />
                    <div className="flex items-center"></div>
                    <div className="pt-[20px]">
                        <div className="relative inline-block min-w-[142px] text-left mt-[30px] ml-[10px] outside-button-more">
                            <Link
                                to="/"
                                className="inline-block relative mask-[url('/mask-bg-button.svg')] mask-no-repeat mask-center mask-[size:100%] rounded-[10px] bg-client-primary px-[30px] py-[12px] text-[2rem] font-secondary text-white hover:text-white button-more section-3-button-more transition-all duration-300 linear"
                            >
                                Nhận ưu đãi
                            </Link>
                            <svg
                                fill="currentColor"
                                className="w-[1.6rem] h-[1.6rem] absolute right-[-15px] top-[-6px] text-client-primary svg-section-3"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 20"
                                xmlSpace="preserve"
                            >
                                <path d="M6.3,19.9c-0.2-0.1-0.6-0.3-0.8-0.6c-0.2-0.5,0.1-0.8,0.6-0.9c1.2-0.4,2.4-0.7,3.6-1c2.2-0.6,4.4-1.2,6.6-1.8 c0.2-0.1,0.5-0.2,0.7-0.1c0.6,0.2,1,0.7,0.5,1.3c-0.2,0.2-0.5,0.3-0.8,0.4c-1.3,0.4-2.7,0.8-4,1.2C10.4,18.8,8.5,19.2,6.3,19.9 L6.3,19.9z"></path>
                                <path d="M1.2,11.3c-0.5-0.6-0.8-0.8-0.4-1.7c0.9-3,2.2-5.9,3.6-8.7C4.9,0,5.3-0.3,5.7,0c0.5,0.2,0.5,0.8,0.1,1.7 c-1.4,2.7-2.6,5.5-3.5,8.5C2.2,10.6,2,11.1,1.2,11.3L1.2,11.3z"></path>
                                <path d="M5.9,13.8c-0.7,0.1-1.2-0.4-0.9-1c0.2-0.4,0.5-0.8,0.8-1.1c2.1-2,4.3-4,6.3-6.1c0.4-0.4,0.8-0.5,1.2-0.1 c0.8,0.9-0.8,1.9-1.3,2.5C10,9.9,8.1,12,5.9,13.8L5.9,13.8z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}