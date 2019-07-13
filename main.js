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
let h = () => line(OFF, NEG, BOX_SIZE/2, BOX_SIZE/2)

let SHAPE = [
                [l, n, n],
                [l, n, h],
                [n, d, l],
                [n, n, l]
            ]

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
    push()
    for(let i = 0; i < LINES; i+= SHAPE_BOXES) {
        push()
        for(let j = 0; j < LINES; j+= SHAPE_BOXES) {
            drawShape()
            translate(0, SHAPE_SIZE)
        }
        pop()
        translate(SHAPE_SIZE, 0)
    }
    pop()
}

function drawShape() {
    for (let r = 0; r < 4; r++) {
        push()
        for(let  i = 0; i < SHAPE[0].length; i++) {
            push()
            for (let j = 0; j < SHAPE.length; j++) {
                SHAPE[j][i]()
                translate(0, BOX_SIZE)        
            }
            pop()
            translate(BOX_SIZE, 0)
        }
        pop()
        translate(BOX_SIZE/2, BOX_SIZE/2)   
        rotate(HALF_PI)
        translate(-BOX_SIZE/2, -BOX_SIZE/2)   
    }
}

