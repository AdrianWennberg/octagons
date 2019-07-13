let X_LINES, Y_LINES
let SHAPE_BOXES = 4

let BOX_SIZE = 20


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
                [n, n, l],
            ]
let CENTER = {x: 2, y: 3}

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    X_LINES = windowWidth / BOX_SIZE
    Y_LINES = windowHeight / BOX_SIZE
}

  
function draw() {
    translate(1, 1)
    strokeWeight(2)
    background(220)
    drawGrid()

    strokeWeight(2)

    drawAllShapes()
    noLoop()
}

function drawGrid() {
    for(let i = 0; i <= X_LINES; i++) {
        let pos = i * BOX_SIZE
        line(pos, 0, pos, windowHeight)
    } 

    for(let i = 0; i <= Y_LINES; i++) {
        let pos = i * BOX_SIZE
        line(0, pos, windowWidth, pos)
    } 
}

function drawAllShapes() {
    for(let i = -1; i <= Y_LINES; i+= 1) {
        push()
        translate(i * SHAPE_SIZE, 0)
        for(let j = -1; j <= X_LINES; j+= 1) {
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

