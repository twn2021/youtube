import React, { useState } from "react";
import styled from "styled-components";
import DropdownProfile from "./DropdownProfile";
import imgHamburger from "../../assets/images/ham.png";
import imgLogo from "../../assets/images/youtube.png";

export const Topbar = ({ onOpenSidebar }) => {
  const [showDropdownProfile, setshowDropdownProfile] = useState(false);

  return (
    <>
      <Container>
        <ImgHamburger
          onClick={onOpenSidebar}
          src={imgHamburger}
          alr="hamburger"
        />
        <ImgLogo src={imgLogo} alt="logo" />
        <SearchWrapper>
          <InputSearch placeholder="검색" />
          <BtnSearch>검색</BtnSearch>
        </SearchWrapper>

        <DropdownWrapper>
          <BtnProfile
            onClick={() => setshowDropdownProfile(!showDropdownProfile)}
          >
            <ImgProfile src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg" />
          </BtnProfile>
          {showDropdownProfile && (
            <DropdownProfile onClose={() => setshowDropdownProfile(false)} />
          )}
        </DropdownWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 56px;
  padding: 0 20px;
  box-sizing: none;
  background: #fff;
  border-radius: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const ImgHamburger = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px;
  cursor: pointer;
`;
const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 0 20px;
`;

const InputSearch = styled.input`
  flex: 1;
  max-width: 600px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
`;
const BtnSearch = styled.button``;
const ImgLogo = styled.img`
  width: 120px;
  height: 56px;
  margin: 18px 14px;
  cursor: pointer;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;
const BtnProfile = styled.button`
  position: relative;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
const ImgProfile = styled.img`
  width: 42px;
  height: 32px;
  border-radius: 50%;
`;

export default Topbar;
