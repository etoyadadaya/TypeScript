"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TFInsurance {
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('tf', {
                method: 'POST',
                body: JSON.stringify({ vehicle: this.vehicle })
            });
            const data = yield res.json();
            return data.isSuccess;
        });
    }
}
class ABInsurance {
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('ab', {
                method: 'POST',
                body: JSON.stringify({ vehicle: this.vehicle })
            });
            const data = yield res.json();
            return data.yes;
        });
    }
}
class InsuranceFactory {
    saveHistory(ins) {
        this.db.save(ins.id, ins.status);
    }
}
class TFInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new TFInsurance();
    }
}
class ABInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new ABInsurance();
    }
}
const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);
const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance,
};
class InsuranceFactoryAlternative {
    createInsurance(type) {
        return INSURANCE_TYPE[type];
    }
    saveHistory(ins) {
        this.db.save(ins.id, ins.status);
    }
}
const insuranceFactoryAlt = new InsuranceFactoryAlternative();
const insAlt = new (insuranceFactoryAlt.createInsurance('tf'));
insuranceFactoryAlt.saveHistory(insAlt);
