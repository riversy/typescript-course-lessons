class User {
    skills: string[] = [];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skills: string | string[]): void {
        if (typeof skills == "string") {
            this.skills.push(skills);
        } else {
            this.skills.push(...skills);
        }
    }
}

const user = new User();

user.addSkill("BE");
user.addSkill(["PM", "SA"]);

console.log(user);
