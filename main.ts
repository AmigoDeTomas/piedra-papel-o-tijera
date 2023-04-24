let tool = 0
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(randint(0, 3))
})
radio.onReceivedString(function (receivedString) {
    tool = randint(0, 3)
    if (tool == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (tool == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (tool == 2) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            . . # . .
            . . # . .
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
