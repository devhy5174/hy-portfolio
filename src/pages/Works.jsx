import { useState } from "react";

import { APPS, CATS, CATNAME, LESSONS, CREATION } from "../data/portfolioData";

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
    ...CREATION.map((item) => ({
      ...item,
      cat: "creation",
    })),
  ];
  const list = allItems.filter((item) => cat === "all" || item.cat === cat);

  const renderCard = (work, i) => (
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

        {work.video ? (
          <video
            src={work.video}
            className="work-image"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : work.image ? (
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
  );

  const sections = [
    {
      key: "lesson",
      title: "교육자료",
      desc: "직접 기획하고 제작한 AI·디지털 교육자료",
    },

    {
      key: "app",
      title: "앱 · 웹",
      desc: "직접 기획하고 구현한 웹·앱 프로젝트",
    },

    {
      key: "creation",
      title: "디지털 창작",
      desc: "AI 도구를 활용해 제작한 영상·그림책·콘텐츠",
    },
  ];

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
      {cat === "all" ? (
        <div className="work-sections">
          {sections.map((section) => {
            const sectionWorks = list.filter(
              (work) => work.cat === section.key,
            );

            if (sectionWorks.length === 0) return null;

            return (
              <section className="work-section" key={section.key}>
                <div className="section-title">
                  <h2>{section.title}</h2>

                  <p>{section.desc}</p>
                </div>

                <div className="grid">
                  {sectionWorks.map((work, i) => renderCard(work, i))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="grid" key={cat}>
          {list.map((work, i) => renderCard(work, i))}
        </div>
      )}

      {/* 상세 모달 */}
      {open && <Modal item={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

export default Works;
