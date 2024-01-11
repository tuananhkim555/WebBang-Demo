let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.addEventListener("scroll", function() {
  var slidingTag = document.getElementById("slidingTag");

  // Hiển thị thẻ khi cuộn xuống 100px
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      slidingTag.style.display = "block";
  } else {
      slidingTag.style.display = "none";
  }

  // Cập nhật vị trí thẻ dựa trên giá trị cuộn
  var scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / (document.documentElement.scrollHeight - window.innerHeight);
  var newPosition = scrollPercentage * (document.documentElement.clientWidth - slidingTag.clientWidth);
  slidingTag.style.left = newPosition + "px";
});

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
// Đoạn mã JavaScript để di chuyển chatbox theo con trỏ chuột
document.addEventListener("mousemove", function (e) {
  // Lấy kích thước của chatbox
  var chatbox = document.getElementById("chatbox");
  var chatboxRect = chatbox.getBoundingClientRect();

  // Cập nhật vị trí của chatbox dựa trên vị trí chuột
  chatbox.style.left = e.pageX - chatboxRect.width / 2 + "px";
  chatbox.style.top = e.pageY - chatboxRect.height / 2 + "px";
});
