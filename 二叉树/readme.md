# 二叉树（binary-tree）及经典问题
 * 每个节点度最多为2

 * 度为0的节点比为2的节点多1个

   n个节点树、n-1条边 点数等于边树加一

   度：孩子节点数



**基础遍历方法**

前序遍历：根左右

中序遍历：左根右

后序遍历：左右根

中+前/后 ---> 还原二叉树

``` cpp
// 生成前序和中序遍历结果
typedef struct Node {
  int key;
  struct Node *lchild, *rchild;
} Node;

Node *getNewNode(int key) {
  Node *p = (Node *)malloc(sizeof(Node));
  p->key = key;
  p->lchild = p->rchild = NULL;
  return p
}

Node *random_insert(Node *root, int key) {
  if(root==NULL) return getNewNode(key);
  if(rand()%2){
    root->lchild = random_insert(root->lchild, key);
  } else {
    root->rchild = random_insert(root->rchild, key)
  }
  return root
}

void pre_order(Node *root) {
  if(root==NULL) return;
  printf("%d", root->key);
  pre_order(root->lchild);
  pre_order(root->rchild);
  return;
}

void in_order(Node *root) {
  if(root==NULL) return;
  pre_order(root->lchild);
  printf("%d", root->key);
  pre_order(root->rchild);
  return;
}

int main(int argc, char *argv[]) {
  srand(time(0)) ;
  if(argc !=2) return 0;
  int MAX_N = atoi(argv[1]);
  Node *root = NULL;
  for(int i=1; i<= MAX_N; i++) {
    root = random_insert(root, i)
  }
  pre_order(root); print("\n");
  in_order(root); priint("\n")
}
```

## 完全二叉树

**连续存储空间**

**完全二叉树 **complete binary tree：最后一层右测缺少节点

**完美二叉树** perfect binary tree: 每一层节点都满了

**满二叉树**  full binary tree: 没有不为1的节点

* 编号为i的节点：左孩子编号： 2 * i；右孩子编号为 2 * i +1

  计算式(节省空间) 和 记录式(节省时间)的转换

  时间换空间； 空间换时间

* 可以利用连续空间存储（数组）

​         1

   2           3                     [1, 2, 3, 4, 5, 6]

4    5    6 



## 树形结构的深入理解

树的节点：集合

树的边：关系



设计/理解递归程序

* 数学归纳法 -> 结构归纳法

  K0正确，假设Ki 正确 证明 Ki+1正确

* 赋予递归函数一个明确的意义

* 思考边界条件

* 实现递归过程

```c++
// 递归 - 结构归纳法
int fib(int n) {
  if(n<=2) return n;
  return fib(n-1) + fib(n-2)
}
```

**二叉树前序遍历**

1、函数意义：前序遍历以root为根节点的二叉树

2、边界条件：root为空时不需要遍历

3、递归过程：前序遍历左子树，前序遍历右子树



### 左孩子右兄弟表示节省空间

三叉树转化为二叉树：左孩子右兄弟

指针域(k * n)

浪费边数：k*n-(n-1) = (k-1)n+1       k叉树\n个节点
