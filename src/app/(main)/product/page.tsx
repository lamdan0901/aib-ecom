import dynamic from "next/dynamic";
import Carousel from "@/components/ui/Carousel";
import ProductHeader from "./_component/ProductHeader";
import ProductContactSocial from "./_component/ProductContactSocial";
import ItemPrice from "@/components/ui/ItemPrice";
import ProductPolicy from "./_component/ProductPolicy";
import ProductForm from "./_component/ProductForm";

const FlashDeal = dynamic(() => import("@/components/ui/FlashDeal"), {
  ssr: false,
});

export interface IProduct {
  colors: string[];
  flashDealEndTime: Date;
}

const Product = () => {
  const images = [
    "https://i.imgur.com/ZKyYNAH.png",
    "https://images.unsplash.com/photo-1653832919710-348081cb9e87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://i.imgur.com/ZKyYNAH.png",
    "https://images.unsplash.com/photo-1653832919710-348081cb9e87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const productData = {
    title: "HỆ TỦ BẾP MOHO KITCHEN DÒNG MIX (HỆ TỦ BẾP KẾT HỢP)",
    rating: 4.9,
    numberReview: 50,
    totalSold: 147,
    status: "Còn hàng",
    price: 2000000,
    discount: 10,
    colors: [
      "rgba(219, 188, 180, 1)",
      "rgba(211, 205, 199, 1)",
      "rgba(51, 73, 108, 1)",
    ],
    flashDealEndTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    totalFavorite: 345,
  };

  return (
    <div className="container-base">
      <div className="mt-10 block xl:flex">
        <Carousel
          images={images}
          isShowImageBottom={true}
          className="mb-8 xl:w-1/2"
        />

        <div className="mb-8 xl:px-8 xl:w-1/2">
          <ProductHeader
            title={productData.title}
            rating={productData.rating}
            numberReview={productData.numberReview}
            totalSold={productData.totalSold}
            status={productData.status}
          />
          <div className="h-16">
            <FlashDeal endTime={productData.flashDealEndTime} />
          </div>

          <ItemPrice
            price={productData.price}
            discount={productData.discount}
            isShowDiscountPrice={true}
          />

          <ProductForm productData={productData} />
          <ProductContactSocial totalFavorite={productData.totalFavorite} />
        </div>
      </div>

      <ProductPolicy />
    </div>
  );
};

export default Product;
