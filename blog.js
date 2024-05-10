var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  wrapAround: true,
  imagesLoaded: true,
});

const save = document.querySelector('.save');

save.addEventListener("click", function(){
    this.classlist.toggle("active")
})