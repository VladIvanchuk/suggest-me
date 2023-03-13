import { Routes, Route } from "react-router-dom";
import { Home, Details, NotFound } from "../";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound replace />} />
    </Routes>
  );
};
