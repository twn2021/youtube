import styled, { keyframes } from "styled-components";
import Backdrop from "./backdrop";
import React, { useState } from "react";

import { Youtube } from "../../assets/images/youtube";

import imgHamburger from "../../assets/images/youtube/ham.png";
import Menu from "./Menu";
import {
  sidebarMenuData1,
  sidebarMenuData2,
  sidebarMenuData3,
  sidebarMenuData4,
  sidebarMenuData5,
} from "../../data/menu";

const ModalSidebar = ({ onClose }) => {
  const [collapse, setCollapse] = useState(false);
  const handleClose = () => {
    setCollapse(true);
    setTimeout(onClose, 300); // 닫힐때 0.3초 딜레이
  };

  return (
    <>
      <Sidebar collapse={collapse}>
        <Top>
          <ImgHamburger src={imgHamburger} alt="hamburger" />
          <ImgLogo src={Youtube} alt="logo" />
        </Top>
        <Bottom>
          <Menu data={sidebarMenuData1} />
          <Menu data={sidebarMenuData2} defaultCount={5} />
          <Menu title="구독" data={sidebarMenuData3} defaultCount={4} />
          {/* 구독목록 4개 초과는 더보기 활성화 */}
          <Menu title="YOUTUBE 더보기" data={sidebarMenuData4} />
          <Menu data={sidebarMenuData5} />
          {/* menu.js 파일속의 데이터를 Munu.jsx 파일로 보내준다. */}
        </Bottom>
      </Sidebar>
      <Backdrop collapse={collapse} onClick={handleClose} />
    </>
  );
};

const slideSidebar = keyframes`
  from {
    left: -240px;
  }
  to {
    left: 0;
  }
`;


const Sidebar = styled.div`
  animation: ${slideSidebar} 0.3s ease-out;
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ collapse }) => (collapse ? "-240px" : "0")};
  transition: left 0.3s ease-out;
  background: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  height: 56px;
`;

const ImgLogo = styled.img`
  width: 120px;
  height: 56px;
  margin: 18px 14px;
  cursor: pointer;
`;
const ImgHamburger = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  overflow: auto;
`;

export default ModalSidebar;
