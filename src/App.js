import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import data from "./data/data";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main data={data} />} />
        <Route path=":id" element={<ProductDetail data={data} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
