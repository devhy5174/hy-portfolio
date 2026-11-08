const Preview = ({ kind }) => {
  if (kind === "profile") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "70%",
        }}
      >
        <div className="av"></div>

        <div className="mini" style={{ width: "100%" }}>
          <s></s>
          <s></s>
          <s></s>
        </div>
      </div>
    );
  }

  if (kind === "dots") {
    return (
      <div className="dots">
        <s></s>
        <s></s>
        <s></s>
        <s></s>
        <s></s>
        <s></s>
      </div>
    );
  }

  if (kind === "tl") {
    return (
      <div className="tl">
        <s></s>
        <s></s>
        <s></s>
      </div>
    );
  }

  return (
    <div className="mini">
      <s></s>
      <s></s>
      <s></s>
      <s></s>
    </div>
  );
};

export default Preview;
