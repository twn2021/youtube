import React, { useState } from "react";
import ModalSidebar from "./ModalSidebar";
import Topbar from "./Topbar";

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
    </div>
  );
};

export default Youtube;
