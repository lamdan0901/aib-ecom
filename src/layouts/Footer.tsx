import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
  LogoFurniture,
  Instagram,
  Facebook,
  Twitter,
} from "@/components/icons";

const aboutCategories = [
  { name: "Trang chủ", link: "#" },
  { name: "Sản phẩm", link: "#" },
  { name: "Tin tức", link: "#" },
  { name: "Voucher", link: "#" },
  { name: "Combo giảm giá", link: "#" },
];

const customerSupportCategories = [
  { name: "Điều khoản - Điều kiện", link: "#" },
  { name: "Chính sách đổi trả", link: "#" },
  { name: "Chính sách hỗ trợ", link: "#" },
  { name: "Chính sách bảo mật", link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-primary-100">
      <div className="py-5">
        <div className="flex flex-col gap-8 xl:gap-40 container-base xl:flex-row">
          <div className="flex items-start flex-col gap-5">
            <Link href="#">
              <LogoFurniture />
            </Link>

            <div className="flex">
              <Input
                type="text"
                placeholder="Nhập email của bạn"
                className="w-56 border-none h-12 rounded-r-none rounded-l-xl md:w-80 transition-width duration-500"
              />
              <Button className="h-12 rounded-r-xl rounded-l-none md:w-40 text-sm w-28 transition-width duration-500">
                ĐĂNG KÝ
              </Button>
            </div>

            <div>
              <p>Liên hệ với chúng tôi</p>
              <p className="text-primary-900 font-medium pt-2">
                Địa chỉ: Số 8 Phạm Hùng, Mai Dịch, Cầu Giấy, Hà Nội
              </p>
            </div>

            <div>
              <p className="pb-2">Theo dõi chúng tôi tại</p>
              <div className="flex gap-3 items-center">
                <Link href="">
                  <Facebook />
                </Link>

                <Link href="">
                  <Instagram />
                </Link>

                <Link href="">
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:gap-14 md:flex-row md:items-start">
            <div>
              <div className="font-medium text-base pb-2 xl:pb-5">
                Về chúng tôi
              </div>

              <div className="flex flex-col gap-3 text-primary-900">
                {aboutCategories.map((category, index) => (
                  <Link key={index} href={category.link}>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="font-medium text-base pb-2 xl:pb-5">
                Hỗ trợ khách hàng
              </div>

              <div className="flex flex-col gap-3 text-primary-900">
                {customerSupportCategories.map((category, index) => (
                  <Link key={index} href={category.link}>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-t-3 border-white py-2 flex items-center justify-center">
        <div>
          <p className="text-primary-900 text-sm md:text-base mx-auto">
            For any support or help, you can contact us via our Live Chat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
