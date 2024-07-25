import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/config/utils";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { formatPrice } from "@/utils/formatPrice";
import { Trash } from "@/components/icons";
import Counter from "@/components/ui/Counter";
import Dropdown from "@/components/ui/Dropdown";
import Checkbox from "@/components/ui/Checkbox";

const placeholderUrl =
  "https://images.unsplash.com/photo-1653832919710-348081cb9e87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export interface IProduct {
  id?: number;
  imgUrl?: string;
  price: number;
  title?: string;
  numberOfOrders?: number;
  initialPrice?: number;
  count?: number;
  color?: string;
}

interface IProductItemProps {
  product: IProduct;
  className?: string;
  isPayment?: boolean;
  selectedValue?: string;
  onDeleteClick?: (product: IProduct) => void;
  onChange?: (product: IProduct, isChecked: boolean) => void;
}

const ProductItem = ({
  product,
  className,
  isPayment,
  onDeleteClick,
  onChange,
}: IProductItemProps) => {
  const isMobile = useIsMobile();
  const onChangeRef = useRef(onChange);

  const [checkedItem, setCheckedItem] = useState<IProduct>({
    id: product.id,
    title: product.title,
    imgUrl: product.imgUrl,
    price: product.price,
    count: 0,
    color: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    onChangeRef.current?.(checkedItem, isChecked);
  }, [checkedItem, isChecked]);

  const handleCountChange = (newCount: number) => {
    setCheckedItem({ ...checkedItem, count: newCount });
  };

  const handleDropdownChange = (value: string) => {
    setSelectedValue(value);
    setCheckedItem({ ...checkedItem, color: value });
  };

  return (
    <div className={className}>
      <div className="flex gap-2 items-center py-5 border-b border-b-white-400">
        {isPayment && <Checkbox onChange={setIsChecked} checked={isChecked} />}

        <Image
          src={product.imgUrl ? product.imgUrl : placeholderUrl}
          alt="product item"
          width={isPayment ? (isMobile ? 76 : 172) : 114}
          height={114}
          className="rounded-lg object-cover cursor-pointer aspect-square"
        />

        <div className="flex flex-col justify-between sm:gap-4 gap-3 ml-2 w-full">
          <h3
            className={cn("w-full text-base cursor-pointer hover:underline", {
              "sm:line-clamp-2 line-clamp-1": isPayment,
              "line-clamp-2": !isPayment,
            })}
          >
            {product.title}
          </h3>

          <div className="flex items-center sm:flex-col sm:items-start gap-4">
            <div className="flex gap-2 items-center">
              <p
                className={cn(
                  "sm:text-lg sm:font-medium text-base text-primary-900",
                  { "font-medium": !isPayment }
                )}
              >
                {formatPrice(product?.price)}
              </p>
              {!isMobile && product.initialPrice && (
                <p className="text-dark-300 line-through text-sm">
                  {formatPrice(product.initialPrice)}
                </p>
              )}
            </div>

            {isPayment && (
              <Dropdown
                size="sm"
                className="w-38 sm:h-7 h-6 sm:text-base text-xs text-dark-300"
                placeholder="Chọn màu"
                options={[
                  { value: "MV", label: "Màu vàng" },
                  { value: "MD", label: "Màu đỏ" },
                  { value: "MT", label: "Màu trắng" },
                ]}
                value={selectedValue}
                onChange={handleDropdownChange}
              />
            )}
          </div>

          {isPayment && (
            <div className="flex justify-between items-center">
              <Counter
                defaultValue={product.count}
                onChangeCount={handleCountChange}
              />
              <Trash
                className="cursor-pointer hover:opacity-70"
                onClick={() => onDeleteClick?.(product)}
              />
            </div>
          )}

          {!isPayment && (
            <p className="text-base text-[#64748B]">
              Số lượng: {product.numberOfOrders}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
