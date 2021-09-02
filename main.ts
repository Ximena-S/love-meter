input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(0, 100))
})
basic.showString("LOVE METER")
basic.forever(function () {
    music.playMelody("G B A G C5 B A B ", 110)
})
