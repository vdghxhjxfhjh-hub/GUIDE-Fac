// 외부 이미지 파일의 직접 HTTPS URL을 넣으세요. GIF / WebP / PNG / JPG 지원.
// 예: hero: 'https://your-domain.com/facility.webp'
// 빈 URL 또는 로딩 실패 시 기존 회색 배경을 유지합니다.
window.SEON_IMAGE_URLS = {
  hero:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/%EC%84%B8%EC%98%A8%20%EB%8C%80%ED%91%9C.jpg', // [대표 이미지]
  air:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/%EC%84%B8%EC%98%A8%20%EA%B3%B5%EC%A1%B0.jpg', // [공조 및 환기 설비]
  access:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/%EC%84%B8%EC%98%A8%20%EC%B6%9C%EC%9E%85.jpg', // [출입 제어 설비]
  control:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/%EC%84%B8%EC%98%A8%20%EC%A0%84%EB%A0%A5.jpg', // [전력 및 관제 설비]
  guide:'https://pub-9e3052bb899543deb1b36d8c93b55032.r2.dev/%EA%B0%80%EC%9D%B4%EB%93%9C%20%EA%B5%90%EC%9C%A1.jpg' // [GUIDE 교육시설]
};
Object.entries(window.SEON_IMAGES).forEach(([key,config])=>{
  config.src=window.SEON_IMAGE_URLS[key]?.trim() || '';
});
