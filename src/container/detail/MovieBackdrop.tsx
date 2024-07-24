import Image from "next/image";

const Page = ({ imgPath }: { imgPath: string }) => {
  return (
    <div className="absolute top-[80px] w-full h-[300px] overflow-hidden  z-[-1]">
      <Image
        fill
        className="scale-[1] object-cover object-center lg:brightness-[50%]"
        src={`https://image.tmdb.org/t/p/original/${imgPath}`}
        alt="이미지"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#091A38] from-[5%]"></div>
    </div>
  );
};

export default Page;
