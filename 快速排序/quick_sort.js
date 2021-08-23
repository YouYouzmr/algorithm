// 优化版
const threshold = 16;
var getmid = function (a, b, c) {
    if (a > b) [a, b] = [b, a];
    if (a > c) [a, c] = [c, a];
    if (b > c) [b, c] = [c, b];
    return b;
}

function __quick_sort(arr, l, r) {
    while (r - l > threshold) {
        let x = l, y = r, base = getmid(arr[x], arr[(x + y) >> 1], arr[y]);
        do {
            while (arr[x] < base) x++;
            while (arr[y] > base) y--;
            if (x <= y) {
                [arr[x], arr[y]] = [arr[y], arr[x]];
                x++;
                y--;
            }
        } while (x <= y);
        __quick_sort(arr, x, y);
        r = y;
    }
    return;
}

function final_insert_sort(arr, l, r) {
    let ind = l;
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < arr[ind]) ind = i;
        while (ind > l) {
            [arr[ind], arr[ind - 1]] = [arr[ind - 1], arr[ind]];
            ind--;
        }
        for (let i = l + 2; i <= r; i++) {
            let j = i;
            while (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                j--;
            }
        }
    }
}

function quick_sort(arr, l, r) {
    __quick_sort(arr, l, r);
    final_insert_sort(arr, l, r)
}