(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {

      if (support == true) {
         document.querySelector('html').classList.add('webp');
      } else {
         document.querySelector('html').classList.add('no-webp');
      }
   });
})()
document.addEventListener("DOMContentLoaded", () => {
   makeProductsLayout()
})
function makeProductsLayout() {
   const list = document.querySelector('.products-main__list')
   const items = list.querySelectorAll(".products-main__item")
   if (list && items.length) {
      if (items.length % 3 == 2 || items.length % 3 == 0) {
         list.classList.add("col-3")
      }
   }
}