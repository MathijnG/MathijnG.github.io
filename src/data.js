import MediaanLogo from "./assets/mediaan_logo.jpeg";
import ApacheSpark from "./assets/Apache_Spark_logo.png";
import Cyber from "./assets/cyber.jpg";
import BasWorld from "./assets/basworld.jpg";
import Unlock from "./assets/unlock.png";
import CoolEvents from "./assets/CoolEventsLogo.png";
import OneBlinq from "./assets/oneblinq.png";
import NieuwLerenParkstad from "./assets/logo-NLP.png";
import GrowBotic from "./assets/growbotic.png";
import Webstudio7 from "./assets/logo-webstudio7.png";
import CoolEventsApp from "./assets/coolevents.png";
import Default from "./assets/default.jpg";
import MediaanOcpp from "./assets/ocpp.png";

import {Image} from "@mantine/core";

const data = [
    {
        title: 'Project Management Tool',
        image: Default,
        date: new Date(),
        component:
            <>
                <p>In my free time I am working on a project management tool.</p>
            </>
    },
    {
        title: 'Electric Car Charging - Mediaan',
        image: MediaanLogo,
        date: new Date("January 1, 2023"),
        component:
            <>
                <p>During my internship at Mediaan I worked on a project with electric car chargers. The project was to create a dashboard to manage the chargers that are located by the Mediaan office in Heerlen.</p>
                <p>The application included functionalities such as: reserving a charging station, requesting a session, receiving notifications when the car is full, being able to view sessions as an administrator and the application must also communicate with the chargers themselves.</p>
                <p>To test the application and because there is a possibility that it will not be possible to communicate with the actual chargers, a simulation environment also was created to simulate the chargers. This was done with the OCPP protocol.</p>
                <Image style={{width: "40%", margin: "auto", marginTop: "1rem"}} alt="mediaan-ocpp" src={MediaanOcpp} />
            </>
    },
    {
        title: 'OneBlinq - Stuurmen',
        image: OneBlinq,
        date: new Date("January 1, 2022"),
        component:
            <>
                <p>
                    In the 3rd semester of my education I was assigned to do a project for Stuurmen with a group.
                    Stuurmen is a design company that, among other things, makes Figma plugins.
                    The project was to create a license management system for Figma plugins.
                    For this application we used Reactjs & ASP.NET Core. The customer was also very satisfied with the result.
                </p>
            </>
    },
    {
        title: 'Ticket system - BAS World',
        image: BasWorld,
        date: new Date("June 1, 2021"),
    },
    {
        title: 'Cool Events',
        image: CoolEvents,
        date: new Date("February 1, 2022"),
        component:
            <>
                <p>
                    CoolEvents is a project that I made during my education.
                    CoolEvents is an event listing service that allows users to create and review events.
                    For this application I used ReactJS & Spring Boot.
                </p>
                <Image alt="coolevents-app" src={CoolEventsApp} />
            </>
    },
    {
        title: 'Webstudio 7 projects',
        image: Webstudio7,
        date: new Date("July 1, 2020"),
    },
    {
        title: 'Pentesting medical company',
        image: Cyber,
        date: new Date("July 1, 2022"),
    },
    {
        title: 'Unlock - Serious Game',
        image: Unlock,
        date: new Date("October 1, 2020"),
        component:
            <>
                <p>
                    During my first school year I build a serious game for primary school kids. The idea of the game is to run trough a maze and escape.
                    But to reach the end of the maze the player must solve math problems (For example: 2*7, 4*6, 8*7). You get a math problem every time you want to go trough a door.
                    You also need to find keys and not get caught by the monster...
                </p>
                <p>Play the game online here: <a rel="noreferrer" href="https://simmer.io/@MathijnG/unlock" target="_blank">https://simmer.io/@MathijnG/unlock</a></p>
            </>
    },
    {
        title: 'Growbotic',
        image: GrowBotic,
        date: new Date("January 1, 2021"),
    },
    {
        title: 'TowerDefence - Game & Leaderboard',
        image: Default,
        date: new Date("June 1, 2021"),
    },
    {
        title: 'Distributed Computing Project',
        image: ApacheSpark,
        date: new Date("June 1, 2022"),
        component:
            <>
                <p>During my 4th semester I was sorted into a project group and our task was the following:</p>
                <p>"To speed up processing intensive software we can distribute the work over multiple systems. Our aim for this project is to build an environment that will allow us to submit code to a computing cluster in a way that it is spread out and executed on each individual node in the cluster. The results of the processing can then be collected and reflected to the user. This way the code can be spread out over several servers / nodes in our cluster making the computing process much faster than running the process on a single host."</p>
                <p>Eventually we created a application that allowed us to submit code that would run on multiple nodes with a faster runtime. We used Apache Spark with Hadoop as our cluster framework.</p>
            </>
    },
    {
        title: '3D Terrain Generation in Unity',
        image: Default,
        date: new Date("April 1, 2021"),
    },
    {
        title: '3D Survival Game (Work in progress)',
        image: Default,
        date: new Date("October 1, 2021"),
    },
    {
        title: 'Nieuw Leren Parkstad',
        image: NieuwLerenParkstad,
        date: new Date("July 1, 2019"),
        component:
            <>
                <p>
                    I designed and made a fun Wordpress website. The website is called <a rel="noreferrer" target="_blank" href="https://nieuwlerenparkstad.nl">nieuwlerenparkstad.nl</a>. Nieuw Leren Parkstad organizes educational projects for high school educations.
                </p>
            </>
    },
    {
        title: 'Container vervoer',
        image: Default,
        date: new Date("July 1, 2020")
    },
];

export default data;
