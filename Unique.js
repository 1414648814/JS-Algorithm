// 普通的判断实现
function unique(arr) {
    var result = [],
        isRepeat = false;
    for (var i = 0; i < arr.length; i++) {
        isRepeat = false;
        for (var j = 0; j < result.length; j++) {
            if (arr[j] == result[j]) {
                isRepeat = true;
                break;
            }
        }
        if (!isRepeat) {
            result.push(arr[i]);
        }
    }
    return result;
}

// hash_table 实现
function unique2(arr) {
    var result = [],
        hash_table = [];
    for (var i = 0, elem; (elem = arr[i] != null); i++) {
        if (!hash_table[elem]) {
            result.push(elem);
            hash_table[elem] = true;
        }
    }
    return result;
}