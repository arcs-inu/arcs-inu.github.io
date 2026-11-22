/* pages/news.js : 이 페이지의 내용. 백틱(`) 안의 HTML 만 수정하세요. */
(window.PAGE_HTML = window.PAGE_HTML || {})['news'] = `
<h2 class="view-title">News</h2>
<div class="card project-theme">
<div class="sec-head">[2026]</div>

<div class="pub-item news-entry">
<p class="justify"><span class="pub-num">[2026.11]</span> Hansun Yu has newly joined our ARCS Lab as an intern. He plans to pursue his Master's degree with us after graduation. We warmly welcome him and wish him a meaningful and rewarding graduate journey.</p>
</div>

<div class="pub-item news-entry">
<div class="news-item-with-img">
<div class="news-text-wrap">
<p class="justify"><span class="pub-num">[2026.09]</span> Youngchan (undergraduate researcher) received the Outstanding Paper Award at the 26th RF/Analog Workshop for his paper titled “<strong>A 2-Gbps IR-UWB Transmitter Using Hybrid 4-PAM/4-PSK Modulation</strong>.” The paper presented high-order modulation techniques for high-speed, energy-efficient wireless transmission. Congrats to Youngchan on this well-deserved recognition!</p>
</div>
<div class="news-card-img-wrap" onclick="openImageModal(this.querySelector('img').src, 'RF/Analog 워크샵 우수논문상 수상')">
<img alt="RF/Analog Workshop Outstanding Paper Award" class="news-card-img" referrerpolicy="no-referrer" src="images/news_202609_youngchan-award.png"/>
<span class="zoom-badge">🔍 클릭 확대</span>
</div>
</div>
</div>

<div class="pub-item news-entry">
<div class="news-item-with-img">
<div class="news-text-wrap">
<p class="justify"><span class="pub-num">[2026.08]</span> Siwon has been selected for the 2026 Master's Student Research Grant Program (석사과정 연구장려금). The selected research project is titled “<strong>임펄스 기반 다중 배열 수신기를 이용한 고정밀 3차원 위치 추정 시스템 IC 설계</strong>”. Through this research grant, Siwon will receive a total of 12 million KRW from September 2026 to August 2027. Congrats!</p>
</div>
<div class="news-card-img-wrap" onclick="openImageModal(this.querySelector('img').src, '석사과정 연구장려금 지원 선정')">
<img alt="Master's Student Research Grant Program" class="news-card-img" referrerpolicy="no-referrer" src="images/news_202608_siwon-ms-grant.png"/>
<span class="zoom-badge">🔍 클릭 확대</span>
</div>
</div>
</div>

<div class="pub-item news-entry">
<div class="news-item-with-img">
<div class="news-text-wrap">
<p class="justify"><span class="pub-num">[2026.08]</span> Our research proposal, "<strong>차세대 통신-센싱 융합 환경을 위한 초저전력 3차원 각도·거리 통합추정 임펄스-라디오 UWB 하이브리드 빔포밍 레이다 SoC</strong>," has been selected for the Basic Research Program (기본연구) by the National Research Foundation of Korea (NRF, 한국연구재단). The project will run for 60 months, from September 2026 to August 2031. As our research group's first external project, we hope this will serve as a major stepping stone for our future researches.</p>
</div>
<div class="news-card-img-wrap" onclick="openImageModal(this.querySelector('img').src, '개인기초연구사업 기본연구 선정')">
<img alt="NRF Basic Research Program" class="news-card-img" referrerpolicy="no-referrer" src="images/news_202608_nrf-basic.png"/>
<span class="zoom-badge">🔍 클릭 확대</span>
</div>
</div>
</div>

<div class="pub-item news-entry">
<p class="justify"><span class="pub-num">[2026.02]</span> Youngchan and Sungjae have newly joined our ARCS Lab. They will be working in the lab as interns and plan to pursue their Master’s degrees with us after graduation. We warmly congratulate them on joining the lab and wish them a meaningful and rewarding graduate journey.</p>
</div>

<div class="sec-head spaced">[2025]</div>
<div class="pub-item news-entry">
<p class="justify"><span class="pub-num">[2025.09]</span> Siwon and Sangwoo have joined ARCS LAB as new members. They plan to begin their research as master's students starting in the 2026-1 semester. We warmly welcome them and hope their degree journey will be both meaningful and rewarding!</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2025.07]</span> Our paper (A 2.54 Gbps, 1.22 pJ/bit, IR-UWB Transmitter with a Power-Gating Technique) has been accepted to IEEE TCAS-II. I have been involved as a co-author. I would like to thank my supervisor professor, Tae Wook Kim (Corresponding author) and my co-worker, Kyungseok Song (1st)</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2025.05]</span> Our paper (ULP Sliding-IF Receiver with 25% Duty Passive Mixer and Enhanced LO Feed-Through Rejection) has been accepted to IEEE MWTL. I have been involved as a corresponding author. I would like to thank my co-worker, Dr. Hyun-Gi Seok, and research crews of NICE Lab., KAIST (PI : Prof. Sang-Gug Lee).</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2025.03]</span> I will be transitioning from the dept. of electronic engineering at Andong National University to the dept. of information and telecommunication Engineering at Incheon National University starting from the 2025 spring semester. I sincerely thank the faculty members at Andong National University. Please support me in this new beginning!</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2025.02]</span> Our invited paper from IEEE SoVC 2024 (High-Sensitivity, Low-Power IR-UWB Radar Transceiver with Self-Interference Resistance for Child Presence Detection and Precision Positioning) has been accepted to IEEE JSSC. I have been involved as a co-author. I would like to thank my co-workers at Samsung Electronics.</p>
</div>

<div class="sec-head spaced">[2024]</div>
<div class="pub-item news-entry">
<p class="justify"><span class="pub-num">[2024.09]</span> Our paper (A 6-9 GHz 1.28 Gbps 76mA Amplitude and Synchronized Time Shift Keying IR-UWB CMOS Transceiver for Brain Computer Interfaces) has been accepted to IEEE Transactions on Biomedical Circuits and Systems. I have been involved as a first-author (1st). I would like to thank my supervisor professor, Tae Wook Kim (Corresponding author) and my co-workers (Dr. Junyoung Jang, Mr. Kyungseok Song; co-author)</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2024.07]</span> My paper (Ultra-Low Power 1 Gbps Amplitude Modulation Ultra-Wideband CMOS Transmitter) has been accepted to IEIE Journal of the Institute of Electronics and Information Engineers as a sole author.</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2024.01]</span> Our paper (An Active Track and Hold Circuit with Linearity Enhancement Technique and Its Analysis using Volterra Series) has been accepted to IEEE Access. I have been involved as a co-author (2nd). I would like to thank my supervisor professor, Tae Wook Kim (Corresponding author) and my co-worker (Dr. Junyoung Jang, 1st author)</p>
</div>

<div class="sec-head spaced">[2023]</div>
<div class="pub-item news-entry">
<p class="justify"><span class="pub-num">[2023.09]</span> Our invited paper from ISSCC 2023 (A Fully Integrated IEEE 802.15.4/4z Compliant 6.5-8GHz UWB System-on Chip RF Transceiver Supporting Precision Positioning in CMOS 28nm Process ) has been accepted to IEEE JSSC. I have been involved as a co-author (3rd). I would like to thank my co-workers at Samsung Electronics.</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2023.04]</span> Our paper (Passive IR-UWB Localization System for UAV-based Electric Facility Inspection during GPS Outage) has been accepted to IEEE Access. I was involved as a co-author (2nd)</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2023.04]</span> Our paper (Fully integrated UWB Transceiver, IEEE 802.15.4z) has been invited from IEEE JSSC. I was involved as a co-author (3rd)</p>
</div>
<div class="pub-item news-entry">
<p class="justify mt"><span class="pub-num">[2023.03]</span> Geunhaeng has been with dept. of electronic engineering, Andong National University as an assistant professor.</p>
</div>
</div>
`;
