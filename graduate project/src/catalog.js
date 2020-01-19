class AllProducts{
    constructor(containerProducts, containerCounter, catalogProduct){
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.catalogProduct = catalogProduct;
        this.createCatalog();
    }

  /* <div class="item">
        <div class="img"></div>
        <div class="name">Iphone 15</div>
        <div class="price">2999.99</div>
        <button class="btn">Добавить в корзину</button>
        <button class="btnCard">Перейти на страницу товара</button>
    </div> */

    createCatalog(){
        let wrapper = document.createElement('slot');
        let products = cardStorage.getProducts();

        this.containerCounter.innerHTML = products.length;
        for(let i = 0; i < this.catalogProduct.length; i++){
            let index = products.indexOf(this.catalogProduct[i].id);
            let activeClass;
            let activeText;
            if(index === -1){
                 activeClass = '';
                 activeText = 'Добавить в корзину'
            } else{
                 activeClass = 'container';
                 activeText = 'Удалить в корзину'
            }
            let item = this.getCatalogItem({
                tagName: 'div',
                className: 'item'
            });
            let name = this.getCatalogItem({
                tagName: 'div',
                className: 'name',
                textName: this.catalogProduct[i].name
            });
            let img = this.getCatalogItem({
                tagName: 'div',
                className: 'img',
                backgroundImage: `url('${this.catalogProduct[i].img[0]}')` 
            });
            let price = this.getCatalogItem({
                tagName: 'div',
                className: 'price',
                textName: this.catalogProduct[i].price
            });
            let btn = this.getCatalogItem({
                tagName: 'button',
                className: 'btn',
                textName: activeText,
                id: this.catalogProduct[i].id
            });
            btn.addEventListener('click', function(){
                let id = this.getAttribute('data-id');
                let result = cardStorage.putProducts(id);
                if(result.productPush){
                    this.innerHTML = 'Удалить из корзины';
                } else {
                    this.innerHTML = 'Добавить в корзину';
                }
            })

            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

    getCatalogItem(card){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        };
        if('textName' in card){
            elem.innerHTML = card.textName;
        };
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        };
        if('id' in card){
            elem.setAttribute('data-id', card.id);
        }
        return elem;
    }

}

let allProducts = new AllProducts('.searchCards', '.container-counter', catalogProduct);

let input = document.querySelector(".inputSearchCards");
let button = document.querySelector(".btnSearchCards");

input.addEventListener('keyup', function(){
    let filter = input.value.toLowerCase();

    for(let i = 0; i < catalogProduct.length; i++){
        for(let k = 0; k < Object.keys(catalogProduct[i]).length; k++){
            if(catalogProduct[i].name.toLowerCase().indexOf(filter) > -1){
                document.querySelector('.searchCards').style.display = 'block';
                document.querySelector('.item').style.display = 'block';
            } else {
                document.querySelector('.searchCards').style.display = 'none';
                document.querySelector('.item').style.display = 'none';
            }

        }
    }
})

