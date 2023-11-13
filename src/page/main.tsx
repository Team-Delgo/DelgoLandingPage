import React from "react";
import delgoAppQR from "../common/icons/delgoAppQR.svg";
import petFriendlyMap from "../common/images/petFriendlyMap.png";

function Main() {
  return (
    <div className="bg-gradient-to-bl from-purple-200 via-transparent to-transparent w-screen overflow-hidden ">
      <div className="flex pt-[340px] justify-center">
        <div className="mt-[78px]">
          <div className="text-[rgb(129,103,205)] font-bold text-[24px] leading-[150%] mb-[22.22px]">
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
            <img src={delgoAppQR} />
            <div className="text-[24px] ml-[26px]">
              앱다운받고
              <br />더 많은 장소 보기
            </div>
          </div>
        </div>
        <div>
          <img className="w-[611px] h-[986px]" src={petFriendlyMap} />
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
