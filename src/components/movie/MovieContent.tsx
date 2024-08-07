import Link from "next/link";
interface MovieProps {
  index: number;
}
export default function MovieContent({ index }: MovieProps) {
  return (
    <>
      <figure className="group px-[10px] h-auto box-border w-[249.75px]">
        <Link
          className="block h-full bg-[#03b3e4] transition-all duration-300 group-hover:bg-[#8ccda2] group-hover:scale-110 group-hover:relative group-hover:z-10"
          href={""}
        >
          <div className="relative overflow-hidden">
            <img
              className="w-full brightness-[80%] transition-all duration-300 "
              src="https://image.tmdb.org/t/p/w500/4Zb4Z2HjX1t5zr1qYOTdVoisJKp.jpg"
              alt=""
            />
            <span></span>
            <small></small>
          </div>
          <figcaption className="p-[10px] text-ellipsis overflow-hidden whitespace-nowrap text-white">
            <h3 className="font-semibold text-[1.2em]">데드풀과 울버린</h3>
            <p className="text-[0.9em]">액션 / 코메디 / SF</p>
            <p className="text-[0.9em]">{index}</p>
          </figcaption>
        </Link>
      </figure>
    </>
  );
}
