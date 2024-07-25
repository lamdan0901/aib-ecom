"use client";

import { useCallback, useEffect, useState } from "react";
import { Search, CartPlus } from "@/components/icons";
import { cn } from "@/config/utils";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import ItemCard from "@/components/ui/ItemCard";
import Category from "../(main)/_component/Category";
import FilterPrice from "@/components/ui/FilterPrice";
import Pagination from "@/components/ui/Pagination";
import Filter from "../../components/ui/Filter";
import Image from "next/image";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Carousel from "@/components/ui/Carousel";
import Counter from "@/components/ui/Counter";
import Selector from "@/components/ui/Selector";
import ProgressStepper from "@/components/ui/ProgressStepper";
import ProductReview from "@/components/ui/Review";
import ProductItem, { IProduct } from "@/components/ui/ProductItem";
import {
  dataFilter,
  dataReview,
  images,
  listItems,
  optionsDropdown,
  products,
} from "./fetchData";

export default function UIKits() {
  const [selectedItem, setSelectedItem] = useState("");
  const [page, setPage] = useState(1);
  const [orderCount, setOrderCount] = useState(0);
  const [activeItem, setActiveItem] = useState<string | number>("43");
  const [count, setCount] = useState(1);
  const [listProducts, setListProducts] = useState<IProduct[]>(products);

  const [listProductChecked, setListProductChecked] = useState<IProduct[]>([]);
  const onPaginationChange = (currentPage: number) => {
    setPage(currentPage);
  };

  const selectorValues = [
    { label: "dcm", value: "djtme" },
    { label: "phongba", value: "v" },
    { label: "tuoi", value: "g" },
    { label: "lol", value: "e" },
    { label: "hehe", value: "k" },
    { label: "non", value: "a" },
  ];

  const [selectedValue, setSelectedValue] = useState<BaseValueType>(1);

  const handleChange = (selectedValue: BaseValueType, selectedItem: any) => {
    setSelectedValue(selectedValue);
    console.log("Selected Value:", selectedValue);
    console.log("Selected Item:", selectedItem);
  };

  const handleClickFavorite = (id: number, favorite: boolean | undefined) => {
    const foundItem = listItems.find((item) => item.id === id);
    if (foundItem) {
      foundItem.isFavorite =
        favorite !== undefined ? !foundItem.isFavorite : true;
    }
  };

  const handleChangePrice = (min: number, max: number) => {
    console.log("max: ", min, max);
  };

  const onProductChecked = (checkedItem: IProduct, isChecked: boolean) => {
    const checked = listProductChecked.some(
      (item: IProduct) => item.id === checkedItem.id
    );
    let updatedCheckedItems: IProduct[];
    if (isChecked && checked) {
      updatedCheckedItems = listProductChecked.map((item: IProduct) =>
        item.id === checkedItem.id ? checkedItem : item
      );
    } else {
      updatedCheckedItems = isChecked
        ? [...listProductChecked, checkedItem]
        : listProductChecked.filter((item) => item.id !== checkedItem.id);
    }
    setListProductChecked(updatedCheckedItems);
  };
  return (
    <>
      <Header />
      <Counter
        min={0}
        max={10}
        onChangeCount={(count) => {
          console.log(count);
        }}
      />
      <div className="max-w-64">
        <h1>Filters</h1>
        <Filter data={dataFilter} onChange={() => {}} />
        <FilterPrice maxPrice={1000} onChange={handleChangePrice} />
      </div>

      <main className={cn("mx-10 mt-10 mb-20 space-y-4")}>
        <div>
          <Carousel
            images={images}
            isShowImageBottom={true}
            className="w-1/2x"
          />
          <button
            className="text-3xl mr-10"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button className="text-3xl" onClick={() => setCount(count - 1)}>
            -
          </button>
          <ProgressStepper
            currentStep={count}
            stepItems={[
              { title: "Đăng nhập", stepNumber: 1 },
              { title: "Nhập thông tin", stepNumber: 2 },
              { title: "Thanh toán", stepNumber: 3 },
              { title: "Hoàn thành", stepNumber: 4 },
            ]}
          />
        </div>
        <ProductReview dataReviews={dataReview} />
        <h1>Product Items</h1>
        {listItems.map((item, index) => (
          <ProductItem
            key={index}
            product={item}
            isPayment={true}
            onChange={onProductChecked}
          />
        ))}
        <button
          onClick={() => {
            console.log(listProductChecked);
          }}
          className="border-2 border-primary-800 p-2 hover:bg-primary-800 hover:text-white rounded-md"
        >
          Show ProductItems
        </button>
        <h1>Buttons</h1>
        <div className="space-x-2">
          <Button
            variant="outlined"
            onClick={() => {
              console.log("baodang");
            }}
          >
            <CartPlus /> Outlined Button
          </Button>
          <Button disabled variant="outlined">
            <CartPlus /> Disabled Outlined Button
          </Button>
          <Button>
            <CartPlus /> Primary Button
          </Button>
          <Button disabled>
            <CartPlus /> Disabled Primary Button
          </Button>
        </div>

        <Image
          priority={false}
          alt=""
          width={1000}
          height={500}
          src="https://images.unsplash.com/photo-1653832919710-348081cb9e87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <h1>Inputs</h1>
        <Input
          type="text"
          placeholder="Outlined Input"
          error="Sample error"
          icon={<Search className="text-primary-600" />}
        />
        <Input
          type="text"
          placeholder="Outlined Input"
          icon={<Search className="text-primary-600" />}
        />
        <Input type="text" disabled placeholder="Disabled Input" />
        <Input
          type="text"
          variant={"standard"}
          placeholder="Standard Input"
          error="Sample error"
          icon={<Search className="text-primary-600" />}
        />
        <Input type="text" variant={"filled"} placeholder="Filled Input" />

        <h1>Selector</h1>
        <Selector
          options={selectorValues}
          value={selectedValue}
          onChange={handleChange}
        />

        <h1>Dropdown</h1>
        <Dropdown
          size="lg"
          className="w-60"
          isShowSearch
          value={selectedItem}
          onChange={setSelectedItem}
          placeholder="Chọn tỉnh / thành"
          options={[
            { value: "HN", label: "Hà Nội" },
            { value: "HD", label: "Hải Dương" },
            { value: "HP", label: "Hải Phòng" },
            { value: "HB", label: "Hòa Bình" },
            { value: "PT", label: "Phú Thọ" },
            { value: "CB", label: "Cao Bằng" },
            { value: "LS", label: "Lạng Sơn" },
            { value: "DB", label: "Điện Biên" },
            { value: "TH", label: "Thanh Hóa" },
          ]}
        />
        <Dropdown
          size="lg"
          className="w-60"
          placeholder="Chọn tỉnh / thành"
          onChange={(value) => console.log("value", value)}
          options={[
            { value: "DB2", label: "Điện Biên 2" },
            { value: "TH2", label: "Thanh Hóa 2" },
          ]}
        />
        <Dropdown
          size="lg"
          disabled
          placeholder="Chọn tỉnh / thành"
          className="w-60"
          options={[
            { value: "HN", label: "Hà Nội" },
            { value: "HD", label: "Hải Dương" },
            { value: "HP", label: "Hải Phòng" },
            { value: "HB", label: "Hòa Bình" },
            { value: "PT", label: "Phú Thọ" },
            { value: "CB", label: "Cao Bằng" },
          ]}
        />
        <Dropdown size="sm" placeholder="Sản phẩm" options={optionsDropdown} />
        <Dropdown
          size="sm"
          disabled
          placeholder="Sản phẩm"
          options={optionsDropdown}
        />

        <h1>Pagination</h1>
        <Pagination
          total={200}
          currentPage={page}
          pageSize={10}
          onPageChange={onPaginationChange}
        />

        <div className="max-w-64">
          <h1>Filters</h1>
          <Filter data={dataFilter} onChange={console.log} />
          <FilterPrice maxPrice={1000} onChange={handleChangePrice} />
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {listItems.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              isFavorite={item.isFavorite}
              price={item.price}
              discount={item.discount}
              rating={item.rating}
              disabled={item.disabled}
              onClick={handleClickFavorite}
            />
          ))}
        </div>
        <div>
          <h1 className="mt-12 text-3xl text-center font-semibold">
            Featured Products
          </h1>
          <p className="text-center mt-2 font-thin mb-8">
            See What’s Trending Right Now
          </p>
          <Category
            categories={[
              {
                title: "Lounge",
                imgUrl:
                  "https://s3-alpha-sig.figma.com/img/937c/09ba/9248f88051941a20915b8b139e9cd52b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oGdMDxEJgtTMJNzQwAQtM68t7PM6ZsH-c4n9lGZLn4Qql452VEqt9FRyT7onW-55JZz-hxe5ciRWzofd-eiQt2NoBLlV795XoLp~o63kEgcjRFipCt5lBMeRX49j7Va7EvqxBIz1IZ0k7DmoQEWC7Kmr49lhZ7XF6MDmCMy2XTTImc75zbBItE0TKofAXCPZcyON~h3gL6VaAJbZnZZ5PZV9cmJaM0O~Mfpx4aW1w7rofVJdY8fx7RGPZxfMJ~dwes5QIbPQ04aJ1exzwfRVVd7pi2IcAkX5C67G7x7~7vfW72e4LpHAaH3XO~gu~h6wct9ej~0idYFUfLd6ojoxdg__",
                href: "/Lounge",
              },
              {
                title: "Living",
                imgUrl:
                  "https://s3-alpha-sig.figma.com/img/3a76/76ab/571073cd0c3c75ebc7c4c9017d2bdc5a?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXvZtWoRkDA09wozEiDzCpwwPWAM7gCR6wUgMLKMU8xhw1KATXfzHuHKyHrg~QwVX1dv7txHntqMblLcozcVHS8w98fegGGE65ywo3kgQSVei9xg-SZ8l8A1fuolJI64arexEO2GuAzzOlcIyf~Mxp6ZGAn9A~LOF2cgYMhNkFJSrbwxbiVui8SBYlN3MSgkOZ23QgydMsQNN-OehxYecdWsHfa6vR75bqWHbKcv4PfsD3XrIpLm5KAfRF0sV8ybC7yMfpDIPtGb5N9h97PRgbrb2zUKig8ZdXwhPhZ0TYV1lQTt1WGwQB44KAkJpb0fsJml1buXHCsTUKVZaGN8vQ__",
                href: "/Living",
              },
              {
                title: "Dining",
                imgUrl:
                  "https://s3-alpha-sig.figma.com/img/8374/af68/7c2a49092ebf6bc34bbfa4e4471b86b2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HwTJ2jgBJ74WW1NUD0QFNJSm8fqUYXcgbkFScwKjWqcWjHaP70CZu8IIiCQrQN0hYr1ODmkzFlDrtNebseWqqk6VWEDpFdv49Yt6Fw5km3I2qJw595NefkS-LVEAaVi4HO06Vi5W9bwboMNbjtosSxBIV6~H-4WMKsnVfzXWmc8xUoULMQA1-Eof~fZdv5HnytAkdHohbXcX61fwaM2k9uU3VHcQrwvD7Xl8hZmvHGu37HZLcHBiKbXmgvd0xpv-2RyJ1E9Sp39vJ8Rm6~jGv7XF2tKyT9JZS~WDdQBoNgezyzFzAYeshWvtGoXICl6KB9Cd~vaSI4vXopI-9TSj~Q__",
                href: "/Dining",
              },
              {
                title: "Bedroom",
                imgUrl:
                  "https://s3-alpha-sig.figma.com/img/d213/aae2/030eb6c1e5f0b38231d0d17bb28ac6d4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUOMbWuOR9PD8rT4QOLvfxSs03Ha05ow1oMGaG2a19eP-CT5eoRvkP1N8iMCMLp5Uu5fiNyw8zrWIq2kGdXQc~Q~1rCtuZ3Cc-WpGN9RIryH~C94Qwa6soQY0qPhK0leizl9pPrH6ivGlwGYBmrPNPbd5gs2lpIv5iQ58XMMmhoO2oi~vFiX8zMtpGQqZ5sm988ey57wexHQns3OV5qxAz71dyTRmktquI1GrqKF1gT7jAIISGUNFJqQAec82yXFqlULCL-fQNoHDt9c7zqsvvQEiU3MbC-ONFw5Jdc8AU6QMwjm8hVlp6ZWrihzwzdZBkrLOqOTLbCFWTt7KPsW3w__",
                href: "/Bedroom",
              },
            ]}
          />
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
