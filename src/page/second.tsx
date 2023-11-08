import React from "react";
import image2 from "../common/images/image2.png";
import cert from "../common/icons/cert.svg";
import cafe from "../common/icons/cafe.svg";
import bookmark from "../common/icons/bookmark.svg";

function Second() {
  return (
    <div className=" overflow-hidden">
      <div className="flex pt-[393px] justify-center">
        <div className="mt-[78px]">
          <div className="text-[#8167CD] font-bold text-[24px] leading-[150%] mb-[22.22px]">
            나만의 반려견 지도
          </div>
          <div className="text-[#3D2582] font-bold text-[64px] leading-[150%] mb-[35.78px] mr-[109.34px]">
            강아지가 살기 좋은 <br />
            우리동네 만들기
          </div>
          <div className="">
            <div className="flex mb-[11px] border-solid border-[2px] rounded-[80px] pt-[34px] pb-[26px] pl-[30px] w-[530px] bg-opacity-25 bg-white shadow-sm">
              <img src={cert} />
              <div className="pl-[32px]">
                <div className="text-[#3D2582] text-[28px] font-bold mb-[9px]">
                  지도에 방문기록 남기기
                </div>
                <div className="text-[20px] font-normal leading-[150%] text-[#3D3D3D]">
                  지도에 사진과 함께 기록을 남기고,
                  <br />
                  우리동네 동반 장소들을 이웃들과 공유해요
                </div>
              </div>
            </div>
            <div className="flex mb-[11px] border-solid border-[2px] rounded-[80px] pt-[34px] pb-[26px] pl-[30px] w-[530px] bg-opacity-25 bg-white shadow-sm">
              <img src={cafe} />
              <div className="pl-[32px]">
                <div className="text-[#3D2582] text-[28px] font-bold mb-[9px]">
                  이웃 강아지들의 동반지도
                </div>
                <div className="text-[20px] font-normal leading-[150%] text-[#3D3D3D]">
                  우리동네 강아지들이 다녀 온 장소들도
                  <br />
                  지도로 확인 할 수 있어요
                </div>
              </div>
            </div>
            <div className="flex mb-[11px] border-solid border-[2px] rounded-[80px] pt-[34px] pb-[26px] pl-[30px] w-[530px] bg-opacity-25 bg-white shadow-sm">
              <img src={bookmark} />
              <div className="pl-[32px]">
                <div className="text-[#3D2582] text-[28px] font-bold mb-[9px]">
                  가고싶은 동반 장소는 저장하기
                </div>
                <div className="text-[20px] font-normal leading-[150%] text-[#3D3D3D]">
                  펫 프랜들리 공간을 찾았다면
                  <br />
                  저장해서 나만의 강아지 지도를 만들어요
                </div>
              </div>
            </div>
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
