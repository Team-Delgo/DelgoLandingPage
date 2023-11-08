import React from "react";
import google from "../common/icons/googlestore.svg";
import apple from "../common/icons/applestore.svg";
import insta from "../common/icons/instagram.svg";
import share from "../common/icons/share.svg";

function Footer() {
  return (
    <div className="flex mt-[109.31px] bg-white justify-center">
      <div className="text-[20px] leading-[160%] font-normal">
        <div>
          대표 이창민 사업자번호 345-49-00732
          <br />
          주소 서울특별시 중구 퇴계로 265 충무창업큐브 B214호
          <br />
          전화 070-7954-2910 | 고객문의 official@delgo.pet
        </div>
        <div className="flex text-[#646566] text-[24px] leading-[150%] font-semibold mt-[104.67px]">
          <div className="mr-[71px]">제휴문의</div>
          <div>IR문의</div>
        </div>
        <div className="flex text-[#646566] text-[24px] leading-[150%] font-semibold mb-[210px]">
          <div className="mr-[71px]">이용약관</div>
          <div className="mr-[71px]">개인정보처리방침</div>
          <div className="mr-[71px]">위치기반서비스 이용약관</div>
          <div className="mr-[71px]">청소년보호정책</div>
        </div>
      </div>
      <div className="text-[24px] leading-[150%] font-semibold">
        <div>델고 앱 다운로드</div>
        <div className="flex mt-[21.52px]">
          <div className="flex bg-[#7A5CCF] px-[61px] py-[14px] rounded-[12px] mr-[14px] justify-center align-middle">
            <img src={apple} />
            <div className="ml-[11px] text-white font-light whitespace-nowrap">
              App Store
            </div>
          </div>
          <div className="flex bg-[#7A5CCF] px-[57px] py-[14px] rounded-[12px] mr-[14px] justify-center align-middle">
            <img src={google} />
            <div className="ml-[11px] text-white font-light whitespace-nowrap">
              Google Store
            </div>
          </div>
        </div>
        <div className="flex mt-[73.37px]">
          <img className="mr-[36px]" src={insta} />

          <img src={share} />
        </div>
      </div>
    </div>
  );
}
export default Footer;
