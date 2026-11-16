import Icon from "./Icon";
import { ROUTES } from "../data/portfolioData";

function Header({ currentPage, go }) {
  return (
    <header>
      <div className="nav">
        <div
          className="logo"
          onClick={() => go("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();

              go("home");
            }
          }}
        >
          <i></i>
          HY's Portfolio
        </div>

        <nav className="tabs">
          {ROUTES.map((item) => (
            <button
              key={item.id}
              className={"tab" + (currentPage === item.id ? " on" : "")}
              onClick={() => go(item.id)}
            >
              <Icon n={item.icon} s={16} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
