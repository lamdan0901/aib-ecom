"use client";

import { FluentList } from "@/components/icons";
import FadeWrapper from "@/components/ui/FadeWrapper";
import { useIsPc } from "@/hooks/useMediaQuery";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

interface HeaderNavProps {
  menus: { name: string; link: string; icon?: ReactNode }[];
}

const HeaderNav = ({ menus }: HeaderNavProps) => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const isPc = useIsPc();

  useEffect(() => {
    if (isPc) {
      setIsOpenNavMenu(false);
    }
  }, [isPc]);

  return (
    <>
      <FluentList
        onClick={() => {
          setIsOpenNavMenu(!isOpenNavMenu);
        }}
        className="text-primary-600 select-none"
      />

      <FadeWrapper
        isVisible={isOpenNavMenu}
        className="absolute z-50 shadow-xl bg-white top-10 left-0 right-0 rounded-lg"
        timeAnimation={500}
      >
        {menus.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex justify-between items-center py-3 px-4 border-b border-dark-200 hover:bg-primary-100"
          >
            {item.name}
            {item.icon && <span className="ml-2">{item.icon}</span>}
          </Link>
        ))}
      </FadeWrapper>
    </>
  );
};

export default HeaderNav;
