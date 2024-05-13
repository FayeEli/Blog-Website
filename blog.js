var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  wrapAround: true,
  imagesLoaded: true,
});

var elem = document.querySelector('.slider');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  wrapAround: true,
  imagesLoaded: true,
  prevNextButtons: false,
});

const save = document.querySelector('.save');
const burger = document.querySelector('.burger');
const burger = document.querySelector('.logo a');

save.addEventListener("click", function(){
    this.classlist.toggle("active")
})

burger.addEventListener("click", function(){
    this.classlist.toggle("active");
    logo.classlist.toggle("active");
})