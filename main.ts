function Left () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P8, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
    basic.pause(1)
    Stop()
}
function Forward () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P8, 1023)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(data)
})
function Right () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
    basic.pause(1)
    Stop()
}
function Stop () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function Backward () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
}
let data = ""
bluetooth.startUartService()
basic.forever(function () {
    if (data == "f") {
        Forward()
    } else if (data == "b") {
        Backward()
    } else if (data == "r") {
        Right()
    } else if (data == "l") {
        Left()
    } else {
        Stop()
    }
})
