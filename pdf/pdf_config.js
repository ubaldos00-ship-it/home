// pdf_config.js · 텐아르 PDF CENTER 설정 v9 (Cloudflare R2 Worker 연동) · 저장: 2026-10-23 03:28 KST · (v7)「농업용 기계·기구 사진」 3종(2026, chukbi/nongga/nongbi) + 2024년 농산물·축산물생산비 자료 4종 추가 + 조사분류 2종 신규(농가경제조사=nongga·농산물생산비조사=nongbi). (v8)2025 농작물생산조사 지침서·조사표를 별칭 → saengsan/2025/ 실제경로로 변경. (v9)농축산물생산비조사 통계정보보고서를 축산물생산비조사에도 노출(동일 파일 공유 nongbi/2024/)
//   prefix: chukbi=축산물생산비조사 · nongga=농가경제조사 · nongbi=농산물생산비조사 (saengsan=농작물생산조사 · jakmul=농업면적 · nongpan=농가판매 · ssalgab=산지쌀값 · gachuk=가축동향)
// ─────────────────────────────────────────────────────────────
// 구조: 조사별(category) + 연도별(year/tags). 검색은 title·subtitle·category·year·tags 대상.
// 새 PDF 추가 방법
//   1) R2_업로드 폴더 규칙에 맞춰 PDF를 이름 변경 후 R2에 업로드
//        chukbi  = 축산물생산비조사
//        jakmul  = 농업면적조사
//        nongpan = 농가판매및구입가격조사
//        saengsan= 농작물생산조사
//        ssalgab = 산지쌀값조사
//      예) chukbi/2021/2021_livestock_cost_guide.pdf
//   2) 아래 목록에 항목 추가 (file = WORKER + "/" + R2경로)
//   ※ Worker는 R2 경로를 그대로 서빙해야 함(worker_passthrough.js 참고). 기존 별칭(guide_2025 등)도 유지됨.
// ─────────────────────────────────────────────────────────────

const TENAR_PDF_WORKER_URL = "https://tenar-r2-pdf.ubaldos.workers.dev";

window.TENAR_PDF_LIBRARY = [
  // ── 농작물생산조사 ─────────────────────────────
  {
    id: "guide_2025_crop_survey",
    title: "2025년 농작물생산조사 지침서",
    subtitle: "지침서",
    category: "농작물생산조사",
    year: "2025",
    file: TENAR_PDF_WORKER_URL + "/saengsan/2025/2025_crop_survey_guide.pdf",
    tags: ["농작물생산조사", "지침서", "실측조사", "청취조사", "표본", "피해부호", "생산량", "2025"],
    note: "R2: saengsan/2025/2025_crop_survey_guide.pdf (구 별칭 guide_2025)"
  },
  {
    id: "form_2025_crop_survey",
    title: "2025년 농작물생산조사 조사표",
    subtitle: "조사표",
    category: "농작물생산조사",
    year: "2025",
    file: TENAR_PDF_WORKER_URL + "/saengsan/2025/2025_crop_survey_form.pdf",
    tags: ["농작물생산조사", "조사표", "서식", "현장조사", "실측", "청취", "2025"],
    note: "R2: saengsan/2025/2025_crop_survey_form.pdf (구 별칭 form_2025)"
  },

  // ── 농업면적조사 ───────────────────────────────
  {
    id: "jakmul_2026_guide",
    title: "2026년 농업면적조사 지침서",
    subtitle: "지침서",
    category: "농업면적조사",
    year: "2026",
    file: TENAR_PDF_WORKER_URL + "/jakmul/2026/2026_farm_area_guide.pdf",
    tags: ["농업면적조사", "면적조사", "지침서", "경지면적", "재배면적", "표본", "2026"],
    note: "R2: jakmul/2026/2026_farm_area_guide.pdf"
  },
  {
    id: "jakmul_2026_cropclass",
    title: "2026년 농업면적조사 작물분류표",
    subtitle: "작물분류표",
    category: "농업면적조사",
    year: "2026",
    file: TENAR_PDF_WORKER_URL + "/jakmul/2026/2026_farm_area_crop_classification.pdf",
    tags: ["농업면적조사", "면적조사", "작물분류표", "작물분류", "품목", "분류", "2026"],
    note: "R2: jakmul/2026/2026_farm_area_crop_classification.pdf"
  },
  {
    id: "jakmul_2023_guide",
    title: "2023년 농업면적조사 지침서",
    subtitle: "지침서",
    category: "농업면적조사",
    year: "2023",
    file: TENAR_PDF_WORKER_URL + "/jakmul/2023/2023_farm_area_guide.pdf",
    tags: ["농업면적조사", "면적조사", "지침서", "경지면적", "재배면적", "표본", "2023"],
    note: "R2: jakmul/2023/2023_farm_area_guide.pdf"
  },

  // ── 축산물생산비조사 ───────────────────────────
  {
    id: "chukbi_2021_guide",
    title: "2021년 농축산물생산비(축산) 조사지침서",
    subtitle: "지침서",
    category: "축산물생산비조사",
    year: "2021",
    file: TENAR_PDF_WORKER_URL + "/chukbi/2021/2021_livestock_cost_guide.pdf",
    tags: ["축산물생산비조사", "축산", "생산비", "지침서", "농축산물생산비", "2021"],
    note: "R2: chukbi/2021/2021_livestock_cost_guide.pdf"
  },
  {
    id: "chukbi_2024_form_wonbu",
    title: "2024년 축산물생산비 조사표 (원부)",
    subtitle: "조사표",
    category: "축산물생산비조사",
    year: "2024",
    file: TENAR_PDF_WORKER_URL + "/chukbi/2024/2024_livestock_cost_form_wonbu.pdf",
    tags: ["축산물생산비조사", "축산물생산비", "조사표", "원부", "축산", "생산비", "2024"],
    note: "R2: chukbi/2024/2024_livestock_cost_form_wonbu.pdf"
  },
  {
    id: "chukbi_2024_form_ilgye",
    title: "2024년 축산물생산비 조사표 (일계부)",
    subtitle: "조사표",
    category: "축산물생산비조사",
    year: "2024",
    file: TENAR_PDF_WORKER_URL + "/chukbi/2024/2024_livestock_cost_form_ilgye.pdf",
    tags: ["축산물생산비조사", "축산물생산비", "조사표", "일계부", "축산", "생산비", "2024"],
    note: "R2: chukbi/2024/2024_livestock_cost_form_ilgye.pdf"
  },
  {
    id: "chukbi_2026_machinery",
    title: "2026년 농업용 기계·기구 사진 (축산물생산비조사)",
    subtitle: "기계·기구 사진",
    category: "축산물생산비조사",
    year: "2026",
    file: TENAR_PDF_WORKER_URL + "/chukbi/2026/2026_livestock_cost_machinery.pdf",
    tags: ["축산물생산비조사", "농업용 기계", "기계기구", "기계", "기구", "농기계", "사진", "2026"],
    note: "R2: chukbi/2026/2026_livestock_cost_machinery.pdf"
  },
  {
    id: "chukbi_2024_stats_report",
    title: "2024년 농축산물생산비조사 이용자용 통계정보보고서",
    subtitle: "통계정보보고서",
    category: "축산물생산비조사",
    year: "2024",
    file: TENAR_PDF_WORKER_URL + "/nongbi/2024/2024_cost_survey_stats_report.pdf",
    tags: ["축산물생산비조사", "농축산물생산비조사", "통계정보보고서", "이용자용", "통계", "보고서", "2024"],
    note: "R2: nongbi/2024/2024_cost_survey_stats_report.pdf (농산물생산비조사와 동일 파일 공유 — 추가 업로드 불필요)"
  },

  // ── 산지쌀값조사 ───────────────────────────────
  {
    id: "ssalgab_2019_guide",
    title: "2019년 산지쌀값조사 지침서",
    subtitle: "지침서",
    category: "산지쌀값조사",
    year: "2019",
    file: TENAR_PDF_WORKER_URL + "/ssalgab/2019/2019_rice_price_guide.pdf",
    tags: ["산지쌀값조사", "쌀값", "산지", "가격", "지침서", "2019"],
    note: "R2: ssalgab/2019/2019_rice_price_guide.pdf"
  },

  // ── 농가판매및구입가격조사 ─────────────────────
  {
    id: "nongpan_2020_guide",
    title: "2020년 농가판매 및 구입가격조사 조사지침서",
    subtitle: "지침서",
    category: "농가판매및구입가격조사",
    year: "2020",
    file: TENAR_PDF_WORKER_URL + "/nongpan/2020/2020_farm_price_guide.pdf",
    tags: ["농가판매및구입가격조사", "농가판매", "구입가격", "판매가격", "농가", "가격", "지침서", "2020"],
    note: "R2: nongpan/2020/2020_farm_price_guide.pdf"
  },

  // ── 가축동향조사 ───────────────────────────────
  {
    id: "gachuk_2026_form",
    title: "2026년 가축동향조사표 (3종)",
    subtitle: "조사표",
    category: "가축동향조사",
    year: "2026",
    file: TENAR_PDF_WORKER_URL + "/gachuk/2026/2026_livestock_trend_form.pdf",
    tags: ["가축동향조사", "가축동향", "가축", "조사표", "3종", "축산", "2026"],
    note: "R2: gachuk/2026/2026_livestock_trend_form.pdf"
  },
  {
    id: "gachuk_2026_guide",
    title: "2026년 가축동향조사 지침서",
    subtitle: "지침서",
    category: "가축동향조사",
    year: "2026",
    file: TENAR_PDF_WORKER_URL + "/gachuk/2026/2026_livestock_trend_guide.pdf",
    tags: ["가축동향조사", "가축동향", "가축", "지침서", "축산", "사육", "2026"],
    note: "R2: gachuk/2026/2026_livestock_trend_guide.pdf"
  },
  {
    id: "gachuk_2023_guide",
    title: "2023년 가축동향조사 지침서",
    subtitle: "지침서",
    category: "가축동향조사",
    year: "2023",
    file: TENAR_PDF_WORKER_URL + "/gachuk/2023/2023_livestock_trend_guide.pdf",
    tags: ["가축동향조사", "가축동향", "가축", "지침서", "축산", "사육", "2023"],
    note: "R2: gachuk/2023/2023_livestock_trend_guide.pdf"
  },

  // ── 농가경제조사 (신규 분류 · nongga) ──────────
  {
    id: "nongga_2026_machinery",
    title: "2026년 농업용 기계·기구 사진 (농가경제조사)",
    subtitle: "기계·기구 사진",
    category: "농가경제조사",
    year: "2026",
    file: TENAR_PDF_WORKER_URL + "/nongga/2026/2026_farm_economy_machinery.pdf",
    tags: ["농가경제조사", "농가경제", "농업용 기계", "기계기구", "기계", "기구", "농기계", "사진", "2026"],
    note: "R2: nongga/2026/2026_farm_economy_machinery.pdf"
  },

  // ── 농산물생산비조사 (신규 분류 · nongbi) ──────
  {
    id: "nongbi_2024_form",
    title: "2024년 농산물생산비 조사표",
    subtitle: "조사표",
    category: "농산물생산비조사",
    year: "2024",
    file: TENAR_PDF_WORKER_URL + "/nongbi/2024/2024_crop_cost_form.pdf",
    tags: ["농산물생산비조사", "농산물생산비", "조사표", "생산비", "2024"],
    note: "R2: nongbi/2024/2024_crop_cost_form.pdf"
  },
  {
    id: "nongbi_2024_stats_report",
    title: "2024년 농축산물생산비조사 이용자용 통계정보보고서",
    subtitle: "통계정보보고서",
    category: "농산물생산비조사",
    year: "2024",
    file: TENAR_PDF_WORKER_URL + "/nongbi/2024/2024_cost_survey_stats_report.pdf",
    tags: ["농산물생산비조사", "농축산물생산비조사", "통계정보보고서", "이용자용", "통계", "보고서", "2024"],
    note: "R2: nongbi/2024/2024_cost_survey_stats_report.pdf"
  },
  {
    id: "nongbi_2026_machinery",
    title: "2026년 농업용 기계·기구 사진 (농산물생산비조사)",
    subtitle: "기계·기구 사진",
    category: "농산물생산비조사",
    year: "2026",
    file: TENAR_PDF_WORKER_URL + "/nongbi/2026/2026_crop_cost_machinery.pdf",
    tags: ["농산물생산비조사", "농산물생산비", "농업용 기계", "기계기구", "기계", "기구", "농기계", "사진", "2026"],
    note: "R2: nongbi/2026/2026_crop_cost_machinery.pdf"
  }
];
