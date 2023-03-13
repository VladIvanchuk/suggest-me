import { Routes, Route } from "react-router-dom";

import {Home,Details} from '../../Components/Pages'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Router;
