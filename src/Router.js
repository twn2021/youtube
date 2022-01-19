import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Youtube } from "./components/pages";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
