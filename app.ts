const skills: string[] = ["Dev", "DevOps", "Testing"];

for (const skill of skills) {
    console.log(skill);
}

const output = skills
    .filter(skill => skill !== "DevOps")
    .map(skill => skill + "! ")
    .reduce((a, b) => a + b);

console.log(output);
