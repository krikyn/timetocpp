function random_int(min,max) { //���������� ��������� ����� � ��������� [min,max]
  return Math.floor(Math.random()*(max - min + 1))+min;
}

function random_str(arr_str) { //���������� �������� ������ �� ������� ����� arr_str
  var i=random_int(0,arr_str.length);
  return arr_str[i];
}