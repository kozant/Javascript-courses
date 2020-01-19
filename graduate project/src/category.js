

class Category{
    constructor(containerProducts, containerCounter, catalogProduct, searchCategory, selectCategory, filter){
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.searchCategory = document.querySelector(searchCategory);
        this.selectCategory = document.querySelector(selectCategory);
        this.catalogProduct = catalogProduct;
        this.filter = document.querySelector(filter);
        this.createCatalog();
    }

    createCatalog(){
        let wrapper = document.createElement('slot');
        let products = cardStorage.getProducts();
        this.searchCategory.addEventListener('click', () => {       // Инициализация определённых фильтров по нажатию на определённую категорию
            if(this.selectCategory.value == 1 ){                    // Сама инициалазция - файл setFilter.js
                this.filter.innerHTML = '';
                createEntityManufacter(this.filter);
                createEntityCountryManufacter(this.filter);
                createEntitySize(this.filter);
                createEntityColor(this.filter);
                createEntityNumberOfStrings(this.filter);
                createEntityPrice(this.filter);
                createEntityFilterBtn(this.filter);
                document.querySelector('.finder').innerHTML =  '<div class="finder"><a href="main.html">Главная</a> / <a href="catalog.html">Каталог товаров</a> / <a>Классические гитары</a></div>';
            }
            if(this.selectCategory.value == 2){
                this.filter.innerHTML = '';
                createEntityManufacter(this.filter);
                createEntityCountryManufacter(this.filter);
                createEntitySize(this.filter);
                createEntityColor(this.filter);
                createEntityNumberOfStrings(this.filter);
                createEntityPrice(this.filter);
                createEntityFilterBtn(this.filter);
                document.querySelector('.finder').innerHTML =  '<div class="finder"><a href="main.html">Главная</a> / <a href="catalog.html">Каталог товаров</a> / <a>Акустические гитары</a></div>';
            }
            if(this.selectCategory.value == 3){
                this.filter.innerHTML = '';
                createEntityManufacter(this.filter);
                createEntityCountryManufacter(this.filter);
                createEntitySize(this.filter);
                createEntityColor(this.filter);
                createEntityNumberOfStrings(this.filter);
                createEntityPrice(this.filter);
                createEntityFilterBtn(this.filter);
                document.querySelector('.finder').innerHTML =  '<div class="finder"><a href="main.html">Главная</a> / <a href="catalog.html">Каталог товаров</a> / <a>Электроакустические гитары</a></div>';
            }
            if(this.selectCategory.value == 4){
                this.filter.innerHTML = '';
                createEntityManufacter(this.filter);
                createEntityCountryManufacter(this.filter);
                createEntitySize(this.filter);
                createEntityColor(this.filter);
                createEntityNumberOfStrings(this.filter);
                createEntityTypeOfPickups(this.filter);
                createEntityPrice(this.filter);
                createEntityFilterBtn(this.filter);
                document.querySelector('.finder').innerHTML =  '<div class="finder"><a href="main.html">Главная</a> / <a href="catalog.html">Каталог товаров</a> / <a> Электрогитары</a></div>';
            }
            if(this.selectCategory.value == 0){
                this.filter.innerHTML = '';
                createEntityManufacter(this.filter);
                createEntityCountryManufacter(this.filter);
                createEntitySize(this.filter);
                createEntityColor(this.filter);
                createEntityNumberOfStrings(this.filter);
                createEntityTypeOfPickups(this.filter);
                createEntityPrice(this.filter);
                createEntityFilterBtn(this.filter);
                document.querySelector('.finder').innerHTML =  '<div class="finder"><a href="main.html">Главная</a> / <a href="catalog.html">Каталог товаров</a></div>';

            }
        })

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
            btn.addEventListener('click', function() {
                let id = this.getAttribute('data-id');
                let result = cardStorage.putProducts(id);
                if(result.productPush){
                    this.innerHTML = 'Удалить из корзины';
                } else {
                    this.innerHTML = 'Добавить в корзину';
                }
            });

            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
            
            this.searchCategory.addEventListener('click', () => {    //фильтр по определённым категориям
                item.remove();
                if(this.selectCategory.value == 1 && this.catalogProduct[i].category == "classic"){
                    item.appendChild(img);
                    item.appendChild(name);
                    item.appendChild(price);
                    item.appendChild(btn);
                    wrapper.appendChild(item);
                }
                if(this.selectCategory.value == 2 && this.catalogProduct[i].category == "acoustic"){
                    item.appendChild(img);
                    item.appendChild(name);
                    item.appendChild(price);
                    item.appendChild(btn);
                    wrapper.appendChild(item);
                }
                if(this.selectCategory.value == 3 && this.catalogProduct[i].category == "electroacoustic"){
                    item.appendChild(img);
                    item.appendChild(name);
                    item.appendChild(price);
                    item.appendChild(btn);
                    wrapper.appendChild(item);
                }
                if(this.selectCategory.value == 4 && this.catalogProduct[i].category == "electric"){
                    item.appendChild(img);
                    item.appendChild(name);
                    item.appendChild(price);
                    item.appendChild(btn);
                    wrapper.appendChild(item);
                }

                if(this.selectCategory.value == 0){
                    item.appendChild(img);
                    item.appendChild(name);
                    item.appendChild(price);
                    item.appendChild(btn);
                    wrapper.appendChild(item);
                }
            })
            this.searchCategory.addEventListener('click', () => {     //фильтр у определённых категорий по определённым кейсам
                document.querySelector('.filterBtn').addEventListener('click', () =>{
                    item.remove();
                    if(this.selectCategory.value == 1 && this.catalogProduct[i].category == "classic"){
                        let arrFlag = [];
                        if(this.catalogProduct[i].manufacter == document.querySelector('.manufacter').value ||
                        document.querySelector('.manufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].country_manufacter == document.querySelector('.countryManufacter').value ||
                        document.querySelector('.countryManufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].size == document.querySelector('.size').value ||
                        document.querySelector('.size').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].color == document.querySelector('.color').value ||
                        document.querySelector('.color').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].number_of_strings == document.querySelector('.numberOfStrings').value ||
                        document.querySelector('.numberOfStrings').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if((this.catalogProduct[i].price >= document.querySelector('.startPrice').value && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (this.catalogProduct[i].price >= document.querySelector('.startPrice').value && document.querySelector('.endPrice').value == '') || 
                        (document.querySelector('.startPrice').value == '' && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (document.querySelector('.startPrice').value == '' && document.querySelector('.endPrice').value == '')){
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(arrFlag[0] == true && 
                           arrFlag[1] == true && 
                           arrFlag[2] == true && 
                           arrFlag[3] == true && 
                           arrFlag[4] == true && 
                           arrFlag[5] == true){
                            item.appendChild(img);
                            item.appendChild(name);
                            item.appendChild(price);
                            item.appendChild(btn);
                            wrapper.appendChild(item);
                        }
                    }
                    if(this.selectCategory.value == 2 && this.catalogProduct[i].category == "acoustic"){
                        let arrFlag = [];
                        if(this.catalogProduct[i].manufacter == document.querySelector('.manufacter').value ||
                        document.querySelector('.manufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].country_manufacter == document.querySelector('.countryManufacter').value ||
                        document.querySelector('.countryManufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].size == document.querySelector('.size').value ||
                        document.querySelector('.size').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].color == document.querySelector('.color').value ||
                        document.querySelector('.color').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].number_of_strings == document.querySelector('.numberOfStrings').value ||
                        document.querySelector('.numberOfStrings').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if((this.catalogProduct[i].price >= document.querySelector('.startPrice').value && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (this.catalogProduct[i].price >= document.querySelector('.startPrice').value && document.querySelector('.endPrice').value == '') || 
                        (document.querySelector('.startPrice').value == '' && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (document.querySelector('.startPrice').value == '' && document.querySelector('.endPrice').value == '')){
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(arrFlag[0] == true && 
                            arrFlag[1] == true && 
                            arrFlag[2] == true && 
                            arrFlag[3] == true && 
                            arrFlag[4] == true && 
                            arrFlag[5] == true){
                             item.appendChild(img);
                             item.appendChild(name);
                             item.appendChild(price);
                             item.appendChild(btn);
                             wrapper.appendChild(item);
                         }
                    }
                    if(this.selectCategory.value == 3 && this.catalogProduct[i].category == "electroacoustic"){
                        let arrFlag = [];
                        if(this.catalogProduct[i].manufacter == document.querySelector('.manufacter').value ||
                        document.querySelector('.manufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].country_manufacter == document.querySelector('.countryManufacter').value ||
                        document.querySelector('.countryManufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].size == document.querySelector('.size').value ||
                        document.querySelector('.size').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].color == document.querySelector('.color').value ||
                        document.querySelector('.color').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].number_of_strings == document.querySelector('.numberOfStrings').value ||
                        document.querySelector('.numberOfStrings').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if((this.catalogProduct[i].price >= document.querySelector('.startPrice').value && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (this.catalogProduct[i].price >= document.querySelector('.startPrice').value && document.querySelector('.endPrice').value == '') || 
                        (document.querySelector('.startPrice').value == '' && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (document.querySelector('.startPrice').value == '' && document.querySelector('.endPrice').value == '')){
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(arrFlag[0] == true && 
                            arrFlag[1] == true && 
                            arrFlag[2] == true && 
                            arrFlag[3] == true && 
                            arrFlag[4] == true && 
                            arrFlag[5] == true){
                             item.appendChild(img);
                             item.appendChild(name);
                             item.appendChild(price);
                             item.appendChild(btn);
                             wrapper.appendChild(item);
                         }
                    }
                    if(this.selectCategory.value == 4 && this.catalogProduct[i].category == "electric"){
                        let arrFlag = [];
                        if(this.catalogProduct[i].manufacter == document.querySelector('.manufacter').value ||
                        document.querySelector('.manufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].country_manufacter == document.querySelector('.countryManufacter').value ||
                        document.querySelector('.countryManufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].size == document.querySelector('.size').value ||
                        document.querySelector('.size').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].color == document.querySelector('.color').value ||
                        document.querySelector('.color').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].number_of_strings == document.querySelector('.numberOfStrings').value ||
                        document.querySelector('.numberOfStrings').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].type_of_pickups == document.querySelector('.typeOfPickups').value ||
                        document.querySelector('.typeOfPickups').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if((this.catalogProduct[i].price >= document.querySelector('.startPrice').value && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (this.catalogProduct[i].price >= document.querySelector('.startPrice').value && document.querySelector('.endPrice').value == '') || 
                        (document.querySelector('.startPrice').value == '' && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (document.querySelector('.startPrice').value == '' && document.querySelector('.endPrice').value == '')){
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(arrFlag[0] == true && 
                            arrFlag[1] == true && 
                            arrFlag[2] == true && 
                            arrFlag[3] == true && 
                            arrFlag[4] == true && 
                            arrFlag[5] == true &&
                            arrFlag[6] == true){
                             item.appendChild(img);
                             item.appendChild(name);
                             item.appendChild(price);
                             item.appendChild(btn);
                             wrapper.appendChild(item);
                         }
                    }
                    if(this.selectCategory.value == 0){
                        let arrFlag = [];
                        if(this.catalogProduct[i].manufacter == document.querySelector('.manufacter').value ||
                        document.querySelector('.manufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].country_manufacter == document.querySelector('.countryManufacter').value ||
                        document.querySelector('.countryManufacter').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].size == document.querySelector('.size').value ||
                        document.querySelector('.size').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].color == document.querySelector('.color').value ||
                        document.querySelector('.color').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].number_of_strings == document.querySelector('.numberOfStrings').value ||
                        document.querySelector('.numberOfStrings').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(this.catalogProduct[i].type_of_pickups == document.querySelector('.typeOfPickups').value ||
                        document.querySelector('.typeOfPickups').value == 0) {
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if((this.catalogProduct[i].price >= document.querySelector('.startPrice').value && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (this.catalogProduct[i].price >= document.querySelector('.startPrice').value && document.querySelector('.endPrice').value == '') || 
                        (document.querySelector('.startPrice').value == '' && this.catalogProduct[i].price <= document.querySelector('.endPrice').value) ||
                        (document.querySelector('.startPrice').value == '' && document.querySelector('.endPrice').value == '')){
                            
                            arrFlag.push(true);
                        } else {
                            arrFlag.push(false);
                        }

                        if(arrFlag[0] == true && 
                            arrFlag[1] == true && 
                            arrFlag[2] == true && 
                            arrFlag[3] == true && 
                            arrFlag[4] == true && 
                            arrFlag[5] == true &&
                            arrFlag[6] == true){
                             item.appendChild(img);
                             item.appendChild(name);
                             item.appendChild(price);
                             item.appendChild(btn);
                             wrapper.appendChild(item);
                         }
                    }
                })
            })
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

let allProducts = new Category('.container-products', '.container-counter', catalogProduct, '.searchCategory', '.selectCategory', '.filter');
