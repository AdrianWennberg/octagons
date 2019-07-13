let SIZE = 500

let SHAPES = 5
let SHAPE_BOXES = 4

let LINES = SHAPE_BOXES * SHAPES

let BOX_SIZE = SIZE / LINES
let SHAPE_SIZE = BOX_SIZE * SHAPE_BOXES


let OFF = 4
let NEG = BOX_SIZE - OFF
function n() {}

let x = () => {d(); u()}
let l = () => line(OFF, OFF, OFF, NEG)
let r = () => line(NEG, OFF, NEG, NEG)
let t = () => line(OFF, OFF, NEG, OFF)
let b = () => line(OFF, NEG, NEG, NEG)
let d = () => line(OFF, OFF, NEG, NEG)
let u = () => line(OFF, NEG, NEG, OFF)
let s = () => {t(); l(); r(); b();}

let SHAPE = [
                [u, t, d, b],
                [l, s, r, x],
                [d, b, u, t],
                [r, x, l, s]
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
    push()
    for(let  i = 0; i < SHAPE_BOXES; i++) {
        push()
        for (let j = 0; j < SHAPE_BOXES; j++) {
            SHAPE[j][i]()
            translate(0, BOX_SIZE)        
        }
        pop()
        translate(BOX_SIZE, 0)
    }
    pop()
}

