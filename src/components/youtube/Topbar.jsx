import React, { useState } from "react";
import styled from "styled-components";
import DropdownProfile from "./DropdownProfile";
import imgHamburger from "../../assets/images/youtube/ham.png";
import { Youtube, Goodok, Mymovie, Showlecord } from "../../assets/images/youtube";
import { ImgUserProfile } from "../../assets/images/profile";
import { Magnifier } from "../../assets/images/icons"

export const Topbar = ({ onOpenSidebar }) => {
  const [showDropdownProfile, setshowDropdownProfile] = useState(false);

  return (
    <>
      <Container>
 
          <ImgHamburger
            onClick={onOpenSidebar}
            src={imgHamburger}
            alt="hamburger"
          />
          <ImgLogo src={Youtube} alt="logo" />

        <SearchWrapper>
          <InputSearch placeholder="검색" />
          <SearchBox>
           <BtnSearch />
          </SearchBox>
        </SearchWrapper>

        <DropdownWrapper>
          <ImgMyChanel src={Goodok} />
          <ImgMyChanel src={Mymovie} />
          <ImgMyChanel src={Showlecord} />
          <BtnProfile
            onClick={() => setshowDropdownProfile(!showDropdownProfile)}
          >
            <ImgProfile />
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
  justify-content: space-around;
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
  justify-content: center;
`;

const InputSearch = styled.input`
  flex: 1;
  font-size: 16px;
  max-width: 600px;
  height: 40px;
  padding: 10px;
  margin-left: 30px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const SearchBox = styled.div`
background-color: #f8f8f8;
padding: 1px 6px;
border: 1px solid #ccc;
border-left: none;
`;

const BtnSearch = styled.button`
background-image: url(${Magnifier});
background-position: center;
background-size: 22px;
width: 22px;
height: 22px;
margin-top: 7px;
margin: 7px 15px 0 15px;
`;

const ImgLogo = styled.img`
  width: 120px;
  height: 56px;
  cursor: pointer;
  padding: 8px 4px;
`;

const ImgMyChanel = styled.img`
margin: 0 5px;
width: 32px;
height: 32px; 
align-items: center;
`;

const DropdownWrapper = styled.div`
  display: flex;
  min-width: 220px;
  position: relative;
  justify-content: space-around;
`;


const BtnProfile = styled.button`
  position: relative;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
const ImgProfile = styled.img`
  background-image: url(${ImgUserProfile});
  background-position: center;
  background-size: 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 10px 0 5px;
`;

export default Topbar;
