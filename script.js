const date = new Date();
// Counters to add a function that creates const = document.createElement("dl/li") to the number of (courses?) ownProjects and assignments in each course.
let ownProjectCount = 0, assignmentCount = 0;

const courses = [
    {
        courseName: "Introduktion till Webbutveckling",
        courseStart: new Date("2022-09-05"),
        courseEnd: new Date("2022-10-09"),
        ownProjects: [
        {   
            descripton: "En lite frågesportssida - HTML/CSS & JS",
            link: "https://arash-sjpi22.github.io/gissning/",
            linkDescription: "Gissning",
            link2: "https://github.com/arash-sjpi22/gissning",
        },
        {
            descripton: "Denna sida - Genererad från en Array - HTML/CSS & JS",
            link: "https://arash-sjpi22.github.io/",
            linkDescription: "Projekt sida",
            link2: "https://github.com/Arash-SJPI22/arash-sjpi22.github.io",
        },],
        assignment:[
        {
            descripton: "Första kodningsuppgiften - HTML/CSS & JS",
            link: "https://arash-sjpi22.github.io/webutv.upp3/",
            linkDescription: "Inlämningsuppgift 3",
            link2: "https://github.com/arash-sjpi22/webutv.upp3/",
        },
        {
            descripton: "En ToDo-lista med minial styling - HTML/CSS & JS",
            link: "https://arash-sjpi22.github.io/todo/",
            linkDescription: "Inlämningsuppgift 4",
            link2: "https://github.com/Arash-SJPI22/todo",
        },
        {
            descripton: "En digital CV - HTML/CSS & JS",
            link: "https://arash-sjpi22.github.io/arash-sjpi22/",
            linkDescription: "Inlämningsuppgift 7",
            link2: "https://github.com/Arash-SJPI22/arash-sjpi22",
        },], 
    },
    {
        courseName: "Webbutveckling - HTML & CSS",
        courseStart: new Date("2022-10-10"),
        courseEnd: new Date("2022-11-06"),
    },
    {
        courseName: "Webbutveckling - JavaScript",
        courseStart: new Date("2022-11-07"),
        courseEnd: new Date("2022-12-04"),
    },
    {
        courseName: "Arbetsmetodik och Agila projektmetoder",
        courseStart: new Date("2022-12-05"),
        courseEnd: new Date("2023-01-08"),
    },
    {
        courseName: "Avancerad webbutveckling - JavaScript Backend",
        courseStart: new Date("2023-01-09"),
        courseEnd: new Date("2023-02-12"),
    },
    {
        courseName: "Interaktionsdesign och användbarhet",
        courseStart: new Date("2023-02-13"),
        courseEnd: new Date("2023-03-12"),
    },
    {
        courseName: "Avancerad webbutveckling - JavaScript Full Stack",
        courseStart: new Date("2023-03-13"),
        courseEnd: new Date("2023-05-21"),
    },
    {
        courseName: "Systemutveckling Java",
        courseStart: new Date("2023-08-21"),
        courseEnd: new Date("2023-09-17"),
    },
    {
        courseName: "Systemarkitektur",
        courseStart: new Date("2023-09-18"),
        courseEnd: new Date("2023-10-22"),
    },
    {
        courseName: "Backendutveckling och systemintegration",
        courseStart: new Date("2023-10-23"),
        courseEnd: new Date("2023-12-31"),
    },
    {
        courseName: "LIA",
        courseStart: new Date("2024-02-05"),
        courseEnd: new Date("2024-05-26"),
    },
    {
        courseName: "Examensarbete",
        courseStart: new Date("2023-05-22"),
        courseEnd: new Date("2024-06-06"),
    },
];

function getCourseDates(t) {
    return courses[t].courseStart.toDateString() + " - " + courses[t].courseEnd.toDateString();
}

for (let i=0; i < 12; i++) {
    const coursesUl = document.querySelector("#coursesUl");
    const intro = document.querySelector("#intro");

    const aSS = document.createElement("span");
    const aS1 = document.createElement("a");
    const aS2 = document.createElement("a");
    const liS1 = document.createElement("li");
    const liS2 = document.createElement("li");
    const h3S1 = document.createElement("h3");
    const h3S2 = document.createElement("span");
    const h4SP = document.createElement("h4");
    const h4SI = document.createElement("h4");
    const dlS1 = document.createElement("dl");
    const dlS2 = document.createElement("dl");
    const ghRepo = "GitHub repo";

    let j = i + 1;

    intro.appendChild(liS1);
    liS1.appendChild(aS1);
    liS1.appendChild(aSS);
    
    coursesUl.appendChild(liS2);
    liS2.appendChild(h3S1);
    liS2.appendChild(h3S2);
    liS2.appendChild(h4SP);
    liS2.appendChild(dlS1);
    liS2.appendChild(h4SI);
    liS2.appendChild(dlS2);

    if (i + 1 < 10) {
        aS1.setAttribute("href", "#kurs0" + j);
        aS1.innerText = "0" + j + " " + courses[i].courseName;

        h3S1.setAttribute("id", "kurs0" + j);    
        h3S1.innerText = "0" + j + " " + courses[i].courseName;
        h3S1.appendChild(h3S2);
        h3S2.setAttribute("class", "dates");
        h3S2.innerText = getCourseDates(i);
        
    } else {
        aS1.setAttribute("href", "#kurs" + j);
        aS1.innerText = j + " " + courses[i].courseName;
        
        h3S1.id = "kurs" + j;    
        h3S1.innerText = j + " " + courses[i].courseName;
        h3S1.appendChild(h3S2);
        h3S2.setAttribute("class", "dates");
        h3S2.innerText = getCourseDates(i);
    };

    h4SP.innerText = "Egna Projekt";
    h4SI.innerText = "Inlämningsuppgifter";

    if ((date >= courses[i].courseStart) && (date < courses[i].courseEnd)) {
        aSS.innerText += " Kursen Pågår";
        liS1.setAttribute("class", "courseOnGoing");
    } else if ((date > courses[i].courseStart) && (date > courses[i].courseEnd)) {
        aSS.innerText += " Avslutad Kurs";
        liS1.setAttribute("class", "courseFinished");
    } else if (date < courses[i].courseStart) {
        aSS.innerText += " Kursen Ej Påbörjad";
        liS1.setAttribute("class", "courseNotStarted");
    };
    
    if ('ownProjects' in courses[i]) {
        for (let y=0; y < courses[i].ownProjects.length; y++){
            const ddS1 = document.createElement("dd");
            const ddS2 = document.createElement("dd");
            const dtS = document.createElement("dt");
            const a_S1 = document.createElement("a");
            const a_S2 = document.createElement("a");

            dlS1.appendChild(dtS);
            dtS.innerText = courses[i].ownProjects[y].descripton;

            dlS1.appendChild(ddS1);
            ddS1.appendChild(a_S1);
            a_S1.setAttribute("href", courses[i].ownProjects[y].link);
            a_S1.setAttribute("target", "_blank");
            a_S1.innerText = courses[i].ownProjects[y].linkDescription;

            dlS1.appendChild(ddS2);
            ddS2.appendChild(a_S2);
            a_S2.setAttribute("href", courses[i].ownProjects[y].link2);
            a_S2.setAttribute("target", "_blank");
            a_S2.innerText = ghRepo;

        };
    }; 
    if ('assignment' in courses[i]) {
        for (let y=0; y < courses[i].assignment.length; y++){
            const ddS1 = document.createElement("dd");
            const ddS2 = document.createElement("dd");
            const dtS = document.createElement("dt");
            const a_S1 = document.createElement("a");
            const a_S2 = document.createElement("a");

            dlS2.appendChild(dtS);
            dtS.innerText = courses[i].assignment[y].descripton;

            dlS2.appendChild(ddS1);
            ddS1.appendChild(a_S1);
            a_S1.setAttribute("href", courses[i].assignment[y].link);
            a_S1.setAttribute("target", "_blank");
            a_S1.innerText = courses[i].assignment[y].linkDescription;

            dlS2.appendChild(ddS2);
            ddS2.appendChild(a_S2);
            a_S2.setAttribute("href", courses[i].assignment[y].link2);
            a_S2.setAttribute("target", "_blank");
            a_S2.innerText = ghRepo;

        };
    };
};