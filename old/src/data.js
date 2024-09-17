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
import InnoBeweegLab from "./assets/innobeweeglab.png";
import ContainerVervoer from "./assets/containervervoer.png";
import TowerDefence from "./assets/TowerDefenceGrid.png";
import Webfusion from "./assets/WebfusionLogo.png.webp"
import Aivooronderwijs from "./assets/aivooronderwijs.png";
import aivo from "./assets/logo with space.png";
import betawerk from "./assets/betawerk.png";

import {Image} from "@mantine/core";

const data = [
    {
        title: 'Webfusion',
        image: Webfusion,
        date: new Date(),
        component:
            <>
                <p>With my company Webfusion, I have completed numerous web design projects, creating custom websites
                    for various clients.</p>
                <p>In addition to web design, I have also carried out several development projects</p>
                <p>Website: <a href="https://web-fusion.nl" target={"_blank"}>web-fusion.nl</a></p>
            </>,
        badges: [
            "Software",
            "Webdesign",
            "Online marketing",
            "AI"
        ]
    },
    {
        title: 'AI voor Onderwijs',
        image: Aivooronderwijs,
        date: new Date(),
        component:
            <>
                <p>For this project, I developed an innovative AI platform specifically designed to provide teachers
                    with safe and user-friendly access to AI tools.</p>
                <p>Additionally, I also built the information website for AI voor Onderwijs and applied various online
                    marketing techniques.</p>
                <p>Website: <a href="https://aivooronderwijs.nl" target={"_blank"}>aivooronderwijs.nl</a></p>
            </>,
        badges: [
            "Software",
            "Webdesign",
            "Online marketing",
            "AI"
        ]
    },
    {
        title: 'AI-VO',
        image: aivo,
        date: new Date(),
        component:
            <>
                <p>At AI-VO, I developed an information website and implemented marketing strategies.</p>
                <p>With AI-VO, I have conducted numerous workshops on AI, providing participants with practical
                    knowledge and tools to use AI in their own field.</p>
                <p>Website: <a href="https://ai-vo.nl" target={"_blank"}>ai-vo.nl</a></p>
            </>,
        badges: [
            "Webdesign",
            "Online marketing",
            "AI"
        ]
    },
    {
        title: 'Betawerk (Gen AI search interface)',
        image: betawerk,
        date: new Date("February 1, 2024"),
        component:
            <>
                <p>During my project at Betawerk I worked on a generative AI search interface. With the AI search interface users can ask direct questions within a search box and get direct generated answers from a knowledge base. Without the need to search their answers and apply several filters to find their answer. An AI search feature would also allow context to be provided within the question and to combine different research documents from the knowledge base.</p>
                <p>In the end I was able to create and test a proof of concept that revealed many insights for all stakeholders involved.</p>
                <p>These insights included many opportunities, such as significantly enhancing the user experience with the new AI search feature. But the feature also showed the challenges and risks with a generative AI search functionality.</p>
            </>,
        badges: [
            "Software",
            "AI"
        ]
    },
    {
        title: 'Gamification survey platform - InnoBeweegLab',
        image: InnoBeweegLab,
        date: new Date("May 1, 2023"),
        component:
            <>
                <p>
                    The stakeholders for this project are the people from InnoBeweegLab and the municipality of Eindhoven.
                    InnoBeweegLab is a research and innovation centre for a range of activities focused on sports, games and exercise.
                </p>
                <p>
                    Their aim and goal is to achieve positive social impact through encouraging an active lifestyle by
                    gathering the wishes and needs of municipalities, housing corporations and schools.
                    To achieve this they wish to have a digital tool to increase the reach of the exercise research among various target groups in a municipality.
                    This way resident would have more input in the (re)development of their neighbourhood.
                </p>
                <p>
                    The project goal is to develop a web application that is able to collect various kinds of user input on different locations within a municipality. The aim is to use the user input in researching the demographics of the target user, possibilities of the environment, and the needs/wishes of the target group and organizations in the area. In turn this would lead to creating more innovative ideas and promising solutions that contribute to a healthy active lifestyle through play and exercise.
                </p>
            </>,
        badges: [
            "Software",
            "School project"
        ]
    },
    {
        title: 'No-code automation tool',
        image: Default,
        date: new Date("May 1, 2023"),
        component:
            <>
                <p>
                    In my 6th semester I created a fun personal project.
                    I created a tool that can automate simple tasks. In the application you can create a workflow.
                    This is a flow of certain actions that can trigger automatically. Actions can be created and reordered within this workflow.
                </p>
                <p>
                    Actions can be simple tasks like sending e-mails, sending standard messages, or modifying files.
                    In a workflow you can also create a conditional statement.
                    This is for example an IF statement that can take different directions based on information given by previous run actions.
                </p>
            </>,
        badges: [
            "Software"
        ]
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
            </>,
        badges: [
            "Software"
        ]
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
            </>,
        badges: [
            "Software",
            "School project"
        ]
    },
    {
        title: 'Ticket system - BAS World',
        image: BasWorld,
        date: new Date("June 1, 2021"),
        component:
            <>
                <p>
                    I made an internal ticket management system for Bas World. Bas World is Europe's largest dealer in second-hand trucks and trailers. We used Laravel for the application.
                </p>
            </>,
        badges: [
            "Software",
            "School project"
        ]
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
            </>,
        badges: [
            "Software",
            "School project"
        ]
    },
    {
        title: 'Webstudio 7 projects',
        image: Webstudio7,
        date: new Date("July 1, 2020"),
        component:
            <>
                <p>
                    During my time at Webstudio 7 I worked on many different Wordpress websites and helped with web-design projects.
                    Some fun projects I worked on are:
                    <ul>
                        <li><a rel="noreferrer" target="_blank" href="https://popontop.nl">popontop.nl</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://toabv.com">toabv.com</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://stichtingfsi.nl">stichtingfsi.nl</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://powerarea.nl">powerarea.nl</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://joyflowers.nl/">joyflowers.nl</a></li>
                        <li><a rel="noreferrer" target="_blank" href="https://bowlo.nl">bowlo.nl</a></li>
                    </ul>
                    And many more
                </p>
            </>,
        badges: [
            "Webdesign"
        ]
    },
    {
        title: 'Pentesting medical company',
        image: Cyber,
        date: new Date("July 1, 2022"),
        component:
            <>
                <p>
                    In my 4th semester (Cyber Security) we are assigned to pentest a medical company.
                    We made a pentest agreement where we would test several parts of the company.
                    We tested the networks, wireless networks, web-applications and did some social engineering like phishing emails and physical location testing.
                </p>
                <p>
                    After the testing we did not find any major vulnerabilities. But we found that the social engineering was very effective.
                    I did learn many interesting techniques to pentest a company.
                </p>
            </>,
        badges: [
            "School project",
            "Cyber security"
        ]
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
            </>,
        badges: [
            "Software",
            "School project"
        ]
    },
    {
        title: 'Growbotic',
        image: GrowBotic,
        date: new Date("January 1, 2021"),
        component:
            <>
                <p>
                    During my first semester we as a group created a seed-planting robot.
                    The idea was that the robot could automatically plant and water tree seeds to make the process of planting trees automatic and faster.
                    The robot can also be controlled with an app to adjust settings. You can connect to the robot via Bluetooth. You can then start and stop the robot and adjust the speed.
                </p>
                <p>
                    At the end of the project we created a good prototype of the robot.
                    My focus was on the app control part of the project and I successfully created an app that could start/stop and speed up the robot remotely via Bluetooth.
                </p>
            </>,
        badges: [
            "Webdesign",
            "School project"
        ]
    },
    {
        title: 'TowerDefence - Game & Leaderboard',
        image: TowerDefence,
        date: new Date("June 1, 2021"),
        component:
            <>
                <p>
                    This project consisted of two parts. A game and a website. The idea was that a user could create an account in the website and use that account in the game.
                    Most of the game data would also be saved within this account and offer unique features like a friend-system and a leaderboard.
                </p>
                <p>
                    The game was a tower defense game.
                    Enemies try to get to a location in the map that you must defend with turrets and walls.
                    In the game I also created an endless level to get high scores working.
                </p>
            </>,
        badges: [
            "Software",
            "School project"
        ]
    },
    {
        title: 'Distributed Computing Project',
        image: ApacheSpark,
        date: new Date("June 1, 2022"),
        component:
            <>
                <p>During my 4th semester (Cyber Security) I was sorted into a project group and our task was the following:</p>
                <p>"To speed up processing intensive software we can distribute the work over multiple systems. Our aim for this project is to build an environment that will allow us to submit code to a computing cluster in a way that it is spread out and executed on each individual node in the cluster. The results of the processing can then be collected and reflected to the user. This way the code can be spread out over several servers / nodes in our cluster making the computing process much faster than running the process on a single host."</p>
                <p>We created an application that allowed us to submit code that would run on multiple nodes with a faster runtime. We used Apache Spark with Hadoop as our cluster framework.</p>
            </>,
        badges: [
            "School project",
            "Software",
            "Cyber security"
        ]
    },
    {
        title: '3D Survival Game',
        image: Default,
        date: new Date("October 1, 2021"),
        component:
            <>
                <p>
                    As a fun project I started creating a 3D survival game in Unity.
                    I worked on the project for about half a year I made good progress.
                    I created an inventory system, player movement, building system, crafting system, and much more.
                </p>
            </>,
        badges: [
            "Software"
        ]
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
            </>,
        badges: [
            "Webdesign"
        ]
    },
    {
        title: 'Container vervoer algorithm challenge',
        image: ContainerVervoer,
        date: new Date("July 1, 2020"),
        component:
            <>
                <p>
                    During my 2nd semester I did a algorithm challenge where the challenge was to generate a container ship.
                    In this challenge there where different types of containers, each with there own rules. For example the valuable containers always needed to have access and the cooled container needed to be in front of the ship.
                    Since I liked Unity I also created a 3D GUI where the container is also visually drawn.
                    <Image style={{marginTop: "1rem"}} src={ContainerVervoer} alt={"container-vervoer-challenge"} />
                </p>
            </>,
        badges: [
            "School project",
            "Software"
        ]
    },
];

export default data;
