var swiper=new Swiper(".testimonialSlider",{
  loop:!0,pagination:{el:".swiper-pagination",clickable:!0
},
autoplay:{delay:2500,disableOnInteraction:!1
},
breakpoints:{200:{slidesPerView:1,spaceBetween:10
},
992:{slidesPerView:1,spaceBetween:20
}
}
}),
swiper=new Swiper(".homeslider",{
  slidesPerView:"auto",loop:!0,spaceBetween:20,autoplay:{delay:2500,disableOnInteraction:!1
  }
});