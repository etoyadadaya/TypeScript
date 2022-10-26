// Classic OOP way

// Common Insurance interface
interface IInsurance {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
}

// TF Insurance class
class TFInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const res = await fetch('tf',
            {
                method: 'POST',
                body: JSON.stringify({ vehicle: this.vehicle })
            });
        const data = await res.json();
        return data.isSuccess;
    }
}

// AB Insurance class
class ABInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const res = await fetch('ab',
            {
                method: 'POST',
                body: JSON.stringify({ vehicle: this.vehicle })
            });
        const data = await res.json();
        return data.yes;
    }
}

// Abstract Factory (Common template)
abstract class InsuranceFactory {
    db: any;

    abstract createInsurance(): IInsurance;

    saveHistory(ins: IInsurance) {
        this.db.save(ins.id, ins.status);
    }
}

// Complete TF Factory
class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): TFInsurance {
        return new TFInsurance();
    }
}

// Complete AB Factory
class ABInsuranceFactory extends InsuranceFactory {
    createInsurance(): ABInsurance {
        return new ABInsurance();
    }
}

// create TF Insurance
const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);




// Popular TypeScript way: *compact alternative*

// Type map
const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance,
};

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlternative {
    db: any;

    createInsurance<T extends keyof IT>(type: T): IT[T] {
        return INSURANCE_TYPE[type];
    }

    saveHistory(ins: IInsurance) {
        this.db.save(ins.id, ins.status);
    }
}

const insuranceFactoryAlt = new InsuranceFactoryAlternative();
const insAlt = new (insuranceFactoryAlt.createInsurance('tf'));
insuranceFactoryAlt.saveHistory(insAlt);
