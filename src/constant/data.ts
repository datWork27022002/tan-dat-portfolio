import {
    RiHomeLine,
    RiFolderLine,
    RiFileEditLine,
    RiHonourLine,
    RiSendPlaneLine,
    RiFacebookBoxLine,
} from '@remixicon/react';
import { RiLinkedinBoxLine, RiGithubLine, RiInstagramLine, RiTiktokLine } from '@remixicon/react';
import { RemixiconComponentType, RiImage2Line, RiTerminalBoxLine } from '@remixicon/react';

import CV from '../assets/CV.pdf';
import aboutImg from '../assets/about-perfil.png';
import homePrefilImg from '../assets/home-prefil.png';
// img skill
import htmlSkillImg from '../assets/skills-html.svg';
import cssSkillImg from '../assets/skills-css.svg';
import javascriptSkillImg from '../assets/skills-javascript.svg';
import githubSkillImg from '../assets/skills-github.svg';
import figmaSkillImg from '../assets/skills-figma.svg';
import reactSkillImg from '../assets/skills-react.svg';
import sassSkillImg from '../assets/skills-sass.svg';
import tailwindSkillImg from '../assets/skills-tailwind-css.svg';
import typescriptSkillImg from '../assets/skills-typescript.svg';
import nextjsSkillImg from '../assets/skills-next-js.svg';
import cSharpSkillImg from '../assets/skills-CSharp.svg';
import netSkillImg from '../assets/skills-net.svg';
// img project
import projects1Img from '../assets/projects-1.jpg';
import projects2Img from '../assets/projects-2.jpeg';
import projects3Img from '../assets/projects-3.jpg';

type MenuItemType = {
    url: string;
    title: string;
    Icon: RemixiconComponentType;
};

export const headerMenu: MenuItemType[] = [
    { url: '#home', title: 'Home', Icon: RiHomeLine },
    { url: '#projects', title: 'Projects', Icon: RiFolderLine },
    { url: '#services', title: 'Services', Icon: RiFileEditLine },
    { url: '#experience', title: 'Experience', Icon: RiHonourLine },
    { url: '#contact', title: 'Contact', Icon: RiSendPlaneLine },
];

export const aboutDesc = {
    name: 'Tấn Đạt',
    postion: 'Web Deleloper',
    profileDesc:
        'Located in Ho Chi Minh City,Viet Nam, I have several years of experience in web development ,' +
        ' carrying out several successful projects.',
    note: "I doesn't write messages on social networks , send me an email and I'll answer you",
    contactBtn: 'Contact Me',
    img: aboutImg,
};

export const aboutSocialData = [
    {
        url: 'https://www.facebook.com/profile.php?id=100044991774359&locale=vi_VN',
        title: 'Facebook',
        Icon: RiFacebookBoxLine,
    },
    {
        url: 'https://www.linkedin.com/in/%C4%91%E1%BA%A1t-nguy%E1%BB%85n-t%E1%BA%A5n-5577ba2aa/',
        title: 'Linkedin',
        Icon: RiLinkedinBoxLine,
    },
    { url: 'https://github.com/datWork27022002', title: 'Github', Icon: RiGithubLine },
];

export const infoData = {
    name: 'Tấn Đạt',
    desc: 'Passionate about creating websites that delight users the most',
    downloadCVBtn: 'Download CV',
    CV: CV,
    img: aboutImg,
};

export const perfilData = {
    firstName: 'Tấn',
    LastName: 'Đạt',
    projectBtn: 'Projects',
    serviceBtn: 'Services',
    img: homePrefilImg,
};

export const skillData = {
    title: 'Skills',
    note: 'Visit the projects section to see the work done with these web technologies',
    data: [
        { title: 'HTML', image: htmlSkillImg },
        { title: 'CSS', image: cssSkillImg },
        { title: 'Javascript', image: javascriptSkillImg },
        { title: 'Typescript', image: typescriptSkillImg },
        { title: 'Reactjs', image: reactSkillImg },
        { title: 'Nextjs', image: nextjsSkillImg },
        { title: 'SASS', image: sassSkillImg },
        { title: 'Tailwind CSS', image: tailwindSkillImg },
        { title: '.NET Framwork', image: netSkillImg },
        { title: 'Github', image: githubSkillImg },
        { title: 'C#', image: cSharpSkillImg },
        { title: 'Figma', image: figmaSkillImg },
    ],
};

export const projectData = {
    title: 'RECENT PROJECTS',
    data: [
        {
            title: 'Real estate web',
            image: projects1Img,
            desc:
                'It is a system specializing in real estate, providing services for buying, selling and renting real estate ' +
                "nationwide. The website's outstanding features include: Login and Register, Post news, Real estate categories, " +
                'Real estate search, Providing the latest news about real estate and notable projects.',
            skills: [htmlSkillImg, cssSkillImg, javascriptSkillImg, nextjsSkillImg, tailwindSkillImg, sassSkillImg],
            url: 'http://uat.bdschinhchu.com.vn/',
        },
        {
            title: 'Learning English System',
            image: projects2Img,
            desc:
                'This website provides features to support English learning such as Translation, reading news in English,' +
                ' watching videos in English, looking up, reviewing vocabulary, Forum',
            skills: [
                htmlSkillImg,
                cssSkillImg,
                javascriptSkillImg,
                reactSkillImg,
                githubSkillImg,
                figmaSkillImg,
                sassSkillImg,
            ],
            url: 'https://github.com/EngMatesDD/EngMatesDD',
        },
        {
            title: 'My Band',
            image: projects3Img,
            desc: 'This is a band website with a simple interface.',
            skills: [htmlSkillImg, cssSkillImg],
            url: 'https://datwork27022002.github.io/Band/',
        },
    ],
};

export const serviceData = {
    title: 'SERVICE I OFFER',
    data: [
        {
            title: 'Web Front-End development',
            Icon: RiImage2Line,
            desc:
                'With over 2 years of experience in Front-End Web Development, I can create optimized and user-friendly' +
                ' interfaces. I work effectively in a team, ensuring that the product looks beautiful and works smoothly on all devices.',
        },
        {
            title: 'Web Back-End development',
            Icon: RiTerminalBoxLine,
            desc:
                'With 1 year of experience in Back-End development, I have worked with technologies like .NET and SQL server' +
                ' to build efficient systems and APIs.',
        },
    ],
};

export const experienceData = {
    title: 'EXPERIENCE OR WORK',
    data: [
        {
            comapny: 'ZMP',
            time: '01/06/2023 - 01-08-2023',
            position: 'Web devoloper intern',
            desc: 'Support functional testing and interface editing of small modules',
        },
        {
            comapny: 'HYOJUNG SOFTTECH JSC',
            time: '18/04/2024 - 10-04-2025',
            position: 'Web, mobile, and desktop application developers',
            desc: 'Fix sales software errors, create website and mobile application on cms to manage sales data',
        },
    ],
};

export const contactData = {
    title: 'CONTACT ME',
    sendBtn: 'Send Message',
};

export const footerData = {
    name: 'Tấn Đạt',
    coppyRight: 'All Rights Reserved by TanDat',
    navigations: [
        { title: 'Home', url: '#home' },
        { title: 'Projects', url: '#projects' },
        { title: 'Services', url: '#services' },
    ],
    socials: [
        {
            url: 'https://www.facebook.com/profile.php?id=100044991774359&locale=vi_VN',
            title: 'Facebook',
            Icon: RiFacebookBoxLine,
        },
        {
            url: 'https://www.instagram.com/datnguyen5314/',
            title: 'Instagram',
            Icon: RiInstagramLine,
        },
        { url: 'https://www.tiktok.com/@ntdat2702', title: 'Tiktok', Icon: RiTiktokLine },
    ],
};
