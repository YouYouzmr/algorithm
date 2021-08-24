# 归并排序（Merge-sort）：从二路到多路

快排：内部排序

归并：外部排序优秀算法

### 基本思想

分治

两个数组合并借助额外存储空间进行排序

图片来源网络 [runoob](https://www.runoob.com/w3cnote/merge-sort.html)

![](https://github.com/YouYouzmr/algorithm/blob/master/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F(Merge-sort)/img/1png.png)

![](https://github.com/YouYouzmr/algorithm/blob/master/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F(Merge-sort)/img/2.png)

![](https://github.com/YouYouzmr/algorithm/blob/master/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F(Merge-sort)/img/3.png)

### 代码

``` c
void merge_sort(int *arr, int l, int r) {
    if(l >= r) return;
    let mid = (l + r) >> 1;
    merge_sort(arr, l, mid); // left sort
    merge_sort(arr, mid + 1, r); // right sort
    // 临时存储空间
    int *temp = (int *)malloc(sizeof(int) * (r - l + 1));
    // 归并排序
    int k = 0, p1 = l, p2 = mid + 1;
    while(p1 <= mid || p2 <= r) {
        if((p1 <= mid && arr[p1] < arr[p2]) || (p2 > r)) {
            temp[k++] = arr[p1++];
        } else {
            temp[k++] = arr[p2++];
        }
    }
    
    for(int i = l; i <= r; i++) arr[i] = temp[i - 1];
    free(temp);
    return;
}

int main() {
	return 0;
}
```



