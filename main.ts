let tool = 0
let piedra = 0
let papel = 0
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
        let tijera = 0
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
    if (piedra) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (papel) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
basic.forever(function () {
    radio.setGroup(666)
})
