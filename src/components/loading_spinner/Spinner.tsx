"use client";
import { useLoadingStore } from "@/states/loading";
import { usePathname } from "next/navigation";

export default function Spinner() {
  const pathName = usePathname();
  const isLoadingCnt = useLoadingStore((state) => state.isLoadingCnt);
  const isLoadingYet = useLoadingStore((state) => state.isLoadingYet);
  if (isLoadingCnt !== 0 || (isLoadingYet && pathName === "/")) {
    return (
      <div
        className={
          "fixed top-0 left-0 w-full h-full bg-black flex content-center justify-center z-50 opacity-60"
        }
      >
        <div className="relative">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 absolute top-[50%] mt-[-40px] left-[50%] ml-[-40px]"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
