// Calling the game 



var input = [[2], [0, 0, 2], [1, 1, 1], [0, 1, 2]];
class TicTacToe {
    constructor(n) {
        this.n = n;
        this.board = [];
        this.initBoard();
    }
    initBoard() {
        for (let i = 0; i < this.n; i++) {
            let temp = [];
            for (let j = 0; j < this.n; j++) {
                temp.push(0);
            }
            this.board.push(temp);
        }
    }
    checkGame(player) {
        let vertical, horizontal;
        let crosslr = true, crossrl = true;
        for (let i = 0; i < this.board.length; i++) {
            vertical = this.board.every((e) => {
                return e[i] === player;
            });
            if (vertical) {
                return player;
            }
            horizontal = this.board[i].every((e) => {
                return e === player;
            });
            if (horizontal) {
                return player;
            }
            crosslr = crosslr && (this.board[i][i] == player);
            crossrl = crossrl && (this.board[i][this.board.length - i - 1] == player);
        }
        if (crosslr || crossrl) {
            return player;
        } else {
            return 0;
        }
    }
    move(x, y, player) {
        this.board[x][y] = player;
        return this.checkGame(player);
    }
}


let output = [null];
let newBoard = new TicTacToe(input[0][0]);
for (let i = 1; i < input.length; i++) {
    let result = newBoard.move(...input[i]);
    output.push(result);
    if (result) {
        break;
    }
}
console.log(output);


// console.log(TicTacToe(input));
