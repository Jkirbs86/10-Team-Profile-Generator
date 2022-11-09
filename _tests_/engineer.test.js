const Engineer = require('../library/engineer');

test("Can create a github.", () => {
    const testGithub = "Jared";
    const employeeInstance = new Engineer("Jared", 2, "Jared.Kirby99@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JaredKirby";
    const employeeInstance = new Engineer("Jared", 2, "Jared.Kirby99@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Jared", 2, "Jared.Kirby99@gmail.com", "JaredKirby");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
