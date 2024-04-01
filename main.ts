input.onButtonPressed(Button.A, function () {
    track = Math.max(1, track - 1)
    makerbit.runMp3Command(Mp3Command.STOP)
})
input.onButtonPressed(Button.B, function () {
    track = Math.min(4, track + 1)
    makerbit.runMp3Command(Mp3Command.STOP)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    makerbit.playMp3TrackFromFolder(track, 1, Mp3Repeat.Forever)
})
let track = 0
makerbit.connectSerialMp3(DigitalPin.P0, DigitalPin.P14)
makerbit.setMp3Volume(30)
track = 1
basic.forever(function () {
    if (track == 1) {
        basic.showIcon(IconNames.Duck)
    }
    if (track == 2) {
        basic.showIcon(IconNames.Snake)
    }
    if (track == 3) {
        basic.showIcon(IconNames.Rabbit)
    }
    if (track == 4) {
        basic.showIcon(IconNames.Heart)
    }
})
