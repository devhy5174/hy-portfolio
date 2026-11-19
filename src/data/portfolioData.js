import aiEthicsImg from "../assets/lessons/aiEthicsImg.png";
import aiDeepfakeImg from "../assets/lessons/aiDeepfakeImg.png";
import metaverseImg from "../assets/works/metaverseImg.jpeg";
import spreadsheetAutomationImg from "../assets/lessons/spreadsheetAutomationImg.png";
import aiPictureBookImg from "../assets/creation/aiPictureBookImg.png";
import slow_trainImg from "../assets/works/slow_trainImg.png";

import aiDailyRoutineVideo from "../assets/creation/aiDailyRoutine.mp4";
import aiPictureBookVideo from "../assets/creation/aiPictureBookVideo.mp4";

export const PROFILE = {
  name: "이희연",
  bio: "배우고, 만들고, 나누는 디지털 경험을 기록합니다.",
  chips: ["교육 설계", "바이브코딩", "React", "CRUD 앱"],
};

export const LESSONS = [
  {
    cat: "lesson",
    title: "AI의 판단, 믿어도 될까요?",
    sub: "AI 윤리 · 이미지 학습 실습",
    desc: "식용버섯과 독버섯 이미지 학습 실습을 통해 데이터에 따라 AI의 판단이 달라질 수 있음을 체험하고, AI의 결과를 검증하고 다시 확인하는 태도를 배우는 교육안입니다.",
    source: "디지털윤리 초등 실습자료 참고 및 제공 데이터 활용",
    image: aiEthicsImg,
    url: "https://canva.link/r7710ynmnof4ur5",
  },
  {
    cat: "lesson",
    title: "AI로 만든 모습, 어디까지 괜찮을까?",
    sub: "AI 윤리 · 딥페이크 · 초상권",
    desc: "AI로 만든 유명인 합성 사례를 통해 딥페이크의 개념을 이해하고, 다른 사람의 사진과 얼굴을 활용할 때 지켜야 할 동의와 권리, 올바른 AI 활용 태도를 배우는 교육안입니다.",
    source: "국가법령정보센터 관련 법령 및 AI 윤리 사례 참고",
    image: aiDeepfakeImg,
    url: "https://canva.link/1f3asu385kpm5b9",
  },
  {
    cat: "lesson",
    title: "AI로 더 쉽게, 엑셀 업무 자동화",
    sub: "AI 활용 · 구글시트 · 업무 자동화",
    desc: "스프레드시트 데이터를 활용해 반복 업무를 효율적으로 처리하고, Gemini와 연계하여 데이터 입력·정리·분석 등 실무에 활용할 수 있는 AI 업무 자동화 방법을 익히는 교육안입니다.",
    source: "Google Sheets 및 Gemini 활용 실습",
    image: spreadsheetAutomationImg,
    url: "https://canva.link/3ltu8qqd9o58d0g",
  },
  {
    cat: "lesson",
    title: "준비중",
    sub: "준비중",
    desc: "준비중.",
    url: "#",
  },
];

export const APPS = [
  {
    title: "3D 메타버스 미니게임",
    sub: "3D Web Game · AI-assisted",
    desc: "AI 코딩 도구를 활용해 제작한 간단한 3D 공간형 웹 게임입니다. 캐릭터를 조작하며 가상 공간을 탐색할 수 있도록 구현했습니다.",
    image: metaverseImg,
    url: "https://sage-pavlova-e77656.netlify.app/",
  },
  {
    cat: "app",
    title: "slow_train | 느린 기차",
    sub: "3D Web Game · Multiplayer · AI-assisted",
    desc: "Three.js와 Supabase를 활용해 제작한 실시간 멀티플레이 3D 웹 게임입니다. 레트로 기차를 배경으로 캐릭터 이동, 좌석 착석, 말풍선 대화, NPC 활동 및 승차권 검표 시스템을 구현했습니다.",
    image: slow_trainImg,
    url: "https://devhy5174.github.io/slow_train/",
  },

  {
    cat: "lesson",
    title: "퀴즈 메이커",
    sub: "Quiz maker",
    desc: "수업용 퀴즈를 빠르게 만드는 도구",
    url: "#",
  },
  {
    cat: "app",
    title: "출석 체크",
    sub: "Attendance",
    desc: "실제 배포해서 쓰고 있는 출석 앱",
    url: "#",
  },
  {
    cat: "lesson",
    title: "교육안 모음 사이트",
    sub: "Lesson hub",
    desc: "배포 완료한 교육 자료 허브",
    url: "#",
  },
];
export const CREATION = [
  {
    cat: "creation",
    title: "AI로 만든 나의 하루일과",
    sub: "AI 영상 · 픽셀아트 · 디지털 창작",
    desc: "일상의 장면을 픽셀 게임 콘셉트로 구성하고, Google Flow로 영상을 제작한 뒤 AI 생성 음악과 Canva 편집·자막을 더해 완성한 디지털 창작 프로젝트입니다.",
    source: "Google Flow · Google Music AI · Canva 활용",
    video: aiDailyRoutineVideo,
    url: "https://canva.link/p5y40vpoelgs1rs",
  },
  {
    cat: "creation",
    title: "아직 지도가 완성되지 않았어",
    sub: "AI 그림책 · 스토리텔링 · 디지털 창작",
    desc: "생성형 AI를 활용해 스토리를 기획하고 Google Flow의 장면 만들기를 활용해 캐릭터와 그림 스타일의 일관성을 유지하며 여러 장면을 제작한 AI 그림책 프로젝트입니다. Canva에서 편집해 그림책으로 완성하고, 작품 소개 영상까지 제작했습니다.",
    source: "ChatGPT· · Google Flow · Canva · Heyzine Flipbook 활용",
    image: aiPictureBookImg,
    url: "https://heyzine.com/admin/view?n=f8fc7246be03cb283c38a30492ac71a8d80015e5.pdf&adminKey=0c62cd1865a36b878565d60abe9d9fd6#page/1",
  },
  {
    cat: "creation",
    title: "「아직 지도가 완성되지 않았어」 북트레일러",
    sub: "AI 영상 · 북트레일러 · 디지털 창작",
    desc: "AI 그림책 「아직 지도가 완성되지 않았어」의 주요 장면과 세계관을 영상으로 재구성한 북트레일러입니다. AI 영상과 음악을 활용하고 Canva에서 편집해 완성했습니다.",
    source: "ChatGPT · Google Flow · Google Flow Music · Canva 활용",
    video: aiPictureBookVideo,
    url: "https://canva.link/fxp1u73xt1bd1nx",
  },
];

export const CATS = {
  all: "전체",
  lesson: "교육자료",
  app: "앱 · 웹",
  creation: "디지털 창작",
};

export const CATNAME = {
  lesson: "교육자료",
  app: "앱 · 웹",
  creation: "디지털 창작",
};

export const HISTORY = [
  {
    date: "2026.10 - 11",
    title: "한국과학창의재단 디지털튜터 양성과정",
    desc: "디지털 기반 교육 지원을 위한 디지털튜터 전문 양성과정 수료 예정",
  },
  {
    date: "2026.11",
    title: "AI디지털튜터 1급 자격 취득",
    desc: "(주)한국강사교육진흥원",
  },
  {
    date: "2026.09 - 11",
    title: "AI·디지털 교육 전문가 양성과정 수료",
    desc: "부평여성새로일하기센터 · AI·디지털 교육 및 에듀테크 실습",
  },

  {
    date: "2026.07",
    title: "AI·파이썬 실무 과정 수료",
    desc: "미래디지털교육 · AI 모델링 · 데이터 활용 · 웹크롤링 · ChatGPT API 활용 실습",
  },
  ,
  {
    date: "2026",
    title: "바이브코딩을 활용한 웹·앱 제작",
    desc: "AI 코딩 도구를 활용한 웹·앱 기획, 제작 및 실제 배포 경험",
  },
  {
    date: "2025.9 - 2026.1",
    title: "프론트엔드 개발 과정 수강",
    desc: "React·TypeScript 기반 웹 개발 학습 및 프로젝트 제작",
  },
  {
    date: "24.04",
    title: "웹디자인 과정 수료 및 자격 취득",
    desc: "인천여성의광장 웹디자인 과정 수료 · 웹디자인기능사 취득",
  },
  {
    date: "연도 확인",
    title: "공인중개사 자격 취득",
    desc: "공인중개사 자격시험 합격 및 자격 취득",
  },
  {
    date: "2010 - 2015",
    title: "한화손해보험 지점 총무",
    desc: "실적 보고, 고객 응대, 운영비 관리 및 지점 행정 업무 담당",
  },
];

export const ROUTES = [
  { id: "home", label: "홈", icon: "home" },
  { id: "about", label: "소개", icon: "user" },
  { id: "works", label: "만든 것들", icon: "grid" },
  { id: "history", label: "활동이력", icon: "clock" },
];

export const SECTIONS = [
  {
    to: "about",
    t: "나에 대한 소개",
    en: "About me",
    d: "배우고, 만들고, 나누는 이야기",
    k: "profile",
    b: "소개 보기",
  },

  {
    to: "works",
    t: "교육자료",
    en: "Lesson plans",
    d: "직접 구성하고 만든 수업 자료",
    k: "lesson",
    b: "교육자료 보기",
  },

  {
    to: "works",
    t: "앱 · 웹",
    en: "Apps & Web",
    d: "아이디어를 직접 구현한 웹과 앱",
    k: "app",
    b: "작품 보기",
  },

  {
    to: "history",
    t: "활동이력",
    en: "Activity history",
    d: "배우고 경험해 온 과정",
    k: "history",
    b: "이력 보기",
  },
];
