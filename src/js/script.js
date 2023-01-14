let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

const hamb = document.querySelector("#hamb");
const menu = document.querySelector("#menu");
const cross = document.querySelector("#close");
const noscroll = document.body;

$(hamb).click(function() {
  hamb.classList.toggle("open");
  menu.classList.toggle("active");
  noscroll.classList.toggle("noscroll");

});

$(cross).click(function() {
  hamb.classList.remove("open");
  menu.classList.remove("active");
  noscroll.classList.remove("noscroll");

});