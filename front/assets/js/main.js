const parentElement = document.getElementsByClassName('products')[0];
const childCount = parentElement.childElementCount;
console.log(childCount); // Выведет количество дочерних элементов
const products_item = document.getElementsByClassName('products-item')


if (childCount == 4) {
   parentElement.style["justify-content"] = "space-between";
   for (let i = 0; i <= 4; i++) {
      // products_item[i].style["width"] = "20%";

   }

}

// let blockCount = $('.products').find('.products-item').length;
// console.log(blockCount)

// if(blockCount == 4) {
//   let cardsArray = $('.products-item').toArray();
//   products.forEach(product => {

//   });
// }


