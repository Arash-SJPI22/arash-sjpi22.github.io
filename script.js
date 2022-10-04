const date = new Date();

const kurser = [
    {
        kursNamn: "Introduktion till Webbutveckling",
        kursStart: new Date("2022-09-05"),
        kursSlut: new Date("2022-10-09"),
    },
    {
        kursNamn: "Webbutveckling - HTML & CSS",
        kursStart: new Date("2022-10-10"),
        kursSlut: new Date("2022-11-06"),
    },
    {
        kursNamn: "Webbutveckling - JavaScript",
        kursStart: new Date("2022-11-07"),
        kursSlut: new Date("2022-12-04"),
    },
    {
        kursNamn: "Arbetsmetodik och Agila projektmetoder",
        kursStart: new Date("2022-12-05"),
        kursSlut: new Date("2023-01-08"),
    },
    {
        kursNamn: "Avancerad webbutveckling - JavaScript Backend",
        kursStart: new Date("2023-01-09"),
        kursSlut: new Date("2023-02-12"),
    },
    {
        kursNamn: "Interaktionsdesign och användbarhet",
        kursStart: new Date("2023-02-13"),
        kursSlut: new Date("2023-03-12"),
    },
    {
        kursNamn: "Avancerad webbutveckling - JavaScript Full Stack",
        kursStart: new Date("2023-03-13"),
        kursSlut: new Date("2023-05-21"),
    },
    {
        kursNamn: "Systemutveckling Java",
        kursStart: new Date("2023-08-21"),
        kursSlut: new Date("2023-09-17"),
    },
    {
        kursNamn: "Systemarkitektur",
        kursStart: new Date("2023-09-18"),
        kursSlut: new Date("2023-10-22"),
    },
    {
        kursNamn: "Backendutveckling och systemintegration",
        kursStart: new Date("2023-10-23"),
        kursSlut: new Date("2023-12-31"),
    },
    {
        kursNamn: "LIA",
        kursStart: new Date("2024-02-05"),
        kursSlut: new Date("2024-05-26"),
    },
    {
        kursNamn: "Examensarbete",
        kursStart: new Date("2023-05-22"),
        kursSlut: new Date("2024-06-06"),
    },
];

for (let i=0; i < 12; i++) {
    const courses = document.querySelector("#courses");
    const intro = document.querySelector("#intro");

    const aSS = document.createElement("span");
    const aS = document.createElement("a");
    const liS1 = document.createElement("li");
    const liS2 = document.createElement("li");
    const h3S = document.createElement("h3");
    const h4SP = document.createElement("h4");
    const h4SI = document.createElement("h4");
    const dlS1 = document.createElement("dl");
    const dlS2 = document.createElement("dl");
    let j = i + 1;
    
    intro.appendChild(liS1);
    liS1.appendChild(aS);
    liS1.appendChild(aSS);
    
    courses.appendChild(liS2);
    liS2.appendChild(h3S);
    liS2.appendChild(h4SP);
    liS2.appendChild(dlS1);
    liS2.appendChild(h4SI);
    liS2.appendChild(dlS2);
    if (i + 1 < 10) {
        aS.setAttribute("href", "#kurs0" + j);
        aS.innerText = "0" + j + " " + kurser[i].kursNamn;
        h3S.setAttribute("id", "kurs0" + j);    
        h3S.innerText = "0" + j + " " + kurser[i].kursNamn;
    } else {
        aS.setAttribute("href", "#kurs" + j);
        aS.innerText = j + " " + kurser[i].kursNamn;

        h3S.id = "kurs" + j;    
        h3S.innerText = j + " " + kurser[i].kursNamn;
    };
    h4SP.innerText = "Egna Projekt";
    h4SI.innerText = "Inlämningsuppgifter";

    if ((date >= kurser[i].kursStart) && (date < kurser[i].kursSlut)) {
        aSS.innerText += " Kursen Pågår";
    } else if ((date > kurser[i].kursStart) && (date > kurser[i].kursSlut)) {
        aSS.innerText += " Avslutad Kurs";
    } else if (date < kurser[i].kursStart) {
        aSS.innerText += " Kursen Ej Påbörjad";
    };
};