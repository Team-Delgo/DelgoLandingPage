import React from "react";
import image3 from "../common/images/image3.png";
function Third() {
  return (
    <div className="bg-gradient-to-t from-[#E3DCFF] via-transparent to-transparent w-screen overflow-hidden">
      <div className="text-[#8167CD] text-[24px] font-bold leading-[150%] mb-[19px] text-center">
        추억저장
      </div>
      <div className="text-center text-[#3D2582] text-[64px] font-bold leading-[150%] mb-[24px]">
        강아지와의 추억을 차곡차곡
      </div>
      <div className="text-[#3D3D3D] text-center text-[24px] leading-[150%] mb-[81px]">
        델고에서 날짜, 활동별로 강아지와의 추억을 확인 할 수 있어요.
      </div>
      <div className="flex justify-center h-[715px]">
        <img src={image3} />
      </div>
      <div className="h-[337px]"></div>
    </div>
  );
}

export default Third;
