"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";
import { getCookie } from "@/utils/cookies";
import { ACCESS_TOKEN } from "@/constants";
import { PATH } from "@/constants/paths";
import { deleteTokenServer } from "@/apis/auth";

const UserHeader = () => {
  const user = useAppStore((state) => state.profile);
  const clearProfile = useAppStore((state) => state.clearProfile);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (getCookie(ACCESS_TOKEN)) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    deleteTokenServer();
    clearProfile();
    setIsLogin(false);
  };

  return (
    <div className="flex text-white gap-1 items-center">
      {isLogin ? (
        <span className="text-base cursor-pointer" onClick={handleLogout}>
          {user.firstName} {user.lastName}
        </span>
      ) : (
        <>
          <Link href={PATH.LOGIN} className="hover:underline text-sm">
            Đăng nhập
          </Link>
          <div>/</div>
          <Link href={PATH.REGISTER} className="hover:underline text-sm">
            Đăng ký
          </Link>
        </>
      )}
    </div>
  );
};

export default UserHeader;
