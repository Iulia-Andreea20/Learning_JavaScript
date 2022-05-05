let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "David",
    length: "1 hours",
    level: "Intermediate",
    isFree: true,
    tags: ["html", "css"]
}

// console.log(course["tags"])// === course.tags

let castle = {
    name: "Castle",
    price: 1000000,
    free: true,
    tags: ["castle", "europe", "vacantion"]
}

console.log(castle.name)// === castle["name"]

//--------------------
let person = {
    name: "Iulia-Andreea Grigore",
    age: 20,
    country: "Romania"
}

function logData() {
    console.log(person.name + " is " + person.age + " years olds and lives in " + person.country);
}

logData()