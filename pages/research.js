/* pages/research.js : 이 페이지의 내용. 백틱(`) 안의 HTML 만 수정하세요. */
(window.PAGE_HTML = window.PAGE_HTML || {})['research'] = `
<!-- pages/research.html -->
<h2 class="view-title">Research</h2>
<div class="card" style="text-align:center;">
<p style="font-size:1.1rem; font-weight:700; color:var(--primary); margin-bottom:8px;">Students who are interested or curious about the research can contact me anytime.</p>
<p style="font-size:1.1rem; font-weight:700; color:var(--primary); margin-bottom:8px;">I will gladly explain the research in detail and help spark your interest!</p>
<p style="font-size:1.1rem; font-weight:700; color:var(--primary); margin-bottom:14px;">Please don't hesitate to reach out and feel free to schedule a meeting. 🙏</p>
<p style="font-size:1rem; font-weight:700; color:#000000; margin-bottom:4px;">아래 연구가 궁금하거나 흥미가 있는 학생들은 언제든 연락주세요.</p>
<p style="font-size:1rem; font-weight:700; color:#000000; margin-bottom:4px;">연구에 대해 자세히 설명드리고 흥미를 가질 수 있게 도와드리겠습니다!</p>
<p style="font-size:1rem; font-weight:700; color:#000000;">연락하는 것을 두려워 하지 마시고 편하게 면담 신청해주시기 바랍니다. 🙏</p>
<div class="divider"></div>
<div class="sec-head" style="justify-content:flex-start; text-align:left; color:var(--dodger-dark); font-size:1.65rem;">Research Overview</div>
<img alt="Research Overview" referrerpolicy="no-referrer" src="images/research_overview.png" style="width:100%; border-radius:12px;"/>
</div>

<div class="card">
<div class="sec-head">1. High-Data-Rate Wireless Communication &amp; Transceiver IC</div>
<img alt="High-Data-Rate Wireless Communication &amp; Transceiver IC" referrerpolicy="no-referrer" src="images/research_theme1-high-data-rate.png" style="width:100%; border-radius:12px;"/>
<div class="research-details">
<h4>Abstract</h4>
<p>This research focuses on high-speed and energy-efficient IR-UWB wireless transceivers utilizing multi-dimensional modulation techniques. By combining Amplitude (PAM) and Phase (PSK) modulation schemes with a 65 nm CMOS process, the proposed system achieves multi-gigabit data transmission. The architecture also explores frequency-domain modulation extensions (FSK) to improve spectral efficiency for low-power wireless communication systems.</p>
<h4>Key Highlights</h4>
<ul>
<li>Multi-dimensional modulation combining Hybrid 4-PAM / 4-PSK</li>
<li>Achieves up to 2 Gbps data rates at 500 MHz PRF in 7.5–8.5 GHz band</li>
<li>Spectrum-efficient IR-UWB transceiver extension using FSK modulation</li>
<li>Target Applications: High-speed wireless data transfer, BCI/neural interfaces, humanoids, and distributed sensor nodes</li>
</ul>
</div>
</div>

<div class="card">
<div class="sec-head">2. Integrated 3D Sensing &amp; High-Precision Localization IC</div>
<img alt="Integrated 3D Sensing &amp; High-Precision Localization IC" referrerpolicy="no-referrer" src="images/research_theme2-3d-sensing.png" style="width:100%; border-radius:12px;"/>
<div class="research-details">
<h4>Abstract</h4>
<p>This research presents an integrated IR-UWB sensing and localization IC designed for 3D spatial estimation. By combining time-delay-based Tx beamforming and multi-array Rx architectures, the system enables simultaneous azimuth, elevation angle (AoA), and distance measurements. The ultra-low-power time-domain processing structure utilizes TDoA and TDC/DTC modules to achieve high precision with low power consumption.</p>
<h4>Key Highlights</h4>
<ul>
<li>Time-delay Tx beamforming and multi-array Rx for integrated 3D spatial positioning</li>
<li>TDoA &amp; TDC-based high-precision azimuth and elevation estimation</li>
<li>Switching-based channel sharing scheme for ultra-low-power multi-channel Rx</li>
<li>High accuracy performance: Angle error &le; 2&deg; and time resolution &le; 10 ps</li>
<li>Target Applications: Disaster response, NLOS human detection, autonomous mobility, and 3D positioning</li>
</ul>
</div>
</div>

<div class="card">
<div class="sec-head">3. Wireless Integrated Sensing and Communication (ISAC) System</div>
<img alt="Wireless Integrated Sensing and Communication (ISAC) System" referrerpolicy="no-referrer" src="images/research_theme3-isac.png" style="width:100%; border-radius:12px;"/>
<div class="research-details">
<h4>Abstract</h4>
<p>This research proposes a sub-mW ultra-low-power wireless ISAC transceiver, enabling up to 100 Mbps data rates and sub-cm ranging precision. Utilizing S-OOK modulation and Two-Way Ranging (TWR), the system features a digital edge-combining Tx (&lt;0.5 mW) and a non-coherent self-mixing Rx with a Two-Step Vernier TDC (&lt;3 ps resolution) in the 6.5–8.0 GHz band. The integrated single-module architecture also supports seamless switching to standalone radar mode for uncooperative targets.</p>
<h4>Key Highlights</h4>
<ul>
<li>Sub-mW ISAC Performance: Delivers 100 Mbps communication and sub-cm ranging at under 1 mW total power</li>
<li>Sub-Centimeter Ranging: Achieves &lt;3 ps time resolution via a Two-Step Vernier TDC for high-precision TWR</li>
<li>Low-Power Digital Tx: Employs edge-combining logic and power-gating switches to keep Tx power under 0.5 mW at 6.5–8.0 GHz</li>
<li>High-Sensitivity Rx Chain: Combines a non-coherent self-mixing detector with processing gain to reach an Rx sensitivity of -80 dBm</li>
<li>Dual-Mode Flexibility: Features seamless switching between TWR communication and standalone radar mode on a single module</li>
</ul>
</div>
</div>

<div class="card">
<div class="sec-head">4. Compound Semiconductor RF IC &amp; High-Reliability Systems</div>
<img alt="Compound Semiconductor RF IC &amp; High-Reliability Systems" referrerpolicy="no-referrer" src="images/research_theme4-compound-semiconductor.png" style="width:100%; border-radius:12px;"/>
<div class="research-details">
<h4>Abstract</h4>
<p>This research focuses on GaN and compound semiconductor RF IC designs engineered for extreme operational environments. By employing linearization techniques and radiation-aware bias compensation circuits, the proposed designs enhance linearity and reliability in power amplifiers and LNAs. These systems leverage wide bandgap characteristics for high-power, high-efficiency RF front-end modules.</p>
<h4>Key Highlights</h4>
<ul>
<li>AI-assisted predistortion for power amplifier linearization and parameter optimization</li>
<li>On-chip broadside- and edge-coupled baluns for differential RF outputs</li>
<li>Adaptive compensation architecture for PVT, memory, and aging effects</li>
<li>MGTR-based linearity enhancement for GaN power amplifiers (PA) and low-noise amplifiers (LNA)</li>
<li>Radiation-aware device design and LUT-based adaptive bias compensation</li>
<li>Target Applications: Defense, space, satellite communications, and high-power RF front-ends</li>
</ul>
</div>
</div>
`;
