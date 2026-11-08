import { SECTIONS } from "../data/portfolioData";
import Preview from "../components/Preview";
import Icon from "../components/Icon";
import profileImg from "../assets/profile/profileImg_1.png";

function Home() {
  return (
    <div>
      <section className="hero home-hero">
        <div className="hero-profile">
          <img src={profileImg} alt="이희연 프로필" />
        </div>
        <div className="hero-text">
          <h1>
            안녕하세요,
            <br />
            <b>이희연</b> 입니다
          </h1>

          <p>카드를 눌러 원하는 곳으로 이동해 보세요.</p>
        </div>
      </section>

      <div className="grid">
        {SECTIONS.map((s, i) => (
          <button key={s.to} className="card" onClick={() => go(s.to)}>
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
