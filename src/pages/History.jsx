import { HISTORY } from "../data/portfolioData";

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
        {HISTORY.map((item) => (
          <div key={item.title} className="ti">
            <small>{item.date}</small>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
