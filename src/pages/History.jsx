import { HISTORY } from "../data/portfolioData";
import { useEffect, useRef, useState } from "react";

function HistoryItem({ item }) {
  const ref = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },

      {
        threshold: 0.2,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`ti reveal ${show ? "show" : ""}`}>
      <small>{item.date}</small>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
  );
}
function History() {
  return (
    <div>
      <section className="hero">
        <h1>
          <b>활동이력</b>
        </h1>
        <p>걸어온 순서대로 정리했어요.</p>
      </section>

      <div className="time">
        {HISTORY.map((item, index) => (
          <HistoryItem key={`${item.title}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default History;
