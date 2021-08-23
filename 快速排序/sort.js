function sort(arr) {
    if(!Array.isArray(arr)) return;
    quick_sort(arr, 0, arr.length-1)
    return arr;
}

// 递归 & partition
function quick_sort(arr, l, r) {
    if(l >= r) return;
    let x = l, y = r, base = arr[l];
    while(x < y) {
        while(x < y && arr[y] >= base) y--;
        if(x < y) arr[x++] = arr[y];
        while(x < y && arr[x] < base) x++;
        if(x < y) arr[y--] = arr[x];
    }
    
    arr[x] = base;
    quick_sort(arr, l, x - 1);
    quick_sort(arr, x + 1, r);
    return;
}

let arr = [4,3,1,5,2]
sort(arr)
console.log(arr)