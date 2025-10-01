import { Link } from "react-router-dom"
import { Button } from "../../ui/Button"

export const Section1 = () => {
    return (
        <>
            <section className="px-[30px] pt-[120px] bg-[linear-gradient(-90deg,#FF6262_10%,#FF9466_100%)] section-1">
                <div className="app-container flex gap-[30px]">
                    <section className="text-white pl-[80px] w-[50%] relative section-1-left">
                        <p className="uppercase mb-[10px]">Kết Nối Yêu Thương Cùng Thú Cưng</p>
                        <h1 className="font-secondary text-[6.3rem] 2xl:text-[5.7rem] leading-[1.2] mb-[17px]">
                            Khởi đầu hành trình của mỗi thú cưng với tình yêu thương.
                        </h1>
                        <p className="pr-[20%] mb-[40px]">
                            Trải nghiệm những khoảnh khắc đáng nhớ cùng thú cưng của bạn. Chúng tôi mang đến sự chăm sóc, niềm vui và kết nối tuyệt vời cho mọi hành trình.
                        </p>
                        <div className="flex gap-[30px]">
                            <Button
                                content="Xem thêm"
                                hoverBackground="group-hover:bg-client-secondary"
                                hoverSvgColor="group-hover:text-client-secondary"
                                textColor="text-client-secondary"
                                hoverTextColor="group-hover:text-white"
                                iconColor="before:bg-client-secondary after:bg-client-secondary"
                                hoverIconColor="hover:before:bg-white hover:after:bg-white"
                            />
                            <div className="flex items-center">
                                <Link to="/">
                                    <img src="https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/rate-group-img.png" alt="" />
                                </Link>
                                <span className="w-[55px] h-[55px] rounded-full border-[2px] border-solid border-white bg-[#e67e20] inline-flex justify-center items-center mr-[10px] ml-[-20px]">2k+</span>
                                <p className="w-[100px] leading-[19.2px]">Khách hàng hài lòng</p>
                            </div>
                        </div>
                    </section>
                    <div className="w-[47%] relative section-1-image">
                        <figure>
                            <img
                                src="https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/h1-slider-imgs.png"
                                width={600}
                                height={750}
                                alt=""
                                className="object-cover mt-[-50px] ml-[50px]"
                            />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}