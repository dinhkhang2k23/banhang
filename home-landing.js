(()=>{function e(){var e=$(".navbar");$(window).scrollTop()>=100?e.addClass("fixed"):e.removeClass("fixed")}e(),$(window).scroll((function(){e()})),new Swiper("#slider-section5",{loop:!0,slidesPerView:5,spaceBetween:32,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class=" '+i+'">'+(e+1)+"</span>"}}}).on("slideChangeTransitionEnd",(function(e){$html=$("#section5 .swiper .swiper-slide-active .label-slide").html(),$("#section5 .label-display").html($html)})),new Swiper("#section6-slider .swiper",{loop:!0,slidesPerView:9,spaceBetween:32,navigation:{nextEl:"#section6-slider .swiper-button-next",prevEl:"#section6-slider .swiper-button-prev"}}),new Swiper("#section7 .swiper",{loop:!0,autoplay:{delay:3e3},slidesPerView:3,spaceBetween:10,centeredSlides:!0,effect:"coverflow",grabCursor:!0,coverflowEffect:{rotate:0,stretch:110,depth:0,modifier:1,scale:.5,slideShadows:!1},pagination:{clickable:!0,el:".swiper-pagination"}}),new Swiper("#section8 .swiper",{autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,slidesPerView:3,spaceBetween:32,centeredSlides:!0,pagination:{clickable:!0,el:".swiper-pagination"},navigation:{nextEl:"#section8 .swiper-button-next",prevEl:"#section8 .swiper-button-prev"}}),$("#section12 .item-faq .icon").click((function(){var e=$(this).closest(".item-faq");e.hasClass("active")?(e.removeClass("active"),e.children(".content-faq").slideUp()):($("#section12 .item-faq").removeClass("active"),$("#section12 .item-faq .content-faq").slideUp(),e.addClass("active"),e.children(".content-faq").slideDown("slow",(function(){$("html,body").animate({scrollTop:$(this).offset().top-150},"slow")})))}))})();