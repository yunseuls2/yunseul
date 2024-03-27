// 메뉴 토글
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 부드러운 스크롤 효과 추가
const navLinkItems = document.querySelectorAll('.nav-links a'); // 변수 이름 변경

navLinkItems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// FAQ 아코디언 기능 추가
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('h3');
  const answer = item.querySelector('.answer');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// 상품 카드 hover 효과 추가
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  });
});

// Owl Carousel 초기화
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });
});

// 팝업 링크 기능 추가
function openPopup(event) {
  event.preventDefault(); // 기본 링크 동작을 방지
  var url = event.currentTarget.href; // 현재 링크의 URL을 가져옴
  window.open(url, 'popupWindow', 'width=600,height=400,scrollbars=yes'); // 새 창으로 열기
}

// 팝업 링크 이벤트 리스너 추가
const popupLinks = document.querySelectorAll('.popup-link'); // 팝업 링크 클래스

popupLinks.forEach(link => {
  link.addEventListener('click', openPopup);
});