import { Clock, Group, HeartInsurance } from "@/components/icons";
import { cn } from "@/config/utils";
import { ComponentType } from "react";

const PolicyList = [
  {
    Icon: HeartInsurance,
    title: "Cam kết 1 đổi 1",
    description: "Trong 30 ngày",
  },
  {
    Icon: Group,
    title: "100% Uy tín",
    description: "Các loại gỗ cao cấp",
  },
  {
    Icon: Clock,
    title: "Giao hàng toàn quốc",
    description: "Giao hành nhanh chóng",
    isLastItem: true,
  },
];

const ProductPolicy = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {PolicyList.map((policy, index) => (
        <PolicyItem
          key={index}
          Icon={policy.Icon}
          title={policy.title}
          description={policy.description}
          isLastItem={policy.isLastItem}
        />
      ))}
    </div>
  );
};

type PolicyItemProps = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isLastItem?: boolean;
};

const PolicyItem = ({
  Icon,
  title,
  description,
  isLastItem = false,
}: PolicyItemProps) => (
  <div
    className={cn(
      "flex justify-center items-center mb-2 py-2 sm:py-0 sm:mb-6",
      isLastItem
        ? "col-span-2 md:col-span-1 md:border-r md:border-white-700"
        : "border-r border-white-700"
    )}
  >
    <Icon className="w-10 sm:w-16" />
    <div className="ml-4">
      <p className="mb-1 text-sm sm:text-base">{title}</p>
      <span className="text-xs text-dark-500 sm:text-sm">{description}</span>
    </div>
  </div>
);

export default ProductPolicy;
