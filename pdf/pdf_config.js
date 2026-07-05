// pdf_config.js · 텐아르 PDF CENTER 설정 v4 (Cloudflare R2 Worker 연동) · 저장: 2026-07-06 03:35 KST
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
    file: TENAR_PDF_WORKER_URL + "/guide_2025",
    tags: ["농작물생산조사", "지침서", "실측조사", "청취조사", "표본", "피해부호", "생산량", "2025"],
    note: "R2 별칭: guide_2025 → 2025_crop_survey_guide.pdf"
  },
  {
    id: "form_2025_crop_survey",
    title: "2025년 농작물생산조사 조사표",
    subtitle: "조사표",
    category: "농작물생산조사",
    year: "2025",
    file: TENAR_PDF_WORKER_URL + "/form_2025",
    tags: ["농작물생산조사", "조사표", "서식", "현장조사", "실측", "청취", "2025"],
    note: "R2 별칭: form_2025 → 2025_crop_survey_form.pdf"
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
  }
];
