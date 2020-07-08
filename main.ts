basic.showLeds(`
    # # # . .
    . . . # .
    . . . # .
    # # # . .
    # . . . .
    `)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    basic.showString("Fitzy")
})
