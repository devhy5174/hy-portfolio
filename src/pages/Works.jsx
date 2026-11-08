import { useState } from "react";

import { WORKS, CATS, CATNAME } from "../data/portfolioData";

import Preview from "../components/Preview";
import Icon from "../components/Icon";
import Modal from "../components/Modal";

function Works({ initial = "all" }) {
  const [cat, setCat] = useState(initial);
  const [open, setOpen] = useState(null);

  const list = WORKS.filter((work) => cat === "all" || work.cat === cat);

  return (
    <div>
      <section className="hero">
        <h1>
          직접 <b>만든 것들</b>
        </h1>

        <p>CRUD 미니앱부터 바이브코딩, 배포한 앱까지 전시해요.</p>
      </section>

      {/* 카테고리 필터 */}
      <div className="filters">
        {Object.entries(CATS).map(([key, value]) => (
          <button
            key={key}
            className={"f" + (cat === key ? " on" : "")}
            onClick={() => setCat(key)}
          >
            {value}
          </button>
        ))}
      </div>

      {/* 작품 목록 */}
      <div className="grid" key={cat}>
        {list.map((work, i) => (
          <button
            key={work.title}
            className="card page"
            style={{
              animationDelay: i * 40 + "ms",
            }}
            onClick={() => setOpen(work)}
          >
            <div className="prev">
              <span className="tag">{CATNAME[work.cat]}</span>

              <Preview kind="dots" />
            </div>

            <div className="meta">
              <h3>{work.title}</h3>

              <p className="en">{work.sub}</p>

              <p className="desc">{work.desc}</p>
            </div>

            <span className="go">
              자세히
              <Icon n="arrow" s={15} />
            </span>
          </button>
        ))}
      </div>

      {/* 상세 모달 */}
      {open && <Modal item={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

export default Works;
