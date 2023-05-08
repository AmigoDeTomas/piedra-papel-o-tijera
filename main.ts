let tool = 0
let piedra = 0
let papel = 0
let tijera = 0
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (tool))
    tool = randint(0, 2)
    if (tool == 0) {
        radio.sendString("" + (piedra))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (tool == 1) {
        radio.sendString("" + (papel))
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        radio.sendString("" + (tijera))
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    tool = randint(0, 2)
    if (tool == 0) {
        radio.sendString("" + (piedra))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (tool == 1) {
        radio.sendString("" + (papel))
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        radio.sendString("" + (tijera))
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (papel == piedra) {
        basic.pause(2000)
        basic.showString("has perdio")
    }
    if (tijera == papel) {
        basic.pause(2000)
        basic.showString("has perdio")
    }
    if (papel == tijera) {
        basic.pause(2000)
        basic.showString("has ganao")
    }
    if (tijera == piedra) {
        basic.pause(2000)
        basic.showString("has ganao")
    }
    if (piedra == papel) {
        basic.pause(2000)
        basic.showString("has perdio")
    }
    if (piedra == tijera) {
        basic.pause(2000)
        basic.showString("has perdio")
    }
    if (piedra == piedra) {
        basic.pause(2000)
        basic.showString("has empatao")
    }
    if (papel == papel) {
        basic.pause(2000)
        basic.showString("has empatao")
    }
    if (tijera == tijera) {
        basic.pause(2000)
        basic.showString("has empatao")
    }
})
basic.forever(function () {
    radio.setGroup(666)
})
