/* pages/invited-talks.js : 이 페이지의 내용. 백틱(`) 안의 HTML 만 수정하세요. */
(window.PAGE_HTML = window.PAGE_HTML || {})['invited-talks'] = `
<!-- pages/invited-talks.html -->
<h2 class="view-title">Invited Talks and Seminar</h2>
<div class="card project-theme">
<div class="sec-head">2026</div>

<!-- [7] LIG D&A 세미나 (사진 2장 앨범) -->
<div class="pub-item">
<p class="justify"><span class="pub-num">[7]</span> <span class="pub-title">LIG D&amp;A 현직자의 세미나- Principal Engineer Hyungjin Jung from LIG D&amp;A</span></p>
<p class="pub-venue">2026 dept. of ITE, INU ARCS Lab. Open Lab Seminar</p>
<p class="pub-date">26.10.01</p>
<div class="talk-photo-box">
<div class="talk-photo-grid">
<div class="news-card-img-wrap" onclick="openAlbum(['images/invited-talks_20261001_lig-da-seminar_1.jpg', 'images/invited-talks_20261001_lig-da-seminar_2.jpg'], 0, 'LIG D&amp;A 세미나')">
<img src="images/invited-talks_20261001_lig-da-seminar_1.jpg" alt="LIG D&amp;A 세미나 1">
<span class="zoom-badge">🔍 1/2</span>
</div>
<div class="news-card-img-wrap" onclick="openAlbum(['images/invited-talks_20261001_lig-da-seminar_1.jpg', 'images/invited-talks_20261001_lig-da-seminar_2.jpg'], 1, 'LIG D&amp;A 세미나')">
<img src="images/invited-talks_20261001_lig-da-seminar_2.jpg" alt="LIG D&amp;A 세미나 2">
<span class="zoom-badge">🔍 2/2</span>
</div>
</div>
<div class="talk-photo-text">
<p>
LIG Defence &amp; Aerospace (LIG D&amp;A, 구 LIG 넥스원) 정형진 수석님께서 본교 ARCS Lab. 오픈랩 행사에 참석하셔서 학생들에게 회사 소개 및 방산 산업에 대한 전반적인 발전 방향과 실무에서 필요한 역량 등에 대해 상세히 소개해주시는 시간을 가졌습니다. 정형진 수석님께서 귀한 시간 내주셔서 올해도 좋은 Open Lab. 행사가 되었던 것 같습니다.
</p>
</div>
</div>
</div>

<div class="pub-item">
<p class="justify"><span class="pub-num">[6]</span> <span class="pub-title">New connectivity solution – Ultra wideband System Design (Communication to geometrical Sensing in RFIC) - Prof. Geunhaeng Lee</span></p>
<p class="pub-venue">LIG Nex1</p>
<p class="pub-date">26.05.14</p>
</div>

<div class="sec-head spaced">2025</div>
<div class="pub-item">
<p class="justify"><span class="pub-num">[5]</span> <span class="pub-title">Basic Electronic Theory Seminar for Junior Freshman Engineer - Prof. Geunhaeng Lee</span></p>
<p class="pub-venue">STATS ChipPAC Korea</p>
<p class="pub-date">25.11.26</p>
</div>

<!-- [4] 삼성전자 세미나 (사진 1장 클릭 확대) -->
<div class="pub-item">
<p class="justify"><span class="pub-num">[4]</span> <span class="pub-title">삼성전자 현직자의 세미나 및 질의응답 시간 - Dr. Hyun-Gi Seok from Samsung Electronics S.LSI</span></p>
<p class="pub-venue">2025 dept. of ITE, INU Open Lab Seminar</p>
<p class="pub-date">25.09.30</p>
<div class="talk-photo-box">
<div class="news-card-img-wrap talk-photo-single" onclick="openImageModal(this.querySelector('img').src, '삼성전자 세미나')">
<img src="images/invited-talks_20250930_samsung-seminar.jpg" alt="Open Lab Seminar" referrerpolicy="no-referrer">
<span class="zoom-badge">🔍 클릭 확대</span>
</div>
<div class="talk-photo-text">
<p>
삼성전자 석현기 박사님께서 인천대학교 정보통신공학과 OPEN Lab. 행사에 참석해주셔서 학생들에게 귀감이 되는 얘기와 많은 조언들을 해주셨습니다.<br>
석현기 박사님께서 참석해주신 덕분에 더욱 더 뜻깊은 OPEN Lab. 행사가 될 수 있었던 것 같습니다.
</p>
</div>
</div>
</div>

<div class="sec-head spaced">2024</div>
<div class="pub-item">
<p class="justify"><span class="pub-num">[3]</span> <span class="pub-title">UWB 송수신기 개발 동향</span> <a href="https://www.theieie.org/events/?part=03&amp;c_id=869" target="_blank" class="pub-link">[Link]</a> - Prof. Geunhaeng Lee</p>
<p class="pub-venue">24th RF/Analog IC Workshop (제 24회 RF/아날로그 회로 워크샵)</p>
<p class="pub-date">24.09.27</p>
</div>
<div class="pub-item">
<p class="justify"><span class="pub-num">[2]</span> <span class="pub-title">Next Connectivity Solution: UWB 기술 소개 및 송수신기 연구 개발 동향</span> <a href="https://2024summer.kiees.or.kr/html/user/core/view/subpage/190/workshop/inc/data/workshop_2024_summer/2024_summer_workshop_06_240717.pdf" target="_blank" class="pub-link">[Link]</a> - Prof. Geunhaeng Lee</p>
<p class="pub-venue">2024 KIEES Summer Conference (2024 전자파학회 하계종합학술대회)</p>
<p class="pub-date">24.08.21</p>
</div>

<div class="sec-head spaced">2023</div>
<div class="pub-item">
<p class="justify"><span class="pub-num">[1]</span> <span class="pub-title">최신 반도체 산업 동향-삼성전자 전현직자가 들려주는 이야기</span> <a href="https://sct.pusan.ac.kr/sct/69192/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2N0JTJGMTc0MDQlMkYxMjEzOTE1JTJGY产tceWaWV3LmRvJTNG" target="_blank" class="pub-link">[Link]</a> - Prof. Geunhaeng Lee</p>
<p class="pub-venue">Pusan National University, Semiconductor Engineering Track</p>
<p class="pub-date">23.08.28</p>
</div>
</div>
`;
