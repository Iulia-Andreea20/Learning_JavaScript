// Arrays - ordered lists of items

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]


let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// *!function length
console.log(featuredPosts.length)

// -------------------------------
let describeMyself = ["Iulia-Andreea", 18, "I like pizza: ", true]

console.log(describeMyself)
// -------------------------------

let cards = [7, 4]
// *!push function
cards.push(6)

console.log(cards)

//-------------------------------
// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)

console.log(messages)

//pop function
messages.pop()

console.log(messages)