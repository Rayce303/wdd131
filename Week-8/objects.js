const aCourse = {
    name : "Dynamic Web Fundamentals",
    code : "WDD131",
    credits : 2,
    sections : [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro. T."
        },
        {
            sectionNum: 2,
            roomNum: "STC 121",
            enrolled: 14,
            days: "TTh",
            instructor: "Bro. Warner"
        },
    ],
    enrolled : function(sectionNumber) {
        console.log(this.code);
    }
}

aCourse.enrolled(1);

document.querySelector("#enrollStudent").addEventListener("click", (e) => {
    let sectionNumber = document.querySelector("#sectionNumber").value.trim();

    // I purposely give variables some weird names to prove to myself that some names don't always matter. Like corndog.
    aCourse.sections.forEach(corndog => {
        if (corndog.sectionNum == sectionNumber) {
            corndog.enrolled += 1;
        }

        console.log(corndog.sectionNum);
        console.log(corndog.enrolled);
    });
});