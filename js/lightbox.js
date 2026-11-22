/* lightbox.js : 단일 이미지 모달 + 앨범 라이트박스 (Invited Talks / Lab Gallery / News 공용) */
let activeAlbumList = [];
let activeAlbumTitle = '';
let galleryAlbumIndex = 0;
let galleryAlbumDragging = false;
let galleryAlbumStartX = 0, galleryAlbumStartY = 0;
let galleryAlbumX = 0, galleryAlbumY = 0, galleryAlbumScale = 1;

/* Lab Gallery 기본 앨범 (2026 Fall / Jeju) */
const defaultLabGalleryImages = [
    'images/lab-gallery_202609_jeju-workshop_1.jpg',
    'images/lab-gallery_202609_jeju-workshop_2.jpg',
    'images/lab-gallery_202609_jeju-workshop_3.jpg',
    'images/lab-gallery_202609_jeju-workshop_4.jpg'
];

function updateGalleryAlbumTransform() {
    const t = document.getElementById('galleryLightboxTarget');
    if (t) t.style.transform = 'translate(' + galleryAlbumX + 'px, ' + galleryAlbumY + 'px) scale(' + galleryAlbumScale + ')';
}

function openAlbum(imgList, index, title) {
    const overlay = document.getElementById('galleryLightbox');
    const target = document.getElementById('galleryLightboxTarget');
    if (!overlay || !target) return;
    activeAlbumList = imgList || defaultLabGalleryImages;
    activeAlbumTitle = title || 'Lab Gallery';
    galleryAlbumIndex = index;
    galleryAlbumX = 0; galleryAlbumY = 0; galleryAlbumScale = 1;
    target.src = activeAlbumList[galleryAlbumIndex];
    target.alt = activeAlbumTitle + ' - Photo ' + (galleryAlbumIndex + 1);
    target.classList.remove('dragging');
    updateGalleryAlbumTransform();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openGalleryAlbum(index) {
    openAlbum(defaultLabGalleryImages, index, '2026 Fall Semester Lab Kick-off Party & RF/Analog Workshop in Jeju');
}

function closeGalleryAlbum(event) {
    if (event && event.target && event.target.closest('.gallery-lightbox-content, .gallery-lightbox-prev, .gallery-lightbox-next')) return;
    if (event && event.target && event.target.closest('.gallery-lightbox-close')) event.stopPropagation();
    const overlay = document.getElementById('galleryLightbox');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function changeGalleryAlbum(direction, event) {
    if (event) event.stopPropagation();
    if (!activeAlbumList.length) return;
    galleryAlbumIndex = (galleryAlbumIndex + direction + activeAlbumList.length) % activeAlbumList.length;
    const target = document.getElementById('galleryLightboxTarget');
    if (!target) return;
    galleryAlbumX = 0; galleryAlbumY = 0; galleryAlbumScale = 1;
    target.src = activeAlbumList[galleryAlbumIndex];
    target.alt = activeAlbumTitle + ' - Photo ' + (galleryAlbumIndex + 1);
    updateGalleryAlbumTransform();
}

function openImageModal(imgSrc, altText) {
    const overlay = document.getElementById('imgModalOverlay');
    const target = document.getElementById('imgModalTarget');
    if (overlay && target) {
        target.src = imgSrc;
        target.alt = altText || '확대 이미지';
        overlay.classList.add('active');
    }
}
function closeImageModal() {
    const overlay = document.getElementById('imgModalOverlay');
    if (overlay) overlay.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('galleryLightbox');
    const target = document.getElementById('galleryLightboxTarget');
    if (!lightbox || !target) return;

    target.addEventListener('mousedown', function (e) {
        galleryAlbumDragging = true;
        galleryAlbumStartX = e.clientX - galleryAlbumX;
        galleryAlbumStartY = e.clientY - galleryAlbumY;
        target.classList.add('dragging');
        e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) {
        if (!galleryAlbumDragging) return;
        galleryAlbumX = e.clientX - galleryAlbumStartX;
        galleryAlbumY = e.clientY - galleryAlbumStartY;
        updateGalleryAlbumTransform();
    });
    window.addEventListener('mouseup', function () {
        galleryAlbumDragging = false;
        target.classList.remove('dragging');
    });
    target.addEventListener('touchstart', function (e) {
        if (!e.touches.length) return;
        galleryAlbumDragging = true;
        galleryAlbumStartX = e.touches[0].clientX - galleryAlbumX;
        galleryAlbumStartY = e.touches[0].clientY - galleryAlbumY;
        target.classList.add('dragging');
    }, { passive: false });
    target.addEventListener('touchmove', function (e) {
        if (!galleryAlbumDragging || !e.touches.length) return;
        galleryAlbumX = e.touches[0].clientX - galleryAlbumStartX;
        galleryAlbumY = e.touches[0].clientY - galleryAlbumStartY;
        updateGalleryAlbumTransform();
        e.preventDefault();
    }, { passive: false });
    target.addEventListener('touchend', function () {
        galleryAlbumDragging = false;
        target.classList.remove('dragging');
    });
    lightbox.addEventListener('wheel', function (e) {
        if (!lightbox.classList.contains('active')) return;
        e.preventDefault();
        galleryAlbumScale += e.deltaY < 0 ? 0.12 : -0.12;
        galleryAlbumScale = Math.min(3, Math.max(1, galleryAlbumScale));
        updateGalleryAlbumTransform();
    }, { passive: false });
});

document.addEventListener('keydown', function (e) {
    const album = document.getElementById('galleryLightbox');
    if (e.key === 'Escape') {
        closeImageModal();
        if (album && album.classList.contains('active')) {
            album.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    if (album && album.classList.contains('active')) {
        if (e.key === 'ArrowLeft') changeGalleryAlbum(-1);
        if (e.key === 'ArrowRight') changeGalleryAlbum(1);
    }
});
