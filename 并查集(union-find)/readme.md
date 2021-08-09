# 并查集及经典问题

## 连通性问题

### 连通性

 A - B;  B - C;  可以推出 A - C

![](E:\self_project\algorithm\并查集(union-find)\img\1.png)



### Quick-find算法的实现

* 基于**染色**的思想，一开始所有点的颜色不同
* 链接两个点的操作，可以看成将**一种颜色**的点染成另一种颜色
* 如果两个点颜色一样，证明联通，否则不联通
* 这种做法叫做并查集的：【Quick-Find算法】

![](E:\self_project\algorithm\并查集(union-find)\img\2.png)

#### Quick-find代码实现

``` c++
// quick-find 算法
// 关键算法一个是查找；一个是合并
// 查找比合并快
class UnionSet {
public: 
    int *color, n;
    // 初始化
    UnionSet(int n) : n(n) {
        // 点编号：1-n 则使用n+1
        // 如果是：0-(n-1) 则使用n
		color = new int[n+1];
        for(int i=0; i<=n; i++) {
			color[i] = i;
        }
    }
    // 查找：算法复杂度 O(1)
    int find(int x) {
		return color[x]
    }
    // 合并：算法复杂度 O(n)
    void merge(int a, int b) {
        if(color[a]==color[b]) return;
        int cb = color[b]
		for(int i=0; i<=n; i++) {
			if(color[i] == cb) color[i] = color[a]
        }
        return;
    }
}
int main() {
    return 0;
}
```



### Quick-Union算法

树形结构

#### Quick-Union代码

``` c++
// 记录当前节点的父节点
class UnionSet {
public :
    int *boss, n;
    UnionSet(int n): n(n) {
		boss = new int(n+1);
        for(int i=0; i<=n; i++) {
            boss[i] = i;
        }
    }
    // 查找最差O(n)
    int find(int x) {
		if(boss[x] == x) return x;
        return find(boss[x]);
    }
    // 链接集合
    int merge(int a, int b) {
		int fa = find(a);
        int fb = find(b);
        if(fa == fb) return;
        boss[fa] = fb;
        return;
    }
}

init main() {
	return 0;
}
```

#### 总结

* 联通判断：tree-height 树高
* 合并操作：tree-height 树高



![](E:\self_project\algorithm\并查集(union-find)\img\3.png)

 

**问题思考：**

* 极端情况会化成一条链
* 将节点数量多的接到少的树上面
* 将树高深的接到浅的上



**思考：**若改进，是按树高还是节点数合并？

* 前提要有一个评价指标：平均查找次数 = 总查找次数 / n
* a: sa (查找次数) , la(深度查找次数)
* b: sb (查找次数) , lb(深度查找次数)
* a 作为父节点： (la + lb + sb)/(sa + sb) 
* b 作为父节点： (la + lb + sa)/(sa + sb) 



```c++
class UnionSet {
public: 
    //       
    int *fa, *size， n;
    UnionSet(int n): n(n) {
        fa = new int[n+1];
        size = new int[n+1];
        for(int i=0; i<=n; i++) {
			fa[i] = i;
            size[i] = 1;
        }
    }
    
    int find(int x) {
		if(fa[x]==x) return x;
        return find(fa[x]);
    }
    
    void merge(int a, int b) {
        int ra = find(a), rb = find(b);
        if(ra == rb) return;
        if(size[ra] < size[rb]) {
            fa[ra] = rb;
            size[rb] += size[ra];
        }else {
            fa[rb] = ra;
            size[ra] += size[rb];
        }
        
        return;
    }
}
```



