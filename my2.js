const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

const matrix = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
];

function draw() {
    context.fillStyle = 'cornflowerblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(player.matrix, player.pos);
}

const player = {
    pos: {x: 5, y: 5},
    matrix: matrix,
};

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value != 0) {
                context.fillStyle = 'crimson';
                context.fillRect(
                    x + offset.x,
                    y + offset.y,
                    1, 1
                )
            }
        })
    })
}

draw();