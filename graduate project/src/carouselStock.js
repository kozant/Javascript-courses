// let i = 1;
//     for(let li of carousel.querySelectorAll('li')) {
//       li.style.position = 'relative';
//       li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//       i++;
//     }

let widthStock = 1000; // ширина картинки
let countStock = 1; // видимое количество изображений

let listStock = carouselStock.querySelector('.listStock');
let elemStock = carouselStock.querySelectorAll('.elementStock');

let positionStock = 0; // положение ленты прокрутки

carouselStock.querySelector('.prevStock').onclick = function() {
    // сдвиг влево
    if(positionStock == 0){                                  //крайнее левое положение, сдвигает вправо до последней картинки
        positionStock = -widthStock * (elemStock.length - countStock);
        listStock.style.marginLeft = positionStock + 'px';
    }else {
        positionStock += widthStock * countStock;
        listStock.style.marginLeft = positionStock + 'px';
    }
};

carouselStock.querySelector('.nextStock').onclick = function() {
    // сдвиг вправо
    if(positionStock == -widthStock * (elemStock.length - countStock)){ //крайнее правое положение, сдвигает влево до первой картинки
        positionStock = 0;
        listStock.style.marginLeft = positionStock + 'px';
    }else {
        positionStock -= widthStock * countStock;
        
        listStock.style.marginLeft = positionStock + 'px';
    };
};