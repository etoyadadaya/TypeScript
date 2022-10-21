const skills: [number, string] = [1, "Dev"]; // two types tuple

const [id, skillName] = skills; // destructive assignment

const arr: readonly [number, string, ...boolean[]] = [1, "DevOps", true, true, false]; // readonly tuple

const someSkills: readonly string[] = ["Dev", "DevOps"]; // readonly string array

const extraSkills: ReadonlyArray<string> = ["Dev", "DevOps"]; // readonly generic
