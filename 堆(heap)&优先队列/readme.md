## 堆(heap)与优先队列

### 二叉树--完全二叉树

思维二叉树

实际存储是数组



### 堆：是一个完全二叉树

连续存储的一个数组

**大顶堆**：父节点大于子节点

​			   最大值：根节点

​			   第二大值：左节点｜右节点

​               第三大值：第二层｜第三层

**小顶堆**：父节点小于子节点



**堆-尾部插入**调整-向上调整（尾部插入元素）

**堆-头部弹出**调整-向下调整（尾部元素补位）

**堆排序**：使用大顶堆

* 将堆顶元素与堆尾元素交换
* 将此操作看做是堆顶元素弹出操作
* 按照头部弹出以后的策略调整堆

弹出堆，不属于堆有效位置，但是存储在数组中



数据结构：定义一种性质，维护这种性质

* 结构定义：定义一种性质
* 结构操作：维护这种性质



**堆-优先队列**：堆是优先队列的实现方式

| 普通队列 | 优先队列                        |
| -------- | ------------------------------- |
| 尾部入队 | 尾部可以插入                    |
| 头部出队 | 头部可以弹出                    |
| 先进先出 | 每次出队权值（最大/最小的元素） |
| 数组实现 | 数组实现，**逻辑上看成一个堆**  |



**模拟堆排序**

``` c++
#define MAX_N 1000
int data[MAX_N+5], cnt = 0;
void shift_up(int ind){
  // 下标从0开始i-1/2得到父节点坐标, 向上调整
  while(ind && data[(ind-1)/2]<data[ind]){
    swap(data[(ind-1)/2], data[ind]);
    ind = (ind-1)/2;
  }
  return;
}
void shift_down(int ind) {
  int n = cnt - 1;
  while(ind*2+1<=n) {
    // temp找最大值索引
    int temp = ind;
    if(data[temp]<data[ind*2+1]) temp = ind*2+1;
    if(ind*2+2<=n && data[temp]<data[ind*2+2]) temp = ind*2+2;
    if(temp==ind) break;
    swap(data[temp], data[ind]);
    ind = temp
  }
  return ;
}

void output(n) {
  printf("heap: ");
  for(int i=0; i<n; i++) {
    printf("%d ", data[i])
  }
  printf('\n');
  return
}

void push(int x) {
  data[cnt++] = x;
  shift_up(cnt-1);
  return;
}

void pop(){
  if(size()==0) return;
  swap(data[0], data[cnt-1])
  cnt -= 1;
  shift_down(0);
  return;
}

int top() {
  return data[0]
}
int size() {
  return cnt;
}

int main(){
  int op, val;
  int max_n = 0;
  while(cin>>op) {
    switch(op) {
      case 0: {
        cin>>val; 
        printf("push %d to heap\n", val); 
        push(val); 
  			output(cnt);
      } break;
      case 1: {
        printf("pop %/d from heap\n", top()); 
        pop(); 
  			output(cnt);
      } break;
      case 2: {
        output(max_n)
      } break;
    }
    max_n = max(cnt, max_n)
  }
  return 0
}
```



``` c++
template<typename T>
class Heap: public vector<T> {
  public: 
  	template<typename T>
  	Heap(Func_T cmp): cmp(cmp){}
  	void push(const T &a) {
      this->push_back(a);
      push_heap(this->begin(), this->end(), cmp);
      return;
    }
  	void pop(){
      pop_head(this->begin(), this->end(), cmp);
      this->pop_back();
      return;
    }
  	T &top() {return this->at(0)}
  private:
  	function<bool(T,T)> cmp;
}

int main() {
  Heap<int> h1{less<int>()}; // 大顶堆
  Heap<int> h2{greater<int>()}; // 小顶堆
  h1.push(3);h1.push(2);h1.push(4);h1.push(1);
  h2.push(3);h2.push(2);h2.push(4);h2.push(1);
  while(h1.size()){
    cout << h1.top() << " ";
    h1.pop();
  }
  while(h2.size()){
    cout << h2.top() << " ";
    h2.pop();
  }
  cout << endl;
  return 0;
}
```



### 一句话理解：堆

堆适合维护：集合最值；