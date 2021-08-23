module.exports.calcDistance = function(speed, fuel, fuelEconomy){
    let movableTime = fuel / fuelEconomy;
    return speed * movableTime;
}