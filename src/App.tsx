import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./common/icons/logo.svg";
import footprint from "./common/icons/footprint.svg";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import Main from "./page/main";
import Second from "./page/second";
import Third from "./page/third";
import Footer from "./page/footer";

function App() {
  const queryClient = new QueryClient();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundOpacity = scroll >= 10 ? 100 : 0; // 스크롤 위치에 따라 opacity를 설정합니다.

  return (
    <div className="overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        <div
          className={`bg-white bg-opacity-${backgroundOpacity} flex fixed pt-[70px] w-screen justify-between h-[156px]`}
        >
          <div>
            <img className=" ml-[200px]" src={logo} />
          </div>
          <div className="mb-[15px] flex items-center mr-[127.5px] border-[2px] border-[#DDD1FE] bg-white rounded-[72px] px-[35px] py-[15px] leading-[150‰] text-[#3D2582] font-bold text-[24px]">
            앱 다운로드
            <img className="ml-[10px] w-[30px]" src={footprint} />
          </div>
        </div>
        <Main />
        <Second />
        <div className="h-[300px]"></div>
        <Third />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
