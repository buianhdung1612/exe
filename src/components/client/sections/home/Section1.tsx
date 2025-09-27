import { Link } from "react-router-dom"

export const Section1 = () => {
    return (
        <>
            <section className="px-[30px] pt-[120px] bg-[linear-gradient(-90deg,#FF6262_10%,#FF9466_100%)] section-1">
                <div className="app-container flex gap-[30px]">
                    <section className="text-white pl-[80px] w-[50%] relative section-1-left">
                        <p className="uppercase mb-[10px]">Heartfelt Pet Connections</p>
                        <h1 className="font-secondary text-[6.5rem] 2xl:text-[5.7rem] leading-[1.2] mb-[17px]">The Beginning Of Every Pet's Journey With The Love.</h1>
                        <p className="pr-[20%] mb-[40px]">Cras eleifend turpis fames primis vulputate ornare sagittis. Proin libero feugiat tristique accumsan maecenas potenti ultricies. </p>
                        <div className="flex gap-[30px]">
                            <div className="relative inline-block min-w-[142px] outside-button-more">
                                <Link
                                    to="/"
                                    className="inline-block relative mask-[url('/mask-bg-button.svg')] mask-no-repeat mask-center mask-[size:100%] rounded-[10px] bg-white px-[30px] py-[12px] text-[2rem] font-secondary text-client-secondary hover:text-white button-more section-1-button-more transition-all duration-300 linear"
                                >
                                    Xem thêm
                                </Link>
                                <svg fill="currentColor" className="w-[1.6rem] h-[1.6rem] absolute right-[-5px] top-[-6px] svg-section-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" xmlSpace="preserve">
                                    <path d="M6.3,19.9c-0.2-0.1-0.6-0.3-0.8-0.6c-0.2-0.5,0.1-0.8,0.6-0.9c1.2-0.4,2.4-0.7,3.6-1c2.2-0.6,4.4-1.2,6.6-1.8 c0.2-0.1,0.5-0.2,0.7-0.1c0.6,0.2,1,0.7,0.5,1.3c-0.2,0.2-0.5,0.3-0.8,0.4c-1.3,0.4-2.7,0.8-4,1.2C10.4,18.8,8.5,19.2,6.3,19.9 L6.3,19.9z"></path>
                                    <path d="M1.2,11.3c-0.5-0.6-0.8-0.8-0.4-1.7c0.9-3,2.2-5.9,3.6-8.7C4.9,0,5.3-0.3,5.7,0c0.5,0.2,0.5,0.8,0.1,1.7 c-1.4,2.7-2.6,5.5-3.5,8.5C2.2,10.6,2,11.1,1.2,11.3L1.2,11.3z"></path>
                                    <path d="M5.9,13.8c-0.7,0.1-1.2-0.4-0.9-1c0.2-0.4,0.5-0.8,0.8-1.1c2.1-2,4.3-4,6.3-6.1c0.4-0.4,0.8-0.5,1.2-0.1 c0.8,0.9-0.8,1.9-1.3,2.5C10,9.9,8.1,12,5.9,13.8L5.9,13.8z"></path>
                                </svg>
                            </div>
                            <div className="flex items-center">
                                <Link to="/">
                                    <img src="https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/06/rate-group-img.png" alt="" />
                                </Link>
                                <span className="w-[55px] h-[55px] rounded-full border-[2px] border-solid border-white bg-[#e67e20] inline-flex justify-center items-center mr-[10px] ml-[-20px]">2k+</span>
                                <p className="w-[100px] leading-[19.2px]">Satisfied Clients</p>
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