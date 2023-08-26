import { universityData as uData } from "./UData.js";
import { mentorData as mData } from "./mData.js";

$(document).ready(function () {
  // university data show
  uData.map((data) => {
    $("#University").append(`
            <div class="card">
                <div class="face face1">
                    <div class="content">
                    </div>
                </div>
                <div class="face face2">
                    <h2 class="text-center">${data}</h2>
                </div>
            </div>`);
  });

  //   slider logic
  let swiper1 = new Swiper(".swiper1", {
    slidesPerView: getSlidesPerView(),
    direction: "horizontal",
    navigation: {
      nextEl: ".Biologyprevbtn",
      prevEl: ".Biologynextbtn",
    },
  });

  let swiper2 = new Swiper(".swiper2", {
    slidesPerView: getSlidesPerView(),
    direction: "horizontal",
    navigation: {
      nextEl: ".Physicsprevbtn",
      prevEl: ".Physicsnextbtn",
    },
  });

  let swiper3 = new Swiper(".swiper3", {
    slidesPerView: getSlidesPerView(),
    direction: "horizontal",
    navigation: {
      nextEl: ".Mathematicsprevbtn",
      prevEl: ".Mathematicsnextbtn",
    },
  });

  function getSlidesPerView() {
    let slideperview = window.innerWidth <= 760 ? 2 : 5;
    return slideperview;
  }

  //   mentor data show
  mData.map((data) => {
    $("#Biology").append(`
                <div class="swiper-slide">
                    <img src=${data.profileimg} class="img-fluid profile-img mb-2" alt="">
                    <div class="mentor-details">
                        <h6>${data.name}</h6>
                        <p>${data.universityname}</p>
                    </div>
                </div>`);
    $("#Physics").append(`
                <div class="swiper-slide">
                    <img src=${data.profileimg} class="img-fluid profile-img mb-2" alt="">
                    <div class="mentor-details">
                        <h6>${data.name}</h6>
                        <p>${data.universityname}</p>
                    </div>
                </div>`);
    $("#Mathematics").append(`
                <div class="swiper-slide">
                    <img src=${data.profileimg} class="img-fluid profile-img mb-2" alt="">
                    <div class="mentor-details">
                        <h6>${data.name}</h6>
                        <p>${data.universityname}</p>
                    </div>
                </div>`);
  });
});
