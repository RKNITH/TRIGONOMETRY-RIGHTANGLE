function setfocus() {
    document.calcform.x.focus();
}

function calc() {
    x = document.calcform.x.value;
    y = calcfunc(x);
    y = roundresult(y);
    document.calcform.y.value = y
}

function calc_a() {
    x = document.calcform2.x.value;
    y = calcfunc_a(x);
    y = roundresult(y);
    document.calcform2.y.value = y
}

function calc3() {
    x1 = document.calcform.x.value;
    x2 = document.calcform.x2.value;
    y = calcfunc(x1, x2);
    y = roundresult(y);
    document.calcform.y.value = y;
}

function calc4() {
    a = document.calcform.x.value;
    b = document.calcform.x2.value;
    c = document.calcform.x3.value;
    d = b * b - 4 * a * c;
    document.calcform.y0.value = roundresult(d);
    if (d >= 0) {
        document.calcform.y1.value = roundresult((-b + Math.sqrt(d)) / (2 * a));
        document.calcform.y2.value = roundresult((-b - Math.sqrt(d)) / (2 * a));
    } else {
        re = roundresult(-b / (2 * a));
        im = roundresult(Math.sqrt(-d) / (2 * a));
        document.calcform.y1.value = re + ' + i' + im;
        document.calcform.y2.value = re + ' - i' + im;
    }
    b = -b;
    document.calcform.y3.value = '(' + b.toString() + ' \xb1 \u221A(' + d.toString() + ')) / (2\xd7' + a.toString() + ')';
}

function calc5() {
    x = document.calcform.x.value;
    y = calcfunc(x);
    y = roundresult(y);
    if (x > 0) y = '\u00B1' + y;
    document.calcform.y.value = y
}

function calc6() {
    x1 = document.calcform.x.value;
    x2 = document.calcform.x2.value;
    val = x2;
    if (x2 < 0) val = -val;
    y = calcfunc(x1, val);
    y = roundresult(y);
    if (x2 > 0 && (x1 / 2) == Math.round(x1 / 2)) y = '\u00B1' + y;
    if (x2 < 0) {
        if ((x1 / 2) == Math.round(x1 / 2))
            y = 'NaN';
        else
            y = -y;
    }
    document.calcform.y.value = y;
}

function str2num(s) {
    s = s.toString().trim().replace(/(\d)(\s+)(?=\d)/gm, "$1+").replace(/[^-()\d/*+.]/g, '');
    if (s == '') return 0;
    return Function('"use strict";return (' + s + ')')();
}

function roundresult(x) {
    y = parseFloat(x);
    y = roundnum(y, 10);
    return y;
}

function roundnum(x, p) {
    var i;
    var n = parseFloat(x);
    var m = n.toPrecision(p + 1);
    var y = String(m);
    i = y.indexOf('e');
    if (i == -1) i = y.length;
    j = y.indexOf('.');
    if (i > j && j != -1) {
        while (i > 0) {
            if (y.charAt(--i) == '0')
                y = removeAt(y, i);
            else
                break;
        }
        if (y.charAt(i) == '.')
            y = removeAt(y, i);
    }
    return y;
}

function roundnum2(x, p) {
    var i;
    var n = parseFloat(x);
    var m = n.toFixed(p);
    var y = String(m);
    i = y.length;
    j = y.indexOf('.');
    if (i > j && j != -1) {
        while (i > 0) {
            if (y.charAt(--i) == '0')
                y = removeAt(y, i);
            else
                break;
        }
        if (y.charAt(i) == '.')
            y = removeAt(y, i);
    }
    return y;
}

function removeAt(s, i) {
    s = s.substring(0, i) + s.substring(i + 1, s.length);
    return s;
}
var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};
