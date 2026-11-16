import aboutImg from "../assets/home/aboutIllustration.png";
import lessonImg from "../assets/home/lessonIllustration.png";
import appImg from "../assets/home/appsIllustration.png";
import historyImg from "../assets/home/historyIllustration.png";

const Preview = ({ kind }) => {
  const homeImages = {
    profile: aboutImg,
    lesson: lessonImg,
    app: appImg,
    history: historyImg,
  };
  if (homeImages[kind]) {
    return <img src={homeImages[kind]} alt={kind} className="work-image" />;
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
