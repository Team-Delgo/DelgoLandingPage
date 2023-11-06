import React from "react";
import logo from "../common/icons/logo.svg";
import footprint from "../common/icons/footprint.svg";
import qr from "../common/icons/qr.svg";
import image1 from "../common/images/image1.png";

function Main() {
  return (
    <div className="bg-gradient-to-bl from-purple-200 via-transparent to-transparent h-screen w-screen overflow-hidden">
      <div className="flex pt-[122px] w-screen justify-between">
        <img className=" ml-[200px]" src={logo} />
        <div className="flex items-center mr-[127.5px] bg-white rounded-[72px] px-[35px] py-[15px] leading-[150‰] text-[#3D2582] font-bold text-[24px]">
          앱 다운로드
          <img className="ml-[10px] w-[30px]" src={footprint} />
        </div>
      </div>
      <div className="flex pt-[393px] ml-[328.66px] justify-center">
        <div className="mt-[78px]">
          <div className="text-[#8167CD] font-bold text-[24px] leading-[150%] mb-[22.22px]">
            반려견 동반 장소
          </div>
          <div className="text-[#3D2582] font-bold text-[64px] leading-[150%] mb-[35.78px] mr-[109.34px]">
            우리동네 반려인들이 <br />
            함께 만든 강아지 지도
          </div>
          <div className="text-[#3D3D3D] font-normal leading-[150%] text-[24px] mb-[113px]">
            델고에서 동네 반려인들이 다녀간 펫 프랜들리 장소를 발견해요. <br />
            장소를 저장하여 강아지 지도를 만들고 이웃 반려인들과 공유해요.
          </div>
          <div className="flex items-end">
            <img src={qr} />
            <div className="text-[24px] ml-[26px]">
              앱다운받고
              <br />더 많은 장소 보기
            </div>
          </div>
        </div>
        <div>
          <img className="w-[611px] h-[986px]" src={image1} />
        </div>
      </div>
      {/* <div>
        <div>친구들의 동반지도</div>
        <div></div> 
      </div> */}
    </div>
  );
}

export default Main;
