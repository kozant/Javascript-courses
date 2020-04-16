let arrDate = [
  "April 16, 2020 21:00:00",
  "April 16, 2020 22:00:00",
  "April 16, 2020 23:00:00",
  "April 17, 2020 00:00:00",
  "April 17, 2020 01:00:00",
  "April 17, 2020 02:00:00",
  "April 17, 2020 03:00:00",
  "April 17, 2020 04:00:00",
  "April 17, 2020 05:00:00",
  "April 17, 2020 06:00:00",
  "April 17, 2020 07:00:00",
  "April 17, 2020 08:00:00",
  "April 17, 2020 09:00:00",
  "April 17, 2020 10:00:00",
  "April 17, 2020 11:00:00",
  "April 17, 2020 12:00:00",
  "April 17, 2020 13:00:00",
  "April 17, 2020 14:00:00",
];

for (let i = 0; i < arrDate.length; i++) {
  Timer(arrDate[i], i);
}

function Timer(date, id) {
  let s = new Date(date).getTime() - new Date().getTime();
  s = parseInt(s / 1000);

  let h = parseInt(s / 3600);
  s -= h * 3600;
  let m = parseInt(s / 60);
  s -= m * 60;

  if (new Date(date).getTime() >= new Date().getTime()) {
    if (h > 9 && m > 9 && s > 9) {
      document.querySelector(".timer" + id).innerHTML =
        "До конца акции осталось: " + (h + ":" + m + ":" + s);
    }

    if (h > 9 && m > 9 && s < 9) {
      document.querySelector(".timer" + id).innerHTML =
        "До конца акции осталось: " + (h + ":" + m + ":" + "0" + s);
    }
    if (h > 9 && m < 9 && s > 9) {
      document.querySelector(".timer" + id).innerHTML =
        "До конца акции осталось: " + (h + ":" + "0" + m + ":" + s);
    }
    if (h < 9 && m > 9 && s > 9) {
      document.querySelector(".timer" + id).innerHTML =
        "До конца акции осталось: " + ("0" + h + ":" + m + ":" + s);
    }

    if (h > 9 && m < 9 && s < 9) {
      document.querySelector(".timer" + id).innerHTML =
        "До конца акции осталось: " + (h + ":" + "0" + m + ":" + "0" + s);
    }
    if (h < 9 && m > 9 && s < 9) {
      document.querySelector(".timer" + id).innerHTML =
        "До конца акции осталось: " + ("0" + h + ":" + m + ":" + "0" + s);
    }
    if (h < 9 && m < 9 && s > 9) {
      document.querySelector(".timer" + id).innerHTML =
        "До конца акции осталось: " + ("0" + h + ":" + "0" + m + ":" + s);
    }
    if (h < 9 && m < 9 && s < 9) {
      document.querySelector(".timer" + id).innerHTML =
        "До конца акции осталось: " + ("0" + h + ":" + "0" + m + ":" + "0" + s);
    }
  } else {
    document.querySelector(".timer" + id).innerHTML =
      " Акция закончилась <br /> :(";
  }

  setTimeout("Timer('" + date + "'" + "," + "'" + id + "');", 1000);
}
