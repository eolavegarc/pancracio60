let birak = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.clearDistance(Motors.ALL)
basic.forever(function () {
    birak = parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1))
    if (birak < 22.8707945181) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
