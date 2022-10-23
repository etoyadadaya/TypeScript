class Test_User {
    skills: string[];

    // method overloading

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === "string") {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
    }
}

// function overloading

function testRun(distance: number): string;
function testRun(distance: string): number;
function testRun(distance: number | string): number | string {
    if (typeof distance === "number") {
        return 1;
    } else {
        return "1";
    }
}
