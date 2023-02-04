let cells = document.querySelectorAll('#field td');
let winner = document.querySelector('#winner');
let result = document.querySelector('#text');
let close = document.querySelector('#close');

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
                winner.style.display = 'flex';
                result.textContent = `Победил ${this.textContent}`;
            } else if (i == 9) {
                winner.style.display = 'flex';
                result.textContent = `Ничья!`;
            };
            i++;
        })
    }
}

start(cells);

close.addEventListener('click', function () {
    winner.style.display = 'none';
    for (let cell of cells) {
        cell.textContent = '';
    }
    start(cells);
});

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



/*
cells = [ td1 td2 td3 td4 td5 ]
            comb        comb       comb     comb        comb        comb       comb        comb
combs = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],  [2, 4, 6] ]

// 2 шаг

comb = [3, 4, 5]
cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent &&
            cells[3].textContent != '')
*/