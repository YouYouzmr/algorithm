/**
 * leetcode: 37. 解数独
 * 
 * 编写一个程序，通过填充空格来解决数独问题。
 * 数独的解法需 遵循如下规则：
 *  1、数字 1-9 在每一行只能出现一次。
 *  2、数字 1-9 在每一列只能出现一次。
 *  3、数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    recursion(board)
};
var recursion = function(board) {
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            if(board[i][j]!==".") continue
            for(let k=1; k<=9; k++) {
                if(isValidateSetNumber({row: i, col: j, char: String(k), board})) {
                    board[i][j] = String(k)
                    if(recursion(board)) return true
                    board[i][j] = '.'
                }
            }
            return false
        }
    }

    return true
}
// setNumber
var isValidateSetNumber = function({row, col, char, board}) {
    // 判断行
    for(let i=0; i<9; i++) {
        if(board[row][i] === char) {
            return false
        }
    }
    // 判断列
    for(let i=0; i<9; i++) {
        if(board[i][col] === char) {
            return false
        }
    }
    // 判断3*3矩阵
    let startRow = Math.floor(row/3) * 3
    let startCol = Math.floor(col/3) * 3
    for(let i=startRow; i<startRow+3; i++) {
        for(let j=startCol; j<startCol+3; j++) {
            if(board[i][j]===char) {
                return false
            }
        }
    }
    return true
}


/**
 *  0  1  2  3  4  5  6  7  8 
 *  9 10 11 12 13 14 15 16 17 
 * 18 19 20 21 22 23 24 25 26
 * 27 28 29 30 31 32 33 34 35
 * 36 37 38 39 40 41 42 43 44
 * 45 46 47 48 49 50 51 52 53
 * 54 55 56 57 58 59 60 61 62 
 * 63 64 65 66 67 68 69 70 71
 * 72 73 74 75 76 77 78 79 80
 */
let board = [["5","3",".",".","7",".",".",".","."],
             ["6",".",".","1","9","5",".",".","."],
             [".","9","8",".",".",".",".","6","."],
             ["8",".",".",".","6",".",".",".","3"],
             ["4",".",".","8",".","3",".",".","1"],
             ["7",".",".",".","2",".",".",".","6"],
             [".","6",".",".",".",".","2","8","."],
             [".",".",".","4","1","9",".",".","5"],
             [".",".",".",".","8",".",".","7","9"]]
solveSudoku(board)
console.log(board)