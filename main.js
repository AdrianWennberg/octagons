let SIZE = 500

let SHAPES = 5
let SHAPE_BOXES = 4

let LINES = SHAPE_BOXES * SHAPES

let BOX_SIZE = SIZE / LINES
let SHAPE_SIZE = BOX_SIZE * SHAPE_BOXES


let OFF = 4
let NEG = BOX_SIZE - OFF
function n() {}

let l = () => line(OFF, OFF, NEG, OFF)
let d = () => line(OFF, NEG, NEG, OFF)
let h = () => {line(OFF, NEG, BOX_SIZE/2, BOX_SIZE/2)
               line(NEG, NEG, BOX_SIZE/2, BOX_SIZE/2)}

let SHAPE = [
                [l, n, n],
                [l, n, h],
                [n, d, l],
                [n, n, l]
            ]
let CENTER = {x: 2, y: 3}

function setup() {
    createCanvas(SIZE + 2, SIZE + 2);
}
  
function draw() {
    translate(1, 1)
    drawGrid()

    strokeWeight(4)

    drawAllShapes()
    noLoop()
}

function drawGrid() {
    background(220)
    strokeWeight(2)
    for(let i = 0; i <= LINES; i++) {
        let pos = i * BOX_SIZE
        line(0, pos, SIZE, pos)
        line(pos, 0, pos, SIZE)
    } 
}

function drawAllShapes() {
    for(let i = -1; i <= SHAPES; i+= 1) {
        push()
        translate(i * SHAPE_SIZE, 0)
        for(let j = -1; j <= SHAPES; j+= 1) {
            push()
            translate(0, j * SHAPE_SIZE)
            drawRotations()
            pop()
        }
        pop()
    }
}

function drawRotations() {
    let xOff = BOX_SIZE * CENTER.x + BOX_SIZE/2
    let yOff = BOX_SIZE * CENTER.y + BOX_SIZE/2
    for (let r = 0; r < 4; r++) {
        drawShape();
        rotateAround(HALF_PI, xOff, yOff);    
    }
}

function drawShape() {
    push();
    for (let i = 0; i < SHAPE[0].length; i++) {
        push();
        for (let j = 0; j < SHAPE.length; j++) {
            SHAPE[j][i]();
            translate(0, BOX_SIZE);
        }
        pop();
        translate(BOX_SIZE, 0);
    }
    pop();
}

function rotateAround(angle, xOff, yOff) {
    translate(xOff, yOff);
    rotate(angle);
    translate(-xOff, -yOff);
}

