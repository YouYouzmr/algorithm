/**
 * 331. 验证二叉树的前序序列化
 * 根->左->右
 */

/**
 * @param {string} preorder
 * @return {boolean}
 */
/**
 * 思路
 * 3##6##
 * 3## -> #
 */
 var isValidSerialization = function(preorder) {
    let s = []
    for(let i=0,j=0; i<preorder.length; i=j+1) {
        j=i
        while(j<preorder.length && preorder[j]!=',') ++j
        s.push(preorder.slice(i,j))
        let last = s.length-1;
        while(s.length>=3 && s[last]=='#' && s[last-1]=="#" && s[last-2]!="#") {
            s[last-2] = "#"
            s.pop()
            s.pop()

            last = s.length-1
        }

        if(s.length==2 && s[0] =="#" && s[1]=="#") return false
    }

    return s.length==1 && s[0] == '#'
};

var isValidSerialization = function(preorder) {
    // stack 记录当前节点可能有几个节点，初始化一个根节点
    let len = preorder.length; i = 0; stack = [1];
    while(i<len) {
        if(!stack.length) return false;
        if(preorder[i]===",") i++;
        // 空节点，将栈顶数字减1
        else if(preorder[i]==="#") {
            stack[stack.length - 1]--;
            if(stack[stack.length-1]==0) stack.pop();
            i++;
        } 
        // 非空节点校验
        else {
            while(i<len && preorder[i] !== ',') {
                i++;
            }
            // 遇到数字，表示当前节点不为空，将栈顶的数字减一
            stack[stack.length-1]--;
            // 判断栈顶元素是否为0，0-表示这个中间节点的两个节点都找到了
            if(stack[stack.length-1] == 0) {
                stack.pop();
            }
            // 不为空的节点可能有2个子节点
            stack.push(2)
        }
    }
    return !stack.length;
}