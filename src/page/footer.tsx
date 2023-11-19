import React from "react";
import delgoGooglePlay from "../common/icons/delgoGooglePlay.svg";
import delgoAppStore from "../common/icons/delgoAppStore.svg";
import delgoInstagram from "../common/icons/delgoInstagram.svg";
import shareDelgoUrl from "../common/icons/shareDelgoUrl.svg";

function Footer() {
  const navigateToAppstore = () => {
    window.location.href =
      "https://apps.apple.com/kr/app/delgo-%EA%B0%95%EC%95%84%EC%A7%80%EC%A7%80%EB%8F%84-%EB%8D%B8%EA%B3%A0-%EC%9A%B0%EB%A6%AC-%EA%B0%95%EC%95%84%EC%A7%80-%EB%8D%B0%EB%A6%AC%EA%B3%A0-%EB%8F%99%EB%84%A4%EC%83%9D%ED%99%9C/id1662427735";
  };
  const navigateToGooglestore = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.delgo.delgoreward";
  };
  const navigateToDelgoInsta = () => {
    window.location.href = "https://www.instagram.com/delgo_official/";
  };
  const navigateToDelgoEmail = () => {
    window.location.href = "mailto:official@delgo.pet";
  };
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      alert("클립보드에 링크가 복사되었어요.");
    } catch (error) {}
  };
  //junjangsee.tistory.com/entry/React-리액트로-클립보드-복사-기능-만들어보기-feat-Custom-Hook [개발 여행:티스토리]

  출처: https: return (
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
          <div className="mr-[31px]" onClick={navigateToDelgoEmail}>
            제휴문의
          </div>
          <div onClick={navigateToDelgoEmail}>IR문의</div>
        </div>
        <div className="flex text-[#646566] text-[24px] leading-[150%] font-semibold mb-[210px]">
          <div className="mr-[31px]">이용약관</div>
          <div className="mr-[31px]">개인정보처리방침</div>
          <div className="mr-[31px]">위치기반서비스 이용약관</div>
          <div className="mr-[31px]">청소년보호정책</div>
        </div>
      </div>
      <div className="text-[24px] leading-[150%] font-semibold">
        <div>델고 앱 다운로드</div>
        <div className="flex mt-[21.52px]">
          <div
            className="flex bg-[#7A5CCF] px-[61px] py-[14px] rounded-[12px] mr-[14px] justify-center align-middle"
            onClick={navigateToAppstore}
          >
            <img src={delgoAppStore} />
            <div className="ml-[11px] text-white font-light whitespace-nowrap">
              App Store
            </div>
          </div>
          <div
            className="flex bg-[#7A5CCF] px-[57px] py-[14px] rounded-[12px] mr-[14px] justify-center align-middle"
            onClick={navigateToGooglestore}
          >
            <img src={delgoGooglePlay} />
            <div className="ml-[11px] text-white font-light whitespace-nowrap">
              Google Store
            </div>
          </div>
        </div>
        <div className="flex mt-[73.37px]">
          <img
            className="mr-[36px]"
            src={delgoInstagram}
            onClick={navigateToDelgoInsta}
          />

          <img src={shareDelgoUrl} onClick={handleCopyClipBoard} />
        </div>
      </div>
    </div>
  );
}
export default Footer;
