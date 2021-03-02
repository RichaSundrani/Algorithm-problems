/*
Prison Cells After N Days
There are 8 prison cells in a row, and each cell is either occupied or vacant.
Each day, whether the cell is occupied or vacant changes according to the following rules:
If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)
We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.
Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)
*/

var input = [0, 1, 0, 1, 1, 0, 0, 1];

var prisonAfterNDays = function (cells, N) {
    if (1 <= N <= 1000000000) {
        for (let i = 1; i <= N; i++) {
            let results = [];
            for (let j = 0; j < cells.length; j++) {
                if ((cells[j + 1] == 1 && cells[j - 1] == 1) || (cells[j + 1] == 0 && cells[j - 1] == 0)) {
                    results.push(1);
                } else {
                    results.push(0);
                }
            }
            cells = results;
            console.log("Day : " + i + " : " + cells)
        }
        return cells;
    }
};

prisonAfterNDays(input, 7);


/* #####   Solution     #####  */
// var prisonAfterNDays = function (cells, N) {
//     const mapToDay = {};
//     const dayToMap = {};
//     for (let i = 0; i < N; i++) {
//         const key = cells.join("");
//         if (mapToDay[key]) {
//             const remainingDays = N - i;
//             const repeatDay = mapToDay[key];
//             const cycleLength = i - repeatDay;
//             const indexOfCorrectDay = (remainingDays % cycleLength) + repeatDay;
//             cells = dayToMap[indexOfCorrectDay].split("").map(cell => parseInt(cell));
//             break;
//         }
//         mapToDay[key] = i;
//         dayToMap[i] = key;
//         cells = generateNextCell(cells);
//     }
//     return cells;
// };

// function generateNextCell(cells) {
//     const newCells = new Array(cells.length);
//     for (let i = 0; i < cells.length; i++) {
//         newCells[i] = getNextCellState(cells, i);
//     }
//     return newCells;
// }

// function getNextCellState(cells, i) {
//     if (i == 0 || i == cells.length - 1) return 0;
//     return cells[i - 1] == cells[i + 1] ? 1 : 0;
// }