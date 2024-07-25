import {
  formatPrice,
  calculateCurrentPrice,
  calculateDiscountPrice,
} from "@/utils/formatPrice";
import { cn } from "@/config/utils";
import { memo } from "react";

type ItemPriceProps = {
  price: number;
  discount?: number;
  isShowDiscountPrice?: boolean;
  currentPriceClass?: string;
  priceClass?: string;
};

const ItemPrice = ({
  price,
  discount = 0,
  isShowDiscountPrice = false,
  currentPriceClass,
  priceClass,
}: ItemPriceProps) => {
  const currentPrice = calculateCurrentPrice(price, discount);
  const discountAmount = calculateDiscountPrice(price, currentPrice);

  return (
    <div className="flex justify-start items-center text-center">
      <p
        className={cn(
          "text-primary-900 text-xl mr-3 font-medium",
          currentPriceClass
        )}
      >
        {formatPrice(currentPrice)}
      </p>

      {discount > 0 && (
        <p
          className={cn("text-dark-300 text-sm mr-3 line-through", priceClass)}
        >
          {formatPrice(price)}
        </p>
      )}
      {isShowDiscountPrice && discount > 0 && (
        <p className={cn("text-red text-sm italic", priceClass)}>
          (Tiết kiệm {formatPrice(discountAmount)})
        </p>
      )}
    </div>
  );
};

export default memo(ItemPrice);
