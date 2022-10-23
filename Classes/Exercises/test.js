"use strict";
class Test_User {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === "string") {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
function testRun(distance) {
    if (typeof distance === "number") {
        return 1;
    }
    else {
        return "1";
    }
}
