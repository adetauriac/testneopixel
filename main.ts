input.onButtonPressed(Button.A, function () {
    flag = 0
    InitRain = 1
})
function UpDownLed (nbrange: number) {
    liste_de_textes = [range2, range22, range3, range4, range5]
    index += 0
    for (let index = 0; index <= nbrange; index++) {
        liste_de_textes[index].showColor(neopixel.colors(NeoPixelColors.Red))
    }
}
function InitRainbow () {
    range2.showRainbow(1, 360)
    range22.showRainbow(1, 100)
    range3.showRainbow(1, 360)
    range4.showRainbow(1, 360)
    range5.showRainbow(1, 360)
    InitRain = 0
}
input.onButtonPressed(Button.B, function () {
    flag = 1
    strip.clear()
    strip.show()
})
let index = 0
let liste_de_textes: neopixel.Strip[] = []
let InitRain = 0
let flag = 0
let i = 0
let range5: neopixel.Strip = null
let range4: neopixel.Strip = null
let range3: neopixel.Strip = null
let range22: neopixel.Strip = null
let range2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 160, NeoPixelMode.RGB)
range2 = strip.range(0, 32)
range22 = strip.range(32, 32)
range3 = strip.range(64, 32)
range4 = strip.range(96, 32)
range5 = strip.range(128, 32)
InitRainbow()
i += 0
basic.forever(function () {
    if (flag == 0) {
        if (InitRain == 1) {
            InitRainbow()
        }
        range2.rotate(1)
        range22.rotate(-1)
        range3.rotate(1)
        range4.rotate(-1)
        range5.rotate(1)
        strip.show()
    }
    if (flag == 1) {
        if (input.isGesture(Gesture.TiltRight)) {
            i += 1
            if (i == 5) {
                i = 4
            }
        }
        basic.pause(100)
        if (input.isGesture(Gesture.TiltLeft)) {
            i += -1
            if (i == -1) {
                i = 0
            }
        }
        basic.pause(100)
        UpDownLed(i)
    }
})
