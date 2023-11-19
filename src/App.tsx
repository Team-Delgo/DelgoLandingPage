import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import delgoLogo from "./common/icons/delgoLogo.svg";
import dogFootPrint from "./common/icons/dogFootPrint.svg";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState, useCallback } from "react";
import Main from "./page/main";
import Second from "./page/second";
import Third from "./page/third";
import Footer from "./page/footer";
import useApp from "./page/App.hook";

function App() {
  const {
    state: { backgroundOpacity },
    action: { navigateToDownload },
  } = useApp();

  const queryClient = new QueryClient();
  return (
    <div className="overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        <div
          className={`bg-white bg-opacity-${backgroundOpacity} flex fixed pt-[70px] w-screen justify-between h-[156px]`}
        >
          <div>
            <img className=" ml-[200px]" src={delgoLogo} />
          </div>
          <div
            className="mb-[15px] flex items-center mr-[127.5px] border-[2px] border-[#DDD1FE] bg-white rounded-[72px] px-[35px] py-[15px] leading-[150‰] text-[#3D2582] font-bold text-[24px]"
            onClick={navigateToDownload}
          >
            앱 다운로드
            <img className="ml-[10px] w-[30px]" src={dogFootPrint} />
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
