// webp test
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
// burger 
function burgerMenu() {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.nav__menu')
   const contact = document.querySelector('.nav__contact')
   const body = document.querySelector('body')
   burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
         menu.classList.add('active')
         contact.classList.add('active')
         burger.classList.add('active-burger')
         body.classList.add('locked')
      } else {
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
         contact.classList.remove('active')
      }
   })
   window.addEventListener('resize', () => {
      if (window.innerWidth > 767.98) {
         menu.classList.remove('active')
         burger.classList.remove('active-burger')
         body.classList.remove('locked')
         contact.classList.remove('active')
      }
   })
}
burgerMenu();
function fixedNav() {
   const nav = document.querySelector('nav')
   const breakpoint = 1
   if (window.scrollY > breakpoint) {
      nav.classList.add('fixed__nav')
   } else {
      nav.classList.remove('fixed__nav')
   }
}
window.addEventListener('scroll', fixedNav)
// home 
if (document.querySelector('.home')) {
   // review__swiper
   new Swiper('.review__swiper > .swiper-container', {
      direction: 'horizontal',
      loop: !1,
      initialSlide: 0,
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 50,
      autoplay: {
         delay: 5000,
         disableOnInteraction: true,
      },
      keyboard: {
         enabled: !0,
         onlyInViewport: !1
      },
      pagination: {
         el: ".swiper-pagination",
         type: "fraction",
      },
      navigation: {
         nextEl: ".swiper-next",
         prevEl: ".swiper-prev",
      },
   });
   // scroll down link start
   const links = document.querySelectorAll(".start__scroll");
   for (const link of links) {
      link.addEventListener("click", clickHandler);
   }
   function clickHandler(e) {
      e.preventDefault();
      const theLink = this.getAttribute("href");
      document.querySelector(theLink).scrollIntoView({
         behavior: "smooth"
      });
   }
}
// blog
if (document.querySelector('.blog')) {
   var swiper = new Swiper(".mySwiper", {
      spaceBetween: 60,
      slidesPerView: 2,
      loop: !0,
      freeMode: true,
      direction: 'vertical',
      breakpoints: {
         1201: {
            spaceBetween: 30,
            direction: 'vertical',
         },
         451: {
            slidesPerView: 2,
            direction: 'horizontal',
         },
         0: {
            direction: 'horizontal',
            slidesPerView: 1,
         }
      }

   });
   var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      loop: !0,
      thumbs: {
         swiper: swiper,
      },
   });
}
// soon
if (document.querySelector('.body__soon')) {
   function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      const month = Math.floor(total / (1000 * 60 * 60 * 24 * 30));

      return {
         total,
         days,
         hours,
         minutes,
         seconds,
         month
      };
   }
   function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const mouthSpan = clock.querySelector('#timer-months');
      const daysSpan = clock.querySelector('#timer-days');
      const hoursSpan = clock.querySelector('#timer-hours');
      const minutesSpan = clock.querySelector('#timer-mins');
      const secondsSpan = clock.querySelector('#timer-secs');
      function updateClock() {
         const t = getTimeRemaining(endtime);
         mouthSpan.innerHTML = t.month;
         daysSpan.innerHTML = ('0' + t.days).slice(-2);
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
         if (t.total <= 0) {
            clearInterval(timeinterval);


         }
      }
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
   }
   const deadline = new Date(Date.parse(new Date()) + 2 * 30 * 24 * 60 * 60 * 1000);
   initializeClock('timer', deadline);
}
const scrollElements = document.querySelectorAll('.js-scroll');
const elementInView = (el, dividend = 1) => {
   const elementTop = el.getBoundingClientRect().top;
   return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
   );
};
const elementOutofView = (el) => {
   const elementTop = el.getBoundingClientRect().top;
   return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
   );
};
const displayScrollElement = (element) => {
   element.classList.add('scrolled');
};
const hideScrollElement = (element) => {
   element.classList.remove('scrolled');
};
const handleScrollAnimation = () => {
   scrollElements.forEach((el) => {
      if (elementInView(el, 1)) {
         displayScrollElement(el)
      } else if (elementOutofView(el)) {
         hideScrollElement(el)
      }
   })
}
window.addEventListener('scroll', () => {
   handleScrollAnimation();
});
window.addEventListener('load', () => {
   handleScrollAnimation();
});

//function ScrollUp(){
   const offset = 100;
   const scrollUp = document.querySelector(".scroll-up");
   const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
   const pathLength = scrollUpSvgPath.getTotalLength();

   scrollUpSvgPath.style.strokeDasharray = "${pathLength} ${pathLength}";
   scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

   const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
   // updateDashoffset
   const updateDashoffset = () => {};
   // onScroll
   window.addEventListener('scroll', () => {
      updateDashoffset();
      if (getTop()>offset) {
         scrollUp.classList.add('scroll-up--active')
      } else{
         scrollUp.classList.remove('scroll-up--active');
      }
   });

   // click
   scrollUp.addEventListener('click', () => {
      updateDashoffset()
      window.scrollTo({
         top:0,
         behavior:"smooth"
      });
   });
//}
   updateDashoffset()

   document.addEventListener('DOMContentLoaded', function() {
      var modalButtons = document.querySelectorAll('.js-open-modal'),
          overlay      = document.querySelector('#overlay-modal'),
          closeButtons = document.querySelector('.js-modal-close');
      
      
      modalButtons.forEach(function(item){
         
         item.addEventListener('click', function(e) {
            
            e.preventDefault();
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            
            modalElem.classList.add('active');
            overlay.classList.add('active');
         }); // end click
      }); // end foreach
   }); // end ready
   let video = document.getElementById("video");            // Получаем элемент video
   let videoTrack = document.querySelector(".video-track"); // Получаем элемент Видеодорожки
   let time = document.querySelector(".timeline");          // Получаем элемент времени видео
   let btnPlay = document.querySelector(".play");           // Получаем кнопку проигрывания
   let btnPause = document.querySelector(".pause");         // Получаем кнопку паузы
   let btnRewind = document.querySelector(".rewind");       // Получаем кнопки перемотки назад
   let btnForward = document.querySelector(".forward");     // Получаем кнопку перемотки вперёд
   btnPlay.addEventListener("click", function() {
      video.play(); // Запуск проигрывания
      // Запуск интервала
      videoPlay = setInterval(function() {
          // Создаём переменную времени видел
          let videoTime = Math.round(video.currentTime)
          // Создаём переменную всего времени видео
          let videoLength = Math.round(video.duration)
          // Вычисляем длину дорожки
          time.style.width = (videoTime * 100) / videoLength + '%';
      }, 10)
  });
  btnPause.addEventListener("click", function() {
   video.pause(); // Останавливает воспроизведение
   clearInterval(videoPlay) // убирает работу интервала
});
// Нажимаем на кнопку перемотать назад
btnRewind.addEventListener("click", function() {
   video.currentTime -= 5; // Уменьшаем время на пять секунд
});

// Нажимаем на кнопку перемотать вперёд
btnForward.addEventListener("click", function() {
   video.currentTime += 5; // Увеличиваем время на пять секунд
});
videoTrack.addEventListener("click", function(e) {
    let posX = e.clientX - 8; // Вычисляем позицию нажатия
    let timePos = (posX * 100) / 800; // Вычисляем процент перемотки
    time.style.width = timePos + '%'; // Присваиваем процент перемотки
    video.currentTime = (timePos * Math.round(video.duration)) / 100 // Перематываем
});