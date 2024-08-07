export default function Footer() {
  return (
    <footer className="bg-[rgba(0,0,0,0.4)] py-[30px] mt-[5vh]">
      <div className="m-auto w-[min(90%,1000px)] text-center flex items-center justify-center flex-col">
        <h6 className="w-[50px] sm:mb-[10px]">
          <img className="w-full" src="/logo-square.png" alt="" />
        </h6>
        <div className="lg:flex-initial">
          <p className="text-white">
            해당 사이트는 TMDB에서 제공되는 API를 이용하여 구축하였습니다.
            <br />
            자세한 정보는 TMDB 공식문서를 참조해 주세요
          </p>
          <p className="text-white">COPYRIGHT ⓒ TMDB ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
