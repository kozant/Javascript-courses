let createEntityManufacter = (filter) => {

    let arrName = ["Cort", "LaMancha", "Alhambra", "Yamaha", "Foix", 'Oscar Schmidt', "Fender", "LAG", "Jackson"]

    let select = document.createElement('select');
    select.className = "custom-select manufacter";
    select.setAttribute('id', "inputGroupSelect01");

    let optionSelected = document.createElement('option');
    optionSelected.setAttribute('selected', '');
    optionSelected.setAttribute('value', '0');
    optionSelected.textContent = 'Производитель'
    select.appendChild(optionSelected);

    let option;
    for(let i = 0; i < 9; i++) {
        option = document.createElement('option');
        option.setAttribute('value', arrName[i]);
        option.textContent = arrName[i];
        select.appendChild(option);
    }

    filter.appendChild(select);
}

let createEntityCountryManufacter = (filter) => {

    let arrName = ["Китай", "Индонезия", "Россия", "Украина", "Испания"];
    let arrEngName = ["China", "Indonesia", "Russia", "Ukraine", "Spain"];

    let select = document.createElement('select');
    select.className = "custom-select countryManufacter";
    select.setAttribute('id', "inputGroupSelect01");

    let optionSelected = document.createElement('option');
    optionSelected.setAttribute('selected', '');
    optionSelected.setAttribute('value', '0');
    optionSelected.textContent = 'Страна производитель'
    select.appendChild(optionSelected);

    let option;
    for(let i = 0; i < 5; i++) {
        option = document.createElement('option');
        option.setAttribute('value', arrEngName[i]);
        option.textContent = arrName[i];
        select.appendChild(option);
    }

    filter.appendChild(select);
}

let createEntitySize = (filter) => {

    let arrName = ["4/4", "7/8", "3/4"]

    let select = document.createElement('select');
    select.className = "custom-select size";
    select.setAttribute('id', "inputGroupSelect01");

    let optionSelected = document.createElement('option');
    optionSelected.setAttribute('selected', '');
    optionSelected.setAttribute('value', '0');
    optionSelected.textContent = 'Размер'
    select.appendChild(optionSelected);

    let option;
    for(let i = 0; i < 3; i++) {
        option = document.createElement('option');
        option.setAttribute('value', arrName[i]);
        option.textContent = arrName[i];
        select.appendChild(option);
    }

    filter.appendChild(select);
}

let createEntityColor = (filter) => {

    let arrName = ["Натуральный", "Бежевый", "Чёрный", "Красный", "Белый", "Звёздно-пыльный чёрный"];
    let arrEngName = ["natural", "beige", "black", "red", "white", "Star Dust Black"];

    let select = document.createElement('select');
    select.className = "custom-select color";
    select.setAttribute('id', "inputGroupSelect01");

    let optionSelected = document.createElement('option');
    optionSelected.setAttribute('selected', '');
    optionSelected.setAttribute('value', '0');
    optionSelected.textContent = 'Цвет'
    select.appendChild(optionSelected);

    let option;
    for(let i = 0; i < 6; i++) {
        option = document.createElement('option');
        option.setAttribute('value', arrEngName[i]);
        option.textContent = arrName[i];
        select.appendChild(option);
    }

    filter.appendChild(select);
}

let createEntityNumberOfStrings = (filter) => {

    let arrName = ["6", "7", "8"];

    let select = document.createElement('select');
    select.className = "custom-select numberOfStrings";
    select.setAttribute('id', "inputGroupSelect01");

    let optionSelected = document.createElement('option');
    optionSelected.setAttribute('selected', '');
    optionSelected.setAttribute('value', '0');
    optionSelected.textContent = 'Количество струн'
    select.appendChild(optionSelected);

    let option;
    for(let i = 0; i < 3; i++) {
        option = document.createElement('option');
        option.setAttribute('value', arrName[i]);
        option.textContent = arrName[i];
        select.appendChild(option);
    }

    filter.appendChild(select);
}

let createEntityTypeOfPickups = (filter) => {

    let arrName = ["Активный", "Пассивный"];
    let arrEngName = ["active", "passive"];

    let select = document.createElement('select');
    select.className = "custom-select typeOfPickups";
    select.setAttribute('id', "inputGroupSelect01");

    let optionSelected = document.createElement('option');
    optionSelected.setAttribute('selected', '');
    optionSelected.setAttribute('value', '0');
    optionSelected.textContent = 'Тип звукоснимателей'
    select.appendChild(optionSelected);

    let option;
    for(let i = 0; i < 2; i++) {
        option = document.createElement('option');
        option.setAttribute('value', arrEngName[i]);
        option.textContent = arrName[i];
        select.appendChild(option);
    }

    filter.appendChild(select);
}

let createEntityPrice = (filter) => {

    let input1 = document.createElement('input');
    input1.className = "form-control startPrice";
    input1.setAttribute('type', "text");
    input1.setAttribute('placeholder', "Цена: От");

    let input2 = document.createElement('input');
    input2.className = "form-control endPrice";
    input2.setAttribute('type', "text");
    input2.setAttribute('placeholder', "Цена: До");

    filter.appendChild(input1);
    filter.appendChild(input2);
}

let createEntityFilterBtn = (filter) => {

    let div = document.createElement('div');
    div.className = "input-group-append";

    let button = document.createElement('button');
    button.className = "btn btn-outline-secondary filterBtn";
    button.setAttribute('type', "button");
    button.textContent = 'Искать'
    div.appendChild(button);

    filter.appendChild(div);
}


{/* <input type="text" class="form-control" placeholder="Цена: От">
<input type="text" class="form-control" placeholder="Цена: До"> */}


    // <select class="custom-select" id="inputGroupSelect01">
    //   <option selected>Производитель</option>
    //   <option value="1">Cort</option>
    //   <option value="2">LaMancha</option>
    //   <option value="3">Alhambra</option>
    //   <option value="4">Yamaha</option>
    //   <option value="5">Foix</option>
    //   <option value="6">Oscar Schmidt</option>
    //   <option value="7">Fender</option>
    //   <option value="8">LAG</option>
    //   <option value="9">Jackson</option>
    // </select>
    // <select class="custom-select" id="inputGroupSelect01">
    //   <option selected>Страна производитель</option>
    //   <option value="1">Китай</option>
    //   <option value="2">Индонезия</option>
    //   <option value="3">Россия</option>
    //   <option value="4">Украина</option>
    // </select>
    // <select class="custom-select" id="inputGroupSelect01">
    //   <option selected>Размер</option>
    //   <option value="1">4/4</option>
    //   <option value="2">7/8</option>
    //   <option value="3">3/4</option>
    // </select>
    // <select class="custom-select" id="inputGroupSelect01">
    //   <option selected>Цвет</option>
    //   <option value="1">Натуральный</option>
    //   <option value="2">Бежевый</option>
    //   <option value="3">Чёрный</option>
    //   <option value="4">Красный</option>
    //   <option value="5">Белый</option>
    //   <option value="6">Звёздно-пыльный чёрный</option>
    // </select>
    // <select class="custom-select" id="inputGroupSelect01">
    //   <option selected>Количество струн</option>
    //   <option value="1">6</option>
    //   <option value="2">7</option>
    //   <option value="3">8</option>
    // </select>
    // <select class="custom-select" id="inputGroupSelect01">
    //   <option selected>Тип звукоснимателей</option>
    //   <option value="1">Активный</option>
    //   <option value="2">Пассивный</option>
    // </select>
    // <div class="input-group-append">
    //   <button class="btn btn-outline-secondary filterBtn" type="button">Искать</button>
    // </div> 