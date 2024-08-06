"use client";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
export default function Header() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function modalHandler() {
    setModalIsVisible((state) => !state);
  }
  return (
    <header className="lg:h-20 h-16 fixed w-full bg-slate-900 z-40">
      <div className="h-full w-[95%] flex justify-between items-center m-auto">
        <h1 className="h-3/5">
          <Link className="flex h-full  group" href={"/"}>
            <span className="hidden">영화 정보 사이트</span>
            <img
              className="flex-1 h-full mr-3 transition duration-500 group-hover:[transform:rotateY(360deg)]"
              src="/logo.png"
              alt=""
            />
            <img
              className="flex-1 h-full mr-3 transition duration-500 group-hover:[transform:rotateX(360deg)]"
              src="/logo-text.png"
              alt=""
            />
          </Link>
        </h1>
        <nav className="flex justify-between w-44">
          <button className="flex-auto group" onClick={modalHandler}>
            <TiThMenu className="text-white lg:h-8 lg:w-8 h-6 w-6 group-active:text-emerald-300" />
          </button>
          {modalIsVisible && (
            <div className="absolute top-16 lg:top-20 w-full h-24 bg-slate-800 flex flex-col justify-between text-white text-sm font-light">
              <Link href={"/"} className="p-1 hover:text-emerald-300">
                현재 상영작
              </Link>
              <Link href={"/"} className="p-1 hover:text-emerald-300">
                인기 영화
              </Link>
              <Link href={"/"} className="p-1 hover:text-emerald-300">
                최신/개봉예정
              </Link>
            </div>
          )}
          <Link href={"/search"} className="flex-auto">
            <div className="text-white flex text-sm font-semibold transition hover:text-emerald-300">
              <FaSearch className="lg:h-8 lg:w-8 h-6 w-6" />
              <span className="ml-1 lg:leading-7">검색하기</span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
