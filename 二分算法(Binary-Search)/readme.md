# 二分算法

### 二分查找

二分查找属于二分算法，在一个**有序数组**中查找一个值的索引。二分查找算法，是更新查找区间

O(n)

#### 原理

![](\img\1.jpg)

#### 代码

```c++
// 输出每次循环指针位置
void output_binary_process(int *arr, int n, int head, int tail, int mid) {
    int p1, p2, p3, len = 0;
    for (int i = 0; i < n; i++) {
        len += printf("%5d", i);
        if (i == head) p1 = len - 1;
        if (i == tail) p2 = len - 1;
        if (i == mid) p3 = len - 1;
    }
    printf("\n");
    for (int i = 0; i < len; i++) printf("-");
    printf("\n");
    for (int i = 0; i < n; i++) {
        printf("%5d", arr[i]);
    }
    printf("\n");
    for (int i = 0; i < len; i++) {
        if (i == p1 || i == p2 || i == p3) {
            printf("^");
        } else {
            printf(" ");
        }
    }
    printf("\n");
    for (int i = 0; i < len; i++) {
        if (i == p1 || i == p2 || i == p3) {
            printf("|");
        } else {
            printf(" ");
        }
    }
    printf("\n\n");
    return ;
}

// 二分基础查找算法
int binary_search(int *arr, int n, int x) {
    int head = 0, tail = n - 1, mid;
    while (head <= tail) {
        // 存在越界问题
        // mid = (head + tail) >> 1;
        // 修改
        mid = head + (tail - head) >> 1;
        output_binary_process(arr, n, head, tail, mid);
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) head = mid + 1;
        else tail = mid - 1;
    }
    return -1;
}

// 获取随机数
int *getRandData(int n) {
    int *arr = (int *)malloc(sizeof(int) * n);
    arr[0] = rand() % 10;
    for (int i = 1; i < n; i++) {
        arr[i] = arr[i - 1] + rand() % 5 + 1;
    }
    return arr;
}

// 输出
void output(int *arr, int n) {
    int len = 0;
    for (int i = 0; i < n; i++) {
        len += printf("%5d", i);
    }
    printf("\n");
    for (int i = 0; i < len; i++) printf("-");
    printf("\n");
    for (int i = 0; i < n; i++) {
        printf("%5d", arr[i]);
    }
    printf("\n");
    return ;
}

int main() {
    srand(time(0));
    int n, x;
    scanf("%d", &n);
    int *arr = getRandData(n);
    output(arr, n);
    while (~scanf("%d", &x)) {
        printf("arr[%d] = %d\n", 
            binary_search(arr, 10, x),
            x
        );
    }
    return 0;
}
```

``` c++
// for 循环避免边界处理陷入死循环
int binary_search(int *arr, int n, int x) {
    int head = 0, tail = n - 1, mid;
    while (tail - head > 3) {
        // 存在越界问题
        // mid = (head + tail) >> 1;
        // 修改
        mid = head + (tail - head) >> 1;
        output_binary_process(arr, n, head, tail, mid);
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) head = mid + 1;
        else tail = mid - 1;
    }
    // 顺序遍历
    for(int i = head; i <= tail; i++) {
        if(arr[i] == x) return i
    }
    return -1;
}
```



#### 泛型情况

**0 1 模型：**查找第一个为1 的位置

| 0    | 0    | 0    | 0    | 1    | 1    | 1    | 1    | 1    | 1    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |

**1 0 模型：**查找最后一个 1 的位置，可以把1改成0， 0改成1

| 1    | 1    | 1    | 1    | 1    | 0    | 0    | 0    | 0    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |

```c++
// 0 1 模型实现
int binary_search_01(int *arr, int n, int x) {
    int head = 0, tail = n - 1, mid;
    while (head < tail) {
        mid = head + (tail - head) >> 1;
        if (arr[mid] < x) head = mid + 1;
        else tail = mid;
    }
    return head;
}
```



### 二分中的数组含函数关系

f(x) 、arr[x] , 都是映射