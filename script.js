document.getElementById('factButton').addEventListener('click', displayRandomFact);

const facts = [
    "The first computer programmer was Ada Lovelace, who wrote an algorithm for Charles Babbage's early mechanical general-purpose computer, the Analytical Engine, in the mid-1800s.",
    "The tradition of writing a 'Hello, World!' program as the first piece of code in a new programming language was popularized by the book 'The C Programming Language' by Brian Kernighan and Dennis Ritchie.",
    "There are hundreds of programming languages, and new ones are being developed every year. Some of the most popular ones include JavaScript, Python, Java, and C#.",
    "The term 'bug' in programming, referring to an error or flaw in software, dates back to a literal bug found in the Harvard Mark II computer by Grace Hopper in 1947.",
    "The open source movement has changed the way software is developed, shared, and improved upon, leading to the development of major projects like Linux, Apache, and Mozilla Firefox.",
    "Software written by Margaret Hamilton and her team from MIT was crucial for the Apollo missions, including the Apollo 11 moon landing.",
    "Kids are learning to code at increasingly younger ages, with some children learning to write basic code as early as 5 or 6 years old.",
    "Coding is not just about writing new software; it's also about automating mundane tasks and developing intelligent systems that can learn from data."
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
}
