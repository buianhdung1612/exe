import { Link } from "react-router-dom"

export const Section4 = () => {
    return (
        <section className="relative px-[30px] py-[150px] bg-white">
            <div className="app-container flex gap-[30px]">
                <div
                    className="bg-client-primary relative flex rounded-[20px] w-[50%] h-[324px] bg-center bg-no-repeat bg-cover p-[15px]"
                    style={{ backgroundImage: "url('https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/h1-filler-img-1.jpg')" }}
                >
                    <div className="w-[50%]"></div>
                    <div className="w-[50%] py-[40px]">
                        <div className="inline-block uppercase text-white bg-[#C32643] px-[18px] py-[5px] rounded-[30px] mb-[10px]">
                            Limited Offers!
                        </div>
                        <h3 className="text-white text-[4rem] font-secondary leading-[1.2] mb-[20px]">Exclusive Pet Store Deals</h3>
                        <div className="relative inline-block min-w-[142px] outside-button-more">
                            <Link
                                to="/"
                                className="inline-block relative mask-[url('/mask-bg-button.svg')] mask-no-repeat mask-center mask-[size:100%] rounded-[10px] bg-white px-[30px] py-[12px] text-[2rem] font-secondary text-client-secondary section-4-button-more transition-all duration-300 linear"
                            >
                                Shop Now
                            </Link>
                            <svg fill="#fff" className="w-[1.6rem] h-[1.6rem] absolute right-[-5px] top-[-6px] svg-section-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" xmlSpace="preserve">
                                <path d="M6.3,19.9c-0.2-0.1-0.6-0.3-0.8-0.6c-0.2-0.5,0.1-0.8,0.6-0.9c1.2-0.4,2.4-0.7,3.6-1c2.2-0.6,4.4-1.2,6.6-1.8 c0.2-0.1,0.5-0.2,0.7-0.1c0.6,0.2,1,0.7,0.5,1.3c-0.2,0.2-0.5,0.3-0.8,0.4c-1.3,0.4-2.7,0.8-4,1.2C10.4,18.8,8.5,19.2,6.3,19.9 L6.3,19.9z"></path>
                                <path d="M1.2,11.3c-0.5-0.6-0.8-0.8-0.4-1.7c0.9-3,2.2-5.9,3.6-8.7C4.9,0,5.3-0.3,5.7,0c0.5,0.2,0.5,0.8,0.1,1.7 c-1.4,2.7-2.6,5.5-3.5,8.5C2.2,10.6,2,11.1,1.2,11.3L1.2,11.3z"></path>
                                <path d="M5.9,13.8c-0.7,0.1-1.2-0.4-0.9-1c0.2-0.4,0.5-0.8,0.8-1.1c2.1-2,4.3-4,6.3-6.1c0.4-0.4,0.8-0.5,1.2-0.1 c0.8,0.9-0.8,1.9-1.3,2.5C10,9.9,8.1,12,5.9,13.8L5.9,13.8z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="section-4-sale bg-[#C32643] absolute bottom-[10px] right-[15px] w-[136px] h-[133px] text-[4rem] font-secondary text-white flex items-center justify-center font-[400]">
                        20% OFF
                    </div>
                </div>
                <div
                    className="bg-[#E67E20] relative flex rounded-[20px] w-[50%] h-[324px] bg-center bg-no-repeat bg-cover p-[15px]"
                    style={{ backgroundImage: "url('https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/h1-filler-img-2.jpg')" }}
                >
                    <div className="w-[50%] py-[40px] pl-[40px] relative">
                        <img className="absolute left-0 top-0" src="https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/Circle-lines-Design.png" alt="" width={303} height={303} />
                        <div className="inline-block uppercase text-white bg-[#AF6900] px-[18px] py-[5px] rounded-[30px] mb-[10px]">
                            Amazing Savings
                        </div>
                        <h3 className="text-white text-[4rem] font-secondary leading-[1.2] mb-[20px]">Retrieve These Incredible Deals</h3>
                        <div className="relative inline-block min-w-[142px] outside-button-more">
                            <Link
                                to="/"
                                className="inline-block relative mask-[url('/mask-bg-button.svg')] mask-no-repeat mask-center mask-[size:100%] rounded-[10px] bg-white px-[30px] py-[12px] text-[2rem] font-secondary text-client-secondary section-4-button-more transition-all duration-300 linear"
                            >
                                Order Now
                            </Link>
                            <svg fill="#fff" className="w-[1.6rem] h-[1.6rem] absolute right-[-5px] top-[-6px] svg-section-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" xmlSpace="preserve">
                                <path d="M6.3,19.9c-0.2-0.1-0.6-0.3-0.8-0.6c-0.2-0.5,0.1-0.8,0.6-0.9c1.2-0.4,2.4-0.7,3.6-1c2.2-0.6,4.4-1.2,6.6-1.8 c0.2-0.1,0.5-0.2,0.7-0.1c0.6,0.2,1,0.7,0.5,1.3c-0.2,0.2-0.5,0.3-0.8,0.4c-1.3,0.4-2.7,0.8-4,1.2C10.4,18.8,8.5,19.2,6.3,19.9 L6.3,19.9z"></path>
                                <path d="M1.2,11.3c-0.5-0.6-0.8-0.8-0.4-1.7c0.9-3,2.2-5.9,3.6-8.7C4.9,0,5.3-0.3,5.7,0c0.5,0.2,0.5,0.8,0.1,1.7 c-1.4,2.7-2.6,5.5-3.5,8.5C2.2,10.6,2,11.1,1.2,11.3L1.2,11.3z"></path>
                                <path d="M5.9,13.8c-0.7,0.1-1.2-0.4-0.9-1c0.2-0.4,0.5-0.8,0.8-1.1c2.1-2,4.3-4,6.3-6.1c0.4-0.4,0.8-0.5,1.2-0.1 c0.8,0.9-0.8,1.9-1.3,2.5C10,9.9,8.1,12,5.9,13.8L5.9,13.8z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="section-4-sale bg-white absolute top-[10px] right-[15px] w-[136px] h-[133px] text-[4rem] font-secondary text-client-secondary flex items-center justify-center font-[400]">
                        40% OFF
                    </div>
                </div>
            </div>
        </section>
    )
}