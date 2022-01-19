import React, { useRef } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { firstMenuData, secondMenuData } from "../../data/menu";
import { useDropdownClickBody } from "../../hooks";
import { ImgUserProfile } from "../../assets/images/profile";


//src->데이터폴더->메뉴폴더로 반복 배열값을 넘겨서 가져온다.

const DropdownProfile = ({ onClose }) => {
  const dropdownEl = useRef(null);
  useDropdownClickBody(dropdownEl, onClose);
  return (
    <>
      <Container ref={dropdownEl}>
        <Top>
          <TopLeft>
            <ImgProfile />
          </TopLeft>
          <TopRight>
            <UserName>김태완</UserName>
            <LinkAccountSetting>Google 계정관리</LinkAccountSetting>
          </TopRight>
        </Top>
        <Menu data={firstMenuData} />
        <Menu data={secondMenuData} />
        {/* 메뉴.jsx로 데이터 값을 보내준다 */}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  position: absolute;
  background: #fff;
  right: 0;
`;

const Top = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;
const TopLeft = styled.div``;

const ImgProfile = styled.img`
  background-image: url(${ImgUserProfile});
  width: 40px;
  height: 40px;
  background-position: center;
  background-size: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;
const TopRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.span``;

const LinkAccountSetting = styled.span`
  margin-top: 8px;
  color: #065fd4;
`;

export default DropdownProfile;
