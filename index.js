function parseColor(str) {
  var arr;
  var col = {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  };
  if (str.search('#') === 0) {
    str = str.replace(/#/, '');
    if (str.length === 3) {
      col.r = parseInt(str[0] + str[0], 16);
      col.g = parseInt(str[1] + str[1], 16);
      col.b = parseInt(str[2] + str[2], 16);
    } else if (str.length === 6) {
      col.r = parseInt(str[0] + str[1], 16);
      col.g = parseInt(str[2] + str[3], 16);
      col.b = parseInt(str[4] + str[5], 16);
    } else {
      col.r = parseInt(str[0] + str[1], 16);
      col.g = parseInt(str[2] + str[3], 16);
      col.b = parseInt(str[4] + str[5], 16);
      col.a = parseInt(str[6] + str[7], 16) / 255;
    }
  } else if (str.search('rgb') === 0) {
    str = str.replace(/rgb|a\(|\)|\s+/g, '');
    arr = str.split(',');
    col.r = Number(arr[0]);
    col.g = Number(arr[1]);
    col.b = Number(arr[2]);
    col.a = Number(arr[3]);
  }
  return col;
}

function interpolate(a, b, t) {
  return Math.floor(a + (b - a) * t);
}

function mix(from, to, point) {
  var r, g, b, a;
  var fromCol = parseColor(from);
  var toCol = parseColor(to);
  if (toCol.a === 0) {
    r = fromCol.r;
    g = fromCol.g;
    b = fromCol.b;
  } else {
    r = interpolate(fromCol.r, toCol.r, point);
    g = interpolate(fromCol.g, toCol.g, point);
    b = interpolate(fromCol.b, toCol.b, point);
  }
  a = fromCol.a * toCol.a * (1 - point) === 0 ? toCol.a: fromCol.a * toCol.a * (1 - point);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

module.exports = mix;
