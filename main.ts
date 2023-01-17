input.onButtonPressed(Button.A, function () {
    let strip: neopixel.Strip = null
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    strip.showRainbow(1, 360)
})
basic.forever(function () {
	
})
