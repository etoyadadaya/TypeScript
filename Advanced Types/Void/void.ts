function logIdVoid(id: string | number): void {
    console.log(id);
}

const a = logIdVoid(1);

function multiplyVoid(f: number, s?: number) {
    if (!s) return f * f;
}

type voidFunction = () => void;

const f1: voidFunction = () => {

}

const f2: voidFunction = () => {
    return true;
}

const b = f2();

const skillsVoid = ["Dev", "DevOps"];

const userVoid = {
    skillsVoid: [""]
}

skillsVoid.forEach(skill => user.skills.push(skill));
