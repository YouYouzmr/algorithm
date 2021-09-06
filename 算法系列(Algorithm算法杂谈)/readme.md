# 算法系列
## 计数排数
只有1、2、3这种数字，如何排序？

统计每个数字出现的次数， 依次从小到大循环

### 应用场景

简单的**单值**排序问题，排序问题中数据的**值域很有限**

如：统计全国年龄的排序



## 基数排序

基数排序 (Radix sort) 是一种非比较性整数排序算法。

**基本思想**

将整数按位数切割成不同的数字，然后按每个位数分别比较。基数排序的方法可以采用LSD或者MSD。

* LSD：先从低位开始进行排序
* MSD：先从高位开始进行排序

**实现逻辑**

如下图（从低位开始）：

* 记录当前位置，0-9 出现的次数
* 从后向前遍历，放入对应位置开辟出的空间
* 重复上述步骤到，到最高位结束

![](.\img\1.png)

**代码实现**

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

**复杂度**

* 时间复杂度：O(k*n)
* 空间复杂度：O(k + N)
* 稳定性：稳定



## 拓扑排序

> Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u v, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.([link](https://www.geeksforgeeks.org/topological-sorting))

即：拓扑排序是用来解决有向无环图中的问题。

![](.\img\5.jpg)

图算法使用广泛

拓扑序不是唯一的

拓扑序需要一个队列，每个节点的入度为0，则入队列

