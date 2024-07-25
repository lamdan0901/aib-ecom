"use client";

import { useState } from "react";
import Link from "next/link";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@/config/utils";
import Input from "@/components/ui/Input";
import { Eye, EyeInvisible, Google } from "@/components/icons";
import ToggleButton from "@/components/ui/ToggleButton";
import Button from "@/components/ui/Button";
import { PATH } from "@/constants/paths";
import Spin from "@/components/ui/Spin";
import { login, setTokenServer } from "@/apis/auth";
import { EMAIL_REGEX } from "@/constants";
import {
  EMAIL_REQUIRED_MESSAGE,
  EMAIL_INVALID_MESSAGE,
  PASSWORD_REQUIRED_MESSAGE,
  PASSWORD_MIN_LENGTH_MESSAGE,
  MIN_PASSWORD_LENGTH,
} from "@/constants/validate";

const schema = yup
  .object({
    email: yup
      .string()
      .required(EMAIL_REQUIRED_MESSAGE)
      .matches(EMAIL_REGEX, EMAIL_INVALID_MESSAGE),
    password: yup
      .string()
      .required(PASSWORD_REQUIRED_MESSAGE)
      .min(MIN_PASSWORD_LENGTH, PASSWORD_MIN_LENGTH_MESSAGE),
  })
  .required();

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isRememberAccount, setIsRememberAccount] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (dataLogin) => {
    setIsLoading(true);
    try {
      const { data } = await login(dataLogin);
      setMessage("");

      setTokenServer(data);
      router.push("/");
    } catch (error) {
      setMessage(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto flex flex-col gap-3">
          <Input
            label="Email"
            type="text"
            placeholder="Email"
            error={errors?.email?.message}
            {...register("email")}
          />
          <Input
            label="Mật khẩu"
            type={isShowPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            error={errors?.password?.message}
            icon={
              <div
                className="cursor-pointer text-dark-300 select-none"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <EyeInvisible /> : <Eye />}
              </div>
            }
            {...register("password")}
          />
        </div>

        <div className="flex items-center mx-auto my-4">
          <ToggleButton
            onClick={() => setIsRememberAccount(!isRememberAccount)}
          />
          <span
            className={cn(
              "text-sm ml-2",
              isRememberAccount ? "text-primary-900" : "text-dark-400"
            )}
          >
            Lưu đăng nhập
          </span>
        </div>

        <div className="text-sm text-red-900 mb-2">{message}</div>

        <div className="text-center mx-auto flex flex-col">
          <Spin isLoading={isLoading} className="text-dark-300 fill-blue-800">
            <Button type="submit" className="w-full" disabled={isLoading}>
              Đăng nhập
            </Button>
          </Spin>

          <div className="font-bold text-dark-200 text-sm py-5 relative">
            <span className="bg-white relative z-10 px-5 text-base">Hoặc</span>
            <div className="absolute bottom-[50%] left-0 w-full h-px bg-dark-200"></div>
          </div>

          <Button className="bg-white w-full mx-auto hover:bg-white-900 mb-2 border border-dark-200">
            <Google />
            <span className="w-[80%] text-dark-400">Đăng nhập với Google</span>
          </Button>

          <Link
            href={PATH.FORGET_PASSWORD}
            className="text-sm text-primary-900 font-bold mt-2"
          >
            Quên mật khẩu?
          </Link>

          <span className="text-sm text-dark-400 mt-2">
            Bạn chưa có tài khoản?
            <Link
              href={PATH.REGISTER}
              className="text-primary-900 font-bold ml-1"
            >
              Đăng kí ngay
            </Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
