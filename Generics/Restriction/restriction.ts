// <T> restriction with extends *work like interface*
class VehicleGeneric {
    run: number;
}

function kmToMilesGeneric<T extends VehicleGeneric>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

class LCVGeneric extends VehicleGeneric {
    capacity: number;
}

const vehicleGeneric = kmToMilesGeneric(new VehicleGeneric());
const lcvGeneric = kmToMilesGeneric(new LCVGeneric());
kmToMilesGeneric({ run: 1 });


// for interface same logic


interface VehicleInterface {
    run: number;
}

function kmToMilesInterface<T extends VehicleInterface>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

interface LCVGeneric extends VehicleInterface {
    capacity: number;
}

kmToMilesInterface({ run: 1 });


// generic can extend from type or union
function logID<T extends string | number> (id: T): T {
    console.log(id);
    return id;
}


// generic can extend not only one <T>, but and <Y> too
function logIDTwo<T extends string | number, Y> (id: T, additionalData: Y): { id: T, data: Y } {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
