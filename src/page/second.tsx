import React from "react";
import image2 from "../common/images/image2.png";

function Second() {
  return (
    <div className=" bg-gradient-to-tr from-purple-200 via-transparent to-transparent h-screen w-screen overflow-hidden">
      <div className="flex pt-[393px] ml-[328.66px] justify-center">
        <div className="mt-[78px]">
          <div className="text-[#8167CD] font-bold text-[24px] leading-[150%] mb-[22.22px]">
            나만의 반려견 지도
          </div>
          <div className="text-[#3D2582] font-bold text-[64px] leading-[150%] mb-[35.78px] mr-[109.34px]">
            강아지가 살기 좋은 <br />
            우리동네 만들기
          </div>
          <div className="text-[#3D3D3D] font-normal leading-[150%] text-[24px] mb-[113px]">
            델고에서 동네 반려인들이 다녀간 펫 프랜들리 장소를 발견해요. <br />
            장소를 저장하여 강아지 지도를 만들고 이웃 반려인들과 공유해요.
          </div>
        </div>
        <div>
          <img className="w-[611px] h-[986px]" src={image2} />
        </div>
      </div>
    </div>
  );
}

export default Second;
