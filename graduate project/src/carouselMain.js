// let i = 1;
//     for(let li of carousel.querySelectorAll('li')) {
//       li.style.position = 'relative';
//       li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//       i++;
//     }

let width = 1000; // ширина картинки
let count = 1; // видимое количество изображений

let list = carouselMain.querySelector('ul');
let listElems = carouselMain.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carouselMain.querySelector('.prevMain').onclick = function() {
    // сдвиг влево
    if(position == 0){                                  //крайнее левое положение, сдвигает вправо до последней картинки
        position = -width * (listElems.length - count);
        list.style.marginLeft = position + 'px';
    }else {
        position += width * count;
        list.style.marginLeft = position + 'px';
    }
};

carouselMain.querySelector('.nextMain').onclick = function() {
    // сдвиг вправо
    if(position == -width * (listElems.length - count)){ //крайнее правое положение, сдвигает влево до первой картинки
        position = 0;
        list.style.marginLeft = position + 'px';
    }else {
        position -= width * count;
        
        list.style.marginLeft = position + 'px';
    };
};
