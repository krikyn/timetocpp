function random_int(min,max) { //возвращает рандомное число в диапазоне [min,max]
  return Math.floor(Math.random()*(max - min + 1))+min;
}

function random_str(arr_str) { //возвращает рандомно строку из массива строк arr_str
  var i=random_int(0,arr_str.length);
  return arr_str[i];
}