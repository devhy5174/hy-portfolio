export const PROFILE = {
  name: "이희연",
  bio: "배우고, 만들고, 나누는 디지털 경험을 기록합니다.",
  chips: ["교육 설계", "바이브코딩", "React", "CRUD 앱"],
};

export const EDU = [
  {
    title: "AI 활용 기초 교육안",
    sub: "AI basics",
    desc: "처음 시작하는 분들을 위한 AI 도구 사용법 교육안입니다.",
    url: "#",
  },
  {
    title: "바이브코딩 입문",
    sub: "Vibe coding 101",
    desc: "말로 설명해서 앱을 만드는 과정을 단계별로 정리했습니다.",
    url: "#",
  },
  {
    title: "엑셀 업무 자동화",
    sub: "Excel automation",
    desc: "반복 업무를 줄이는 함수와 자동화 실습 자료입니다.",
    url: "#",
  },
  {
    title: "디지털 문해력 수업",
    sub: "Digital literacy",
    desc: "일상에서 바로 쓰는 디지털 활용 교육안입니다.",
    url: "#",
  },
];

export const WORKS = [
  {
    cat: "mini",
    title: "할 일 관리 앱",
    sub: "Todo CRUD",
    desc: "추가 · 수정 · 삭제까지 되는 기본 CRUD 미니앱",
    url: "#",
  },
  {
    cat: "mini",
    title: "독서 기록장",
    sub: "Book log",
    desc: "읽은 책을 기록하고 별점을 남기는 앱",
    url: "#",
  },
  {
    cat: "vibe",
    title: "나의 하루",
    sub: "My day",
    desc: "바이브코딩으로 만든 하루 기록 앱",
    url: "#",
  },
  {
    cat: "vibe",
    title: "퀴즈 메이커",
    sub: "Quiz maker",
    desc: "수업용 퀴즈를 빠르게 만드는 도구",
    url: "#",
  },
  {
    cat: "live",
    title: "출석 체크",
    sub: "Attendance",
    desc: "실제 배포해서 쓰고 있는 출석 앱",
    url: "#",
  },
  {
    cat: "live",
    title: "교육안 모음 사이트",
    sub: "Lesson hub",
    desc: "배포 완료한 교육 자료 허브",
    url: "#",
  },
];

export const CATS = {
  all: "전체",
  mini: "미니앱 (CRUD)",
  vibe: "바이브코딩",
  live: "배포한 앱",
};

export const CATNAME = {
  mini: "미니앱",
  vibe: "바이브코딩",
  live: "배포",
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
    d: "프로필과 걸어온 길",
    k: "profile",
    b: "소개 보기",
  },
  {
    to: "about#edu",
    t: "교육안",
    en: "Lesson plans",
    d: "직접 만든 교육 자료 모음",
    k: "mini",
    b: "교육안 보기",
  },
  {
    to: "works?vibe",
    t: "앱 전시관",
    en: "Vibe coding gallery",
    d: "만들고 배포한 앱 전시",
    k: "dots",
    b: "전시관 가기",
  },
  {
    to: "history",
    t: "활동이력",
    en: "Activity history",
    d: "시간순으로 보는 기록",
    k: "tl",
    b: "이력 보기",
  },
];
