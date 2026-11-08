import { useState } from "react";

import { APPS, CATS, CATNAME, LESSONS } from "../data/portfolioData";

import Preview from "../components/Preview";
import Icon from "../components/Icon";
import Modal from "../components/Modal";

function Works({ initial = "all" }) {
  const [cat, setCat] = useState(initial);
  const [open, setOpen] = useState(null);

  const allItems = [
    ...LESSONS.map((item) => ({
      ...item,
      cat: "lesson",
    })),

    ...APPS.map((item) => ({
      ...item,
      cat: "app",
    })),
  ];
  const list = allItems.filter((item) => cat === "all" || item.cat === cat);

  return (
    <div>
      <section className="hero">
        <h1>
          직접 <b>만든 것들</b>
        </h1>

        <p>배우고 직접 만들어 본 교육자료와 웹·앱을 한곳에 모았습니다.</p>
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

              {work.image ? (
                <img src={work.image} alt={work.title} className="work-image" />
              ) : (
                <Preview kind="dots" />
              )}
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
