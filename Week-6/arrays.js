let courses = ["Web Fundamentals", "Programming with Classes", "Data Science", "Jesus Christ Everlasting Gospel"];

console.log(courses[0]);
// console.log(courses[4]);

// don't do dis
let coursesAndGrades = ["WDD131", 3, "ITM220", 2];

let courseAndGPA = {
    course: "WDD131",
    GPA: 4.0
}

console.log(courseAndGPA);
console.log(courseAndGPA.course);

let coursesAndGPA = [
    {
        course: "WDD131",
        GPA: 4.0,
        fweefwee: [
            {
                ugh: "muffin",
                bruh: "hoofMcGoof"
            }
        ]
    },
    {
        course: "boofer",
        GPA: 12.7
    }
]

// console.log(coursesAndGPA[0].fweefwee[1].bruh);

for (let i = 0; i < coursesAndGPA.length; i++)
{
    console.log(coursesAndGPA[i].course);
}

coursesAndGPA.forEach(item => console.log(item.course));

let body = document.querySelector("body");

let dynamicHTML = `
    <div>
        <h1>${coursesAndGPA.course}</h1>
    </div>
`;

coursesAndGPA.forEach(course => {
    let dynamicHTML = `
        <div>
            <h1>${coursesAndGPA.course}</h1>
        </div>
    `;
    body.innerHTML += dynamicHTML;
})