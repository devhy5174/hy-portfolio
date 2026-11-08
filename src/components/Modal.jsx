import { useEffect } from "react";
import Icon from "./Icon";
import Preview from "./Preview";

function Modal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="ov" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="닫기">
          <Icon n="x" />
        </button>

        <div className="prev">
          <Preview kind="mini" />
        </div>

        <div className="body">
          <h3>{item.title}</h3>

          <p className="en">{item.sub}</p>

          <p className="desc" style={{ fontSize: "15px" }}>
            {item.desc}
          </p>

          <a
            className="go"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            열어보기
            <Icon n="ext" s={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
