import { useEffect, useState } from "react";

import { PROFILE } from "../data/portfolioData";

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

      {/* 소개 */}
      <section className="about-box">
        <div className="about-head">
          <span className="about-num">ABOUT</span>

          <h2>
            배우는 것에서 끝내지 않고,
            <br />
            <b>직접 해보고 만들어봅니다.</b>
          </h2>

          <p>
            새로운 AI와 디지털 도구를 직접 사용해보고, 필요한 웹·앱과 교육자료를
            만들어보며 경험을 쌓고 있습니다. 배운 것을 누구나 쉽게 활용할 수
            있도록 전달하는 방법에도 관심이 많습니다.
          </p>
        </div>

        <div className="about-values">
          <div className="about-value">
            <span className="value-num">01</span>
            <div>
              <h3>쉽게 배우기</h3>
              <p>새로운 디지털 도구를 직접 사용하며 익힙니다.</p>
            </div>
          </div>

          <div className="about-value">
            <span className="value-num">02</span>
            <div>
              <h3>직접 만들기</h3>
              <p>아이디어를 웹·앱과 교육자료로 구현해봅니다.</p>
            </div>
          </div>

          <div className="about-value">
            <span className="value-num">03</span>
            <div>
              <h3>쉽게 나누기</h3>
              <p>배운 내용을 이해하기 쉽게 전달하는 방법을 고민합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
