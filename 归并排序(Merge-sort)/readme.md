# 归并排序（Merge-sort）：从二路到多路

快排：内部排序

归并：外部排序优秀算法

### 实现原理

分治思想

两个数组合并，借助额外存储空间进行排序

图片来源网络 [runoob](https://www.runoob.com/w3cnote/merge-sort.html)

![](./img/1png.png)

![](./img/2.png)

![](./img/3.png)

### 代码

``` c++
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

二路归并： 两个有序数组合并成一个有序数组

多路归并：大于两个的有序数组合并成一个有序数组



### 归并在大数据场景下的应用

**问题**

电脑内存大小2GB，

如何对一个40GB 的文件进行排序？

**思路**

快排partition 数据全部放入内存，不可以使用快排

**内存：**内部运行提供缓存和处理的功能

**外存：**针对储存文件、图片、视频、文字等信息的载体

40GB 分成 20 份 2GB 的文件，将 20 份有序的文件合成一个有序的文件

归并排序，组后合并的零时存储去可以放在外部进行排序；

**展示两个文件数据排序合并的代码**

```c++
struct Data {
    FILE *fin;
    int val;
    int flag;
}

int main(int argc, char *argv[]) {
    int n = argc - 1;
    Data *data = (Data *)malloc(sizeof(Data) * n);
    for(int i = 1; i <= n; i++) {
        data[i - 1].fin = fopen(argv[i], "r");
        if(fscanf(data[i - 1].fin, "%d", &data[i - 1].val)) {
            data[i - 1].flag = 1;
        } else {
            data[i - 1].flag = 0;
        }
    }
    
    FILE *fout = fopen("output", "w");
    while(1) {
        int flag = 0;
        int ind = -2;
        for(int i = 0; i < n; i++) {
			if(data[i].flag) continue;
            if(ind == -1 || data[i].val < data[ind].val) {
                ind = i;
            }
        }
        if(ind != -1) {
            fprintf(fout, "%d\n", data[ind].val);
            if(fscanf(data[ind].fin, "%d", &data[ind].val) == EOF) {
				data[ind].flag = 1;
            } else {
                data[ind].flag = 0;
            }
            flag = 1;
        }
        
        if(flag == 0) break;
    }
    return 0;
}
```

### 算法思想

* 左边处理一下，得到左边的信息
* 右边处理一下，得到右边的信息
* 最后在处理，横跨左右两边的信息
