import { SECTIONS } from "../data/portfolioData";
import Preview from "../components/Preview";
import Icon from "../components/Icon";
import profileImg from "../assets/profile/profileImg_3.png";
import { useState, useEffect } from "react";

function Home({ go }) {
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const text = "안녕하세요,\n이희연 입니다";
    let index = 0;
    const timer = setInterval(() => {
      index++;
      setTypedText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <section className="hero home-hero">
        <div className="hero-profile">
          <img src={profileImg} alt="이희연 프로필" />
        </div>
        <div className="hero-text">
          <h1 className="typing-title">
            <span className="typing-line">{typedText.split("\n")[0]}</span>

            <span className="typing-line">
              <b>{(typedText.split("\n")[1] || "").slice(0, 3)}</b>

              {(typedText.split("\n")[1] || "").slice(3)}

              {typedText.includes("\n") && (
                <span className="typing-cursor">|</span>
              )}
            </span>
          </h1>

          <p>카드를 눌러 원하는 곳으로 이동해 보세요.</p>
        </div>
      </section>

      <div className="grid home-grid">
        {SECTIONS.map((s, i) => (
          <button key={s.t} className="card" onClick={() => go(s.to)}>
            <div className="prev">
              <Preview kind={s.k} />
            </div>

            <div className="meta">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>

              <h3>{s.t}</h3>

              <p className="en">{s.en}</p>

              <p className="desc">{s.d}</p>
            </div>

            <span className="go">
              {s.b}

              <Icon n="arrow" s={15} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
