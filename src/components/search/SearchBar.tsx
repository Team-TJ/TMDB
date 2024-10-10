'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Reactfrom from "react";
import { IoSearch } from "react-icons/io5";
import { usePathname,useRouter } from "next/navigation";
const SearchBar:React.FC<any> = ({searchInput,setSearchInput}) => {
 const router=useRouter()
 const pathname=usePathname()

  return (
    <div className="max-w-[900px] border bg-white m-auto mt-[80px]">
      <div className="border searchInput flex">
        <IoSearch className="m-2 scale-150"/>
        <Input
          type="text"
          placeholder="영화 제목 검색"
          onChange={e=>router.push(`?searchParam=${e.target.value}`)}
          className="border-0 hover:border-0"
        ></Input>
      </div>
      {/* <nav className="border"> 장르별 네비바</nav> */}
    </div>
  );
};

export default SearchBar;
