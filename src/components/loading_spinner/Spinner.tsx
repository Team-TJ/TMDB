"use client";
import { useLoadingStore } from "@/states/loading";
import { usePathname } from "next/navigation";

export default function Spinner() {
  const pathName = usePathname();
  console.log(pathName);
  const isLoadingCnt = useLoadingStore((state) => state.isLoadingCnt);
  const isLoadingYet = useLoadingStore((state) => state.isLoadingYet);
  if (isLoadingCnt !== 0 || (isLoadingYet && pathName === "/")) {
    return (
      <div
        className={
          "fixed top-0 left-0 w-full h-full bg-black flex content-center justify-center z-50"
        }
      ></div>
    );
  } else {
    return null;
  }
}
