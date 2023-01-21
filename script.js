let cells = document.querySelectorAll('#field td');
let result = document.querySelector('#winner');

// cells = [ td1 td2 td3 td4 td5 ]

function start(cells) {
    let i = 1;
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            if (i % 2 == 0) {
                this.textContent = '0';
                this.style.color = '#f8ed00';
            } else {
                this.textContent = '✕';
            }
            this.removeEventListener('click', step)
            if (isWinner(cells) === true) {
                result.style.height = '150px';
                result.textContent = `Победил ${this.textContent}`;
            } else if (i == 9) {
                result.style.height = '150px';
                result.textContent = `Ничья!`;
            };
            i++;
        })
    }
}

// i=2
// cell = td1/ td2/ td3 ....
/* td2.addEventListener('click', function step(){
    if (2 % 2 == 0) {
        td2.textContent = '0';
        } else {
        td2.textContent = 'X';
        }
    i=3;
    td2.removeEventListener('click', step) 
    if (isWinner(cells) === true) {
            alert(`Победитель ${td2.textContent}`);
        }
})
*/

function isWinner(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}

start(cells);

/*
cells = [ td1 td2 td3 td4 td5 ]
            comb        comb       comb     comb        comb        comb       comb        comb
combs = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],  [2, 4, 6] ]

// 2 шаг

comb = [3, 4, 5]
cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent &&
            cells[3].textContent != '')
*/