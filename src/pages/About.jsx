import { useEffect, useState } from "react";

import { PROFILE, EDU } from "../data/portfolioData";
import Modal from "../components/Modal";
import Icon from "../components/Icon";
import Preview from "../components/Preview";

import profileCharacterImg from "../assets/profile/character.jpeg";

function About() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (location.hash.includes("edu")) {
      document.getElementById("edu")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div>
      <section className="hero">
        <h1>
          저를 <b>소개</b>할게요
        </h1>
      </section>

      {/* 프로필 */}
      <div className="profile">
        <div className="photo">
          <img src={profileCharacterImg} alt={`${PROFILE.name} 프로필`} />
        </div>

        <div>
          <h2>{PROFILE.name}</h2>

          <p>{PROFILE.bio}</p>

          <div className="chips">
            {PROFILE.chips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 교육안 */}
      <h2 className="sec" id="edu">
        교육안
        <span
          className="en"
          style={{
            margin: 0,
            fontWeight: 400,
            fontSize: "14px",
          }}
        >
          Lesson plans
        </span>
      </h2>

      <div className="grid">
        {EDU.map((item, i) => (
          <button
            key={item.title}
            className="card"
            onClick={() => setOpen(item)}
          >
            <div className="prev">
              <Preview kind="mini" />
            </div>

            <div className="meta">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>

              <h3>{item.title}</h3>
              <p className="en">{item.sub}</p>
            </div>

            <span className="go">
              미리보기
              <Icon n="ext" s={15} />
            </span>
          </button>
        ))}
      </div>

      {open && <Modal item={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

export default About;
