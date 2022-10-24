"use strict";
class VehicleGeneric {
}
function kmToMilesGeneric(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCVGeneric extends VehicleGeneric {
}
const vehicleGeneric = kmToMilesGeneric(new VehicleGeneric());
const lcvGeneric = kmToMilesGeneric(new LCVGeneric());
kmToMilesGeneric({ run: 1 });
function kmToMilesInterface(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
kmToMilesInterface({ run: 1 });
function logID(id) {
    console.log(id);
    return id;
}
function logIDTwo(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
