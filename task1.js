const users = [{ name: "Raju", age: 15 }, { name: "Ram", age: 25 }, { name: "Gopal", age: 30 }, { name: "Rahul", age: 30 }]

const groupByAge = users.reduce((p, c) => {
    if (c.age >= 10 && c.age < 20) {
        (p["10-19"] = p["10-20"] || []).push(c)
    } else if (c.age >= 20 && c.age < 30) {
        (p["20-29"] = p["20-29"] || []).push(c)
    } else if (c.age >= 30 && c.age < 40) {
        (p["30-39"] = p["30-39"] || []).push(c)
    }
    return p;
}, {});

console.log(groupByAge)


const isMinor = users.reduce((p, c) => {
    if (c.age < 20) {
        return true
    }
    return false;
}, {});

console.log(isMinor)
