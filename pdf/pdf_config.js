// pdf_config.js · 텐아르 PDF 자료실 설정 파일 v3 (Cloudflare R2 Worker 연동)
// 사용 방법
// 1) 큰 PDF 원본은 GitHub에 올리지 않고 Cloudflare R2 버킷에 업로드합니다.
// 2) R2 버킷은 Public Access Disabled 상태로 둡니다.
// 3) Cloudflare Worker가 R2 파일을 대신 읽어 텐아르 PDF.js 뷰어에 전달합니다.
// 4) 새 PDF 추가 시 R2에 파일 업로드 → Worker 코드 allowedFiles에 ID/파일명 추가 → 아래 목록에 항목 추가.

const TENAR_PDF_WORKER_URL = "https://tenar-r2-pdf.ubaldos.workers.dev";

window.TENAR_PDF_LIBRARY = [
  {
    id: "guide_2025_crop_survey",
    title: "2025년 농작물생산조사 지침서",
    subtitle: "배포용 · Cloudflare R2 열람",
    category: "지침서",
    year: "2025",
    file: TENAR_PDF_WORKER_URL + "/guide_2025",
    tags: ["농작물생산조사", "지침서", "실측조사", "청취조사", "표본", "피해부호", "생산량"],
    note: "Cloudflare R2 파일: 2025_crop_survey_guide.pdf"
  },
  {
    id: "form_2025_crop_survey",
    title: "2025년 농작물생산조사 조사표",
    subtitle: "조사표 서식 · Cloudflare R2 열람",
    category: "조사표",
    year: "2025",
    file: TENAR_PDF_WORKER_URL + "/form_2025",
    tags: ["조사표", "서식", "현장조사", "실측", "청취", "농작물생산조사"],
    note: "Cloudflare R2 파일: 2025_crop_survey_form.pdf"
  }
];
