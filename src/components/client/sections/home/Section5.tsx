import { SectionHeader } from "../../ui/SectionHeader"
import { ProductCard } from "../../ui/ProductCard";
import type { Product } from "../../../../types/products.type";
import { Link } from "react-router-dom";

const products: Product[] = [
    {
        id: 1,
        title: "Thẻ tên",
        price: "360.000đ",
        primaryImage: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/product-img-10-1000x1048.jpg",
        secondaryImage: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/product-img-10c-1000x1048.jpg",
        rating: 5,
        isSale: true,
    },
    {
        id: 2,
        title: "Vòng cổ",
        price: "220.000đ",
        primaryImage: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/product-img-11-1000x1048.jpg",
        secondaryImage: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/product-img-11c-1000x1048.jpg",
        rating: 4,
        isSale: false,
    },
    {
        id: 3,
        title: "Đồ chơi mèo",
        price: "150.000đ",
        primaryImage: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/product-img-12-1000x1048.jpg",
        secondaryImage: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/product-img-12c-1000x1048.jpg",
        rating: 3,
        isSale: true,
    },
    {
        id: 4,
        title: "Nệm nylon",
        price: "540.000đ",
        primaryImage: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/product-img-9-1000x1048.jpg",
        secondaryImage: "https://wdtsweetheart.wpengine.com/wp-content/uploads/2025/05/product-img-9a-1000x1048.jpg",
        rating: 4,
        isSale: true,
    },
];

export const Section5 = () => {
    return (
        <section>
            <div className="app-container pb-[150px]">
                <SectionHeader
                    subtitle="Không gian bán lẻ"
                    title="Mua sắm đồ dùng thú cưng cao cấp"
                    desc="Chúng tôi cung cấp đầy đủ các sản phẩm chăm sóc thú cưng chất lượng cao. Từ thức ăn dinh dưỡng đến đồ chơi vui nhộn, tất cả đều được tuyển chọn kỹ lưỡng để mang lại sự an toàn và hạnh phúc cho thú cưng yêu quý của bạn."
                    widthDesc="w-[745px]"
                />

                <div className="grid grid-cols-4 gap-[30px]">
                    {products.map((item: Product) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
                <div className="text-center pt-[20px]">
                    <div className="relative inline-block min-w-[142px] text-left mt-[30px] ml-[10px] outside-button-more">
                        <Link
                            to="/"
                            className="inline-block relative mask-[url('/mask-bg-button.svg')] mask-no-repeat mask-center mask-[size:100%] rounded-[10px] bg-client-primary px-[30px] py-[12px] text-[2rem] font-secondary text-white hover:text-white button-more section-3-button-more transition-all duration-300 linear"
                        >
                            Xem tất cả sản phẩm
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
        </section>
    )
}