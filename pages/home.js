/* pages/home.js : 이 페이지의 내용. 백틱(`) 안의 HTML 만 수정하세요. */
(window.PAGE_HTML = window.PAGE_HTML || {})['home'] = `
<div class="bento-grid">
<div class="axis-hero-card">
<h1 class="axis-hero-title">
<span class="arcs-initial">A</span>dvanced <span class="arcs-initial">R</span>adio-Frequency<br/>
Integrated <span class="arcs-initial">C</span>ircuit and <span class="arcs-initial">S</span>ystem Design Lab.
</h1>
<div class="axis-hero-sub">
The ARCS Laboratory — Leading Innovations in High-Speed RF/Analog ICs and Wireless Sensing Systems.
</div>
<p class="axis-hero-p">
We research RF/Analog Circuits and Systems based on CMOS.<br/>
Specifically, we build versatile integrated circuits that push performance and efficiency, spanning Gbps High-Speed Wireless Transceivers, Precise Ranging &amp; Localization Sensors, and AI Radar Systems.
</p>
<div class="axis-actions">
<button class="btn-explore" onclick="showView('research')">Explore Research →</button>
<button class="btn-join" onclick="showView('home', 'contact')">Join the Lab ↗</button>
</div>
</div>

<div class="card home-info-card" id="latest-news">
<div class="sec-head">Latest News (2026)</div>
<div style="display:flex; flex-direction:column; gap:16px; font-size:0.95rem; text-align:justify;">
<div>
<strong style="color:var(--dodger-vivid);">[2026.11]</strong> Hansun Yu has newly joined our ARCS Lab as an intern. He plans to pursue his Master's degree with us after graduation. We warmly welcome him and wish him a meaningful and rewarding graduate journey.
</div>
<div>
<strong style="color:var(--dodger-vivid);">[2026.09]</strong> Youngchan (undergraduate researcher) received the Outstanding Paper Award at the 26th RF/Analog Workshop for his paper titled “<strong>A 2-Gbps IR-UWB Transmitter Using Hybrid 4-PAM/4-PSK Modulation</strong>.” The paper presented high-order modulation techniques for high-speed, energy-efficient wireless transmission. Congrats to Youngchan on this well-deserved recognition!
</div>
<div>
<strong style="color:var(--dodger-vivid);">[2026.08]</strong> Siwon has been selected for the 2026 Master's Student Research Grant Program (석사과정 연구장려금). The selected research project is titled “<strong>임펄스 기반 다중 배열 수신기를 이용한 고정밀 3차원 위치 추정 시스템 IC 설계</strong>”. Through this research grant, Siwon will receive a total of 12 million KRW from September 2026 to August 2027. Congrats!
</div>
<div>
<strong style="color:var(--dodger-vivid);">[2026.08]</strong> Our research proposal, "<strong>차세대 통신-센싱 융합 환경을 위한 초저전력 3차원 각도·거리 통합추정 임펄스-라디오 UWB 하이브리드 빔포밍 레이다 SoC</strong>," has been selected for the Basic Research Program (기본연구) by the National Research Foundation of Korea (NRF, 한국연구재단). The project will run for 60 months, from September 2026 to August 2031. As our research group's first external project, we hope this will serve as a major stepping stone for our future researches.
</div>
<div>
<strong style="color:var(--dodger-vivid);">[2026.02]</strong> Youngchan and Sungjae have newly joined our ARCS Lab. They will be working in the lab as interns and plan to pursue their Master’s degrees with us after graduation. We warmly congratulate them on joining the lab and wish them a meaningful and rewarding graduate journey.
</div>
</div>
</div>

<div class="card home-info-card" id="contact">
<div class="sec-head">Contact or Consulting</div>
<div style="font-size:0.93rem; line-height:1.75;">
<p>전자회로 및 반도체 회로 설계에 관심이 있는 학부 연구생 및 진학에 관심 있는 학생을 모집합니다.</p>
<p>관심이 있으신 학생은 하기 메일로 면담 요청을 해주시기 바랍니다. (아날로그 회로 설계, RF 통신 회로 등)</p>
<p>학과는 정보통신공학과 또는 지능형반도체공학과(협동과정)으로 진학이 가능합니다.</p>
<p>멤버에게는 등록금 및 장학금 지원이 가능합니다.</p>
<div class="divider" style="margin:16px 0;"></div>
<p style="color:var(--text-muted);">
I am looking for undergraduate research students and prospective graduate students interested in integrated circuit design. If you are interested, please send an email to request a meeting. (Analog Circuit, RF communication circuits, etc.)<br/>
You can apply to either the department of information and telecommunication engineering or the department of intelligent semiconductor engineering.<br/>
Tuition and scholarship support is available for members.<br/>
Please feel free to contact me for any consulting!
</p>
<div class="divider" style="margin:16px 0;"></div>
<p><strong>Address)</strong> 인천광역시 연수구 아카데미로 119, 7호관 정보기술대학 519호<br/>
Room 519, Bldg. 7, 119 Academy-ro, Yeonsu-gu, Incheon, Republic of Korea</p>
<p style="margin-top:6px;"><strong>E-Mail )</strong> <a href="mailto:ghaenglee@inu.ac.kr" style="color:var(--dodger-vivid); font-weight:800; text-decoration:underline;">ghaenglee@inu.ac.kr</a></p>
<p><strong>Office)</strong> 82-31-835-8283</p>
<p><strong>Lab.)</strong> 82-31-835-4199</p>
</div>
</div>
</div>
`;
