import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Works from "./pages/Works";
import History from "./pages/History";

function App() {
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState("home");
  // 페이지 이동 함수
  const go = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header currentPage={currentPage} go={go} />
      <main className="wrap">
        {currentPage === "home" && <Home go={go} />}
        {currentPage === "about" && <About />}
        {currentPage === "works" && <Works />}
        {currentPage === "history" && <History />}
      </main>
    </>
  );
}

export default App;
