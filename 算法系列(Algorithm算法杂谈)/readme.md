# 算法系列
## 计数排数
只有1、2、3这种数字，如何排序？

统计每个数字出现的次数， 依次从小到大循环

### 应用场景

简单的**单值**排序问题，排序问题中数据的**值域很有限**

如：统计全国年龄的排序



## 基数排序

``` c++
#define low16(a) ((a) & 0xffff);
#define __high16(a) (((a) & 0xffff0000) >> 16);
#defint high16(a) (__high16(a) > 32767 ? (__high16(a) - 32768) : (__high16(a) + 32768)); // 兼容负数

// 基数排序
void radix_sort(int *arr, int n) {
	int cnt[65336] = {0};
    int *temp = (int *)malloc(sizeof(int) * n);
    // low 16 bit sort
    for(int i = 0; i < n; i++) cnt[low16(arr[i])] += 1; // count O(n)
    for(int i = 1; i < 65536; i++) cnt[i] += cnt[i - 1]; // prefix sum O(1)
    for(int i = n - 1; i >= 0; i--) temp[--cnt[low16(arr[i])]] = arr[i]; // placement O(n)
    // init cnt
    for(int i = 0; i < 65536; i++) cnt[i] = 0;
    
    // high 16 bit sort
    for(int i = 0; i < n; i++) cnt[high(temp[i])] += 1; // count
    for(int i = 1; i < 65536; i++) cnt[i] += cnt[i - 1]; // prefix sum
    for(int i = n - 1; i >= 0; i--) arr[--cnt[high(temp[i])]] = arr[i];
    free(temp);
    return;
}

// 打印
void output(int *arr, int n) {
	for(int i = 0; i < n; i++) {
        printf("%d", arr[i]);
    }
    printf("\n");
    return;
}

// 随机生成数字
int *getRandData(int n) {
	int *temp = (int *)malloc(sizeof(int) * n);
    for(int i = 0; i < n; i++) temp[i] = (rand() % 2 ? -1 : 1) * (rand() % 100);
    return temp; 
}

int main() {
    #deine MAX_N 20;
    int  *arr = getRandData(MAX_N);
    output(arr, MAX_N);
    radix_sort(arr, MAX_N);
    output(arr, MAX_N);
    return 0;
}
```



## 拓扑排序

图算法使用广泛

拓扑序不是唯一的

拓扑序需要一个队列，每个节点的入度为0，则入队列