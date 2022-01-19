import React, { useState } from "react";
import ModalSidebar from "../youtube/ModalSidebar";
import Topbar from "../youtube/Topbar";
import videoList from "../../data/video";
import VideoList from "../youtube/VideoList";
import styled from "styled-components";

const Youtube = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = () => setShowSidebar(true);
  const hideSidebar = () => setShowSidebar(false);

  return (
    <div>
      <Topbar onOpenSidebar={openSidebar} />
      {/* <button onClick={() => setShowSidebar(true)}>sidebar</button> */}
      {showSidebar && <ModalSidebar onClose={hideSidebar} />}
      {/* 클릭시 생성 제거 */}

      <Wrapper>
        <VideoList data = {videoList} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

export default Youtube;
