/* app.js : 페이지 라우터 (pages/*.html 을 처음 방문할 때 불러와 삽입) + 모바일 메뉴 */

/* 페이지 이름 → 전용 CSS / 활성화할 상단 메뉴 버튼 */
const PAGES = {
    'home':          { css: 'home',         nav: 'btn-home' },
    'pi':            { css: 'pi',           nav: 'btn-family' },
    'student':       { css: null,           nav: 'btn-family' },
    'research':      { css: 'research',     nav: 'btn-research' },
    'chips':         { css: 'chips',        nav: 'btn-research' },
    'publications':  { css: 'achievements', nav: 'btn-achievement' },
    'patents':       { css: 'achievements', nav: 'btn-achievement' },
    'project':       { css: 'achievements', nav: 'btn-project' },
    'invited-talks': { css: 'talks-news',   nav: 'btn-talks' },
    'teaching':      { css: 'teaching',     nav: 'btn-teaching' },
    'news':          { css: 'talks-news',   nav: 'btn-news' },
    'lab-gallery':   { css: 'lab-gallery',  nav: 'btn-gallery' }
};

const loadedCss = {};

function loadCss(name) {
    if (!name) return Promise.resolve();
    if (loadedCss[name]) return loadedCss[name];
    loadedCss[name] = new Promise(function (resolve) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/pages/' + name + '.css';
        link.onload = resolve;
        link.onerror = resolve;   // CSS 실패해도 페이지는 표시
        document.head.appendChild(link);
    });
    return loadedCss[name];
}

/* pages/<name>.js 를 <script> 로 불러옵니다 (file:// 더블클릭에서도 동작) */
const loadedScripts = {};
function loadPageScript(name) {
    if (loadedScripts[name]) return loadedScripts[name];
    loadedScripts[name] = new Promise(function (resolve, reject) {
        const sc = document.createElement('script');
        sc.src = 'pages/' + name + '.js';
        sc.onload = resolve;
        sc.onerror = function () { reject(new Error('load fail')); };
        document.body.appendChild(sc);
    });
    return loadedScripts[name];
}

async function ensurePage(name) {
    let view = document.getElementById('view-' + name);
    if (view && view.dataset.loaded === '1') return view;
    if (!view) {
        view = document.createElement('div');
        view.className = 'page-view';
        view.id = 'view-' + name;
        document.getElementById('app').appendChild(view);
    }
    view.innerHTML = '<div class="page-loading">Loading…</div>';
    try {
        await Promise.all([loadPageScript(name), loadCss(PAGES[name].css)]);
        const html = window.PAGE_HTML && window.PAGE_HTML[name];
        if (!html) throw new Error('empty page');
        view.innerHTML = html;
        view.dataset.loaded = '1';
    } catch (err) {
        view.innerHTML = '<div class="page-error">pages/' + name + '.js 를 불러오지 못했습니다. 파일이 있는지, 괄호/백틱이 깨지지 않았는지 확인해 주세요.</div>';
    }
    return view;
}

async function showView(viewName, scrollTargetId, fromHistory) {
    if (!PAGES[viewName]) viewName = 'home';
    const view = await ensurePage(viewName);

    document.querySelectorAll('.page-view').forEach(function (v) { v.classList.remove('active'); });
    view.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
    const navBtn = document.getElementById(PAGES[viewName].nav);
    if (navBtn) navBtn.classList.add('active');

    if (!fromHistory) history.pushState({ view: viewName }, '', '#' + viewName);
    closeMobileMenu();

    if (scrollTargetId) {
        setTimeout(function () {
            const el = document.getElementById(scrollTargetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function closeMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    const toggle = document.getElementById('mobile-menu-toggle');
    if (menu) menu.classList.remove('mobile-open');
    if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '메뉴 열기');
        toggle.textContent = '☰';
    }
    document.querySelectorAll('.nav-item.open').forEach(function (i) { i.classList.remove('open'); });
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function (e) {
            e.preventDefault(); e.stopPropagation();
            const isOpen = !navMenu.classList.contains('mobile-open');
            navMenu.classList.toggle('mobile-open', isOpen);
            toggleBtn.setAttribute('aria-expanded', String(isOpen));
            toggleBtn.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
            toggleBtn.textContent = isOpen ? '✕' : '☰';
        });
    }

    document.querySelectorAll('.nav-item > .nav-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault(); e.stopPropagation();
                const parent = this.closest('.nav-item');
                const wasOpen = parent.classList.contains('open');
                document.querySelectorAll('.nav-item.open').forEach(function (i) { if (i !== parent) i.classList.remove('open'); });
                parent.classList.toggle('open', !wasOpen);
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('header')) closeMobileMenu();
    });

    /* 첫 화면: URL 해시(#news 등)가 있으면 해당 페이지, 없으면 home */
    const first = location.hash.replace('#', '') || 'home';
    showView(first, null, true);
});

window.addEventListener('popstate', function () {
    showView(location.hash.replace('#', '') || 'home', null, true);
});
window.addEventListener('resize', function () {
    if (window.innerWidth > 900) closeMobileMenu();
});
