module.exports = function check(str, bracketsConfig) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) { //цикл по строке
        for (var j = 0; j < bracketsConfig.length; j++) { //цикл по конфигу
            if (bracketsConfig[j][0] == str[i] && bracketsConfig[j][1] == str[i + 1]) {
                str.splice(i, 2);
                i--;
                j = -1;
            }
        }
    }
    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
}
