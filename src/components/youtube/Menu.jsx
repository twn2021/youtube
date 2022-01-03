import React, { useState } from "react";
import styled from "styled-components";
import imgDown from "../../assets/images/down.png";
import imgUp from "../../assets/images/up.png";

const Menu = ({ data, title, moreData, defaultCount = 999 }) => {
  // 드롭다운프로필 프롭스안에 있는 data 값을 받아오기 위해 {}를 사용한다.

  const [showMore, setShowMore] = useState(false);

  return (
    <List>
      {title && <Title>{title}</Title>}
      {/* title이 있을때만 타이틀 보여줌(모달사이드바에 있는 메뉴타이틀) */}
      {data
        // 필터로 출력할 부분을 구분한후 맵함수
        .filter((e, index) => defaultCount > index)
        .map(({ image, name }) => (
          <Item key={name}>
            <ImgItem src={image} />
            <ItemName>{name}</ItemName>
          </Item>
        ))}
      {showMore &&
        data
          .filter((e, index) => defaultCount <= index)
          .map(({ image, name }) => (
            <Item key={name}>
              <ImgItem src={image} />
              <ItemName>{name}</ItemName>
            </Item>
          ))}
      {defaultCount < data.length && (
        <Item onClick={() => setShowMore(!showMore)}>
          {showMore ? <ImgUp src={imgUp} /> : <ImgDown src={imgDown} />}
          <ItemName>{showMore ? "간략하게 보기" : "더보기"}</ItemName>
        </Item>
      )}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 8px;
  border-top: 1px solid #ddd;
`;

const Title = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: #606060;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 36px 0 16px;
  height: 40px;
  cursor: pointer;
  :hover {
    background: #eee;
  }
`;
const ImgItem = styled.img`
  width: 42px;
  height: 32px;
  margin-right: 16px;
`;
const ItemName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* 글씨가 화면을 넘어가면 ... 으로 표기 */
`;

const ImgDown = styled.img`
  width: 15px;
  height: 15px;
`;
const ImgUp = styled.img`
  width: 15px;
  height: 15px;
`;

export default Menu;
