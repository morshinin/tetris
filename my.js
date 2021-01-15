// Вызвать канвас
const canvas = document.getElementById('tetris');

// Обратиться к контексту
const ctx = canvas.getContext('2d');

ctx.scale(20, 20);

// Создать функцию draw
function draw() {
// Внутри функции draw закрасить черным канвас
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

// Вызвать функцию drawMatrix
    drawMatrix(player.matrix, player.pos);
}

// Создать массив матрицы
const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
];

// Создать функцию drawMatrix
// Она принимает 2 аргумента matrix, offset
function drawMatrix(matrix, offset) {
// Внутри функции matrix пройтись по всем
// строкам матрицы и забрать первым аргументом строку
// вторым значение по оси y
// далее внутри первого цикла пройтись по массиву
// row и забрать первым аргументом value, вторым
// значение по оси x
// если значение не равно нулю
// закрасить контекст красным
// и определить его размеры 1px на 1px
// по оси x равно x плюс offset.x и так же для y
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value != 0) {
                ctx.fillStyle = 'red';
                ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        })
    })
}

// Создать функцию update
function update() {
// Вызвать в ней функцию draw
    draw();
}

// Создать объект player со значениями
// pos в котором значения в виде объекта для
// x и y
// А так же значение для матрицы
const player = {
    pos: {x: 5, y: 5},
    matrix: matrix,
}

// Вызвать функцию update
update();