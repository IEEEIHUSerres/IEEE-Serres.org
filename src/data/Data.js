import ourTeam from "../resources/slider/sb.webp";
import programmingTeam from "../resources/slider/programming.webp";
import networkingTeam from "../resources/slider/networks.webp";
import hardwareTeam from "../resources/slider/electronics.webp";
import roboticsTeam from "../resources/slider/robotics.webp";
import socialMediaTeam from "../resources/slider/social.webp";
import ieeeSbAwardImage2020 from "../resources/news/ieee-sb-award-2020.webp";
import summerAcademyEnginneringImage from "../resources/news/3rd-Summer-Engineering-Academy.webp";
import kotsovolosHermesImage from "../resources/news/kotsovolos-hermes.webp";
import ieeeHsyp2019 from "../resources/news/ieee-hsyp-2019.webp";
import tif2019 from "../resources/news/tif-2019.webp";
import ieeeSbAwardImage2019 from "../resources/news/ieee-sb-award-2019.webp";
import ieeeDay2020 from "../resources/events/ieee-day-2020.webp";
import ieeeXtremeCodeTalk2020 from "../resources/events/ieeextreme-code-talk-2020.webp";
import hashCode2020 from "../resources/events/hashcode-2020.webp";
import howILearnedToStopWorryingAboutGps from "../resources/events/How-I-Learned-to-Stop-Worrying-About-GPS.webp";
import Efstathiou from "../resources/officers/Efstathiou.webp";
import Vologiannidis from "../resources/officers/Vologiannidis.webp";
import Kostelidis from "../resources/officers/Kostelidis.webp";
import Salpigkti from "../resources/officers/Salpigkti.webp";
import Stasinou from "../resources/officers/Stasinou.webp";
import Mitsopoulou from "../resources/officers/Mitsopoulou.webp";
import Kokozidis from "../resources/officers/Kokozidis.webp";
import ieeeRegionalExemplaryStudentBranchAward2020 from "../resources/awards/ieee-award-2020.webp";
import hermesBetterLifeChallenge2020 from "../resources/awards/hermes-better-life-challenge-2020.webp";
import ieeeRegionalExemplaryStudentBranchAward2019 from "../resources/awards/ieee-award-2019.webp";
import ieeeIhuThessalonikiLogo from "../resources/partners/ieee-ihu-thessaloniki.webp";
import ieeeUthVolosLogo from "../resources/partners/ieee-uth-volos.webp";
import rasLogo from "../resources/affiliates/ieee-ras.webp";
import ieeeRasLogo from "../resources/affiliates/ieee-ras.webp";
import wieLogo from "../resources/affiliates/ieee-wie.webp";
import ieeeWieLogo from "../resources/affiliates/ieee-wie.webp";
import ieeeLogo from "../resources/affiliates/ieee.webp";
import ihuLogo from "../resources/affiliates/ihu.webp";
import ihuRoboticsLogo from "../resources/affiliates/ihu-robotics.webp";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";

export class Data {
    getIeeeNavBar() {
        return [
            {
                "title": "IEEE",
                "url": "https://www.ieee.org/"
            },
            {
                "title": "IEEE RAS",
                "url": "https://www.ieee-ras.org/"
            },
            {
                "title": "IEEE WIE",
                "url": "https://wie.ieee.org/"
            },
            {
                "title": "IEEE Xplore Digital Library",
                "url": "https://ieeexplore.ieee.org/"
            },
            {
                "title": "IEEE Standards",
                "url": "https://standards.ieee.org/"
            },
            {
                "title": "IEEE Spectrum",
                "url": "https://spectrum.ieee.org/"
            },
            {
                "title": "More Sites",
                "url": "https://www.ieee.org/sitemap.html"
            },
        ]
    }

    getSbNavBar() {
        return [
            {
                "title": "Home",
                "url": "/#"
            },
            {
                "title": "News",
                "url": "/#news"
            },
            {
                "title": "Events",
                "url": "/#events"
            },
            {
                "title": "Officers",
                "url": "/#officers"
            },
            {
                "title": "Awards",
                "url": "/#awards"
            },
            {
                "title": "Partners",
                "url": "/#partners"
            },
            {
                "title": "Units",
                "url": "/#units"
            },
            {
                "title": "About",
                "url": "/#about"
            },
        ]

    }

    getSlides() {
        return [
            {
                image: ourTeam,
                title: "Meet our team"
            },
            {
                image: programmingTeam,
                title: "Programming Team"
            },
            {
                image: networkingTeam,
                title: "Networks and Telecommunications Team"
            },
            {
                image: hardwareTeam,
                title: "Electronics and Hardware Design Team"
            },
            {
                image: roboticsTeam,
                title: "Robotics & Automation Team"
            },
            {
                image: socialMediaTeam,
                title: "Social Media and PR Team"
            },
        ];
    }

    getNews() {
        return [
            {
                "title": "We earn the IEEE Regional Exemplary Student Branch Award 2020",
                "content": "Our branch, alongside with 6 other Greek branches, won the " +
                    "IEEE Exemplary Student Branch Award.",
                "image": ieeeSbAwardImage2020,
                "link": "https://www.facebook.com/IEEEStudents/posts/3629135570478685",
                "buttonTitle": "Official Results"
            },
            {
                "title": "Our branch at the 3rd Summer Engineering Academy in Serres",
                "content": "The Presentation of IEEE Student Branch  IHU Serres at the 3rd Summer Engineering Academy " +
                    "in Serres.",
                "image": summerAcademyEnginneringImage,
                "link": "https://www.youtube.com/watch?v=5o9tYkAzZZE",
                "buttonTitle": "Presentation Video"
            },
            {
                "title": "We earn the 2nd place to the Better Life Challenge innovation contest",
                "content": "Our Joint Team with IEEE UTh SB Volos, HERMES Team won the 2nd place to the " +
                    "Better Life Challenge innovation contest held by Kotsovolos.",
                "image": kotsovolosHermesImage,
                "link": "https://thankstotech.kotsovolos.gr/#trophies",
                "buttonTitle": "Official Results"
            },
            {
                "title": "The 4th IEEE HSYP 2019 - Xanthi",
                "content": "Our branch, alongside with other branches participated in the " +
                    "5th IEEE Hellenic SYP Congress 2019 at Xanthi, " +
                    "organized by Democritus University of Thrace.",
                "image": ieeeHsyp2019,
                "link": "https://hsyp.duth.gr/5th/index.html",
                "buttonTitle": "Official Congress Site"
            },
            {
                "title": "IEEE IHU in … 84th TIF  HELEXPO 2019!",
                "content": "The IEEE Student Branches of the International Hellenic University participated at " +
                    "84th TIF - HELEXPO as exhibitors through the stand of the International Hellenic University.",
                "image": tif2019,
                "link": "https://www.youtube.com/watch?v=LdXAhq310zE",
                "buttonTitle": "Video"
            },
            {
                "title": "We earn the IEEE Regional Exemplary Student Branch Award 2019",
                "content": "Our branches (Thessaloniki and Serres), alongside with 6 other Greek branches, won the " +
                    "IEEE Exemplary Student Branch Award.",
                "image": ieeeSbAwardImage2019,
                "link": "https://region8today.ieeer8.org/volunteer-news/41-exemplary-student-branches-in-region-8/",
                "buttonTitle": "Official Results"
            },
        ].slice(0, 6)
    }

    getEvents() {
        return [
            {
                "title": "IEEE Day 2020",
                "content": "The IEEE Student Branch of the International Hellenic University " +
                    "in the city of Serres celebrates IEEE 2020 Day " +
                    "and the 50th anniversary of the IEEE Greece Section",
                "image": ieeeDay2020,
                "link": "https://forms.gle/urNZnfdvh27uovEq6",
                "buttonTitle": "Register Form",
                "date": "2020-10-11T13:00:00+00:00"
            },
            {
                "title": "IEEEXtreme Code Talks",
                "content": "The Xtreme Code Talks 2020 are organized, for the first time, on the initiative of the " +
                    "IEEE DUTh Student Branch, " +
                    "IEEE IHU Student Branch (Serres) and " +
                    "IEEE UoP Student Branch.",
                "image": ieeeXtremeCodeTalk2020,
                "link": "https://forms.gle/zbeDUiBcfp9prRwT6",
                "buttonTitle": "Register Form",
                "date": "2020-05-08T16:00:00+00:00"
            },
            {
                "title": "HashCode 2020",
                "content": "Hash Code is a team programming competition, organized by Google, for students " +
                    "and professionals around the world.",
                "image": hashCode2020,
                "link": "https://codingcompetitions.withgoogle.com/hashcode",
                "buttonTitle": "Register Form",
                "date": "2020-02-20T17:30:00+00:00"
            },
            {
                "title": "How I Learned to Stop Worrying About GPS",
                "content": "The IEEE VTS/AESS Greece Chapter in collaboration with " +
                    "the IEEE Student Branch of the International University of Greece invites you to " +
                    "Dr. George Schmidt IEEE Fellow",
                "image": howILearnedToStopWorryingAboutGps,
                "link": "https://www.facebook.com/events/769616456784864",
                "buttonTitle": "Facebook Event",
                "date": "2019-09-21T15:00:00+00:00"
            },
        ].slice(0, 3)
    }

    getOfficers() {
        return [
            {
                "name": "Dr. Dimitrios Efstathiou",
                "roles": [
                    {
                        "role": "Counselor",
                        "ou": "Student Branch",
                    },
                    {
                        "role": "Counselor",
                        "ou": "WIE Affinity Group",
                    },
                    {
                        "role": "Counselor",
                        "ou": "RAS Chapter",
                    },
                ],
                "image": Efstathiou
            },
            {
                "name": "Dr. Stavros Vologiannidis",
                "roles": [
                    {
                        "role": "Advisor",
                        "ou": "RAS Chapter",
                    },
                ],
                "image": Vologiannidis
            },
            {
                "name": "Iordanis Kostelidis",
                "roles": [
                    {
                        "role": "Chair",
                        "ou": "Student Branch",
                    }
                ],
                "image": Kostelidis
            },
            {
                "name": "Alexandra Salpigkti",
                "roles": [
                    {
                        "role": "Vice-Chair",
                        "ou": "Student Branch",
                    }
                ],
                "image": Salpigkti
            },
            {
                "name": "Myrsini Stasinou",
                "roles": [
                    {
                        "role": "Secretary/Treasurer",
                        "ou": "Student Branch",
                    },
                    {
                        "role": "Chair",
                        "ou": "WIE Affinity Group",
                    },
                ],
                "image": Stasinou
            },
            {
                "name": "Aikaterini Mitsopoulou",
                "roles": [
                    {
                        "role": "Publicity Committee Chair",
                        "ou": "Student Branch",
                    }
                ],
                "image": Mitsopoulou
            },
            {
                "name": "Pavlos Kokozidis",
                "roles": [
                    {
                        "role": "Mentor",
                        "ou": "Student Branch",
                    },
                    {
                        "role": "Chair",
                        "ou": "RAS Chapter",
                    },
                ],
                "image": Kokozidis
            },
        ]
    }

    getAwards() {
        return [
            {
                "title": "IEEE Exemplary 2020",
                "image": ieeeRegionalExemplaryStudentBranchAward2020,
                "content": "The purpose of IEEE Regional Exemplary Student Branch Award is to provide public " +
                    "recognition of exemplary IEEE Student Branch operations.",
            },
            {
                "title": "2nd Place - Better Life Challenge",
                "image": hermesBetterLifeChallenge2020,
                "content": "The ambition of the Better Life Challenge was to mobilize technology " +
                    "enthusiasts to create a better life through their work for people with disabilities.",
            },
            {
                "title": "IEEE Exemplary 2019",
                "image": ieeeRegionalExemplaryStudentBranchAward2019,
                "content": "The purpose of IEEE Regional Exemplary Student Branch Award is to provide public " +
                    "recognition of exemplary IEEE Student Branch operations.",
            },
        ].slice(0, 3)
    }

    getPartners() {
        return [
            {
                "name": "IEEE IHU Thessaloniki",
                "image": ieeeIhuThessalonikiLogo,
                "url": "https://www.facebook.com/ieee.ihuthess/"
            },
            {
                "name": "IEEE UTh Volos",
                "image": ieeeUthVolosLogo,
                "url": "https://ieee.e-ce.uth.gr/"
            }
        ]
    }

    getUnits() {
        return [
            {
                "name": "RAS",
                "desc": "The IEEE Robotics and Automation Society’s objectives are scientific, literary and " +
                    "educational in character. The Society strives for the advancement of the theory and practice " +
                    "of robotics and automation engineering and science and of the allied arts and sciences, " +
                    "and for the maintenance of high professional standards among its members, all in consonance " +
                    "with the Constitution and Bylaws of the IEEE and with special attention to such aims within " +
                    "the Field of Interest of the Society.",
                "logo": rasLogo,
                "url": "https://ieee-ras.org",
                "id": "units/ras",
            },
            {
                "name": "WIE",
                "desc": "The IEEE Women in Engineering (WIE) is a global network of IEEE members " +
                    "and volunteers dedicated to promoting women engineers and scientists," +
                    " and inspiring girls around the world to follow their academic interests in a " +
                    "career in engineering and science. " +
                    "IEEE is the world’s largest technical professional organization dedicated to advancing " +
                    "technology for the benefit of humanity.",
                "logo": wieLogo,
                "url": "https://wie.ieee.org",
                "id": "units/wie"
            },
        ]
    }

    getAffiliates() {
        return [
            {
                "title": "IEEE",
                "url": "https://ieee.org",
                "logo": ieeeLogo
            },
            {
                "title": "IEEE WIE",
                "url": "https://wie.ieee.org",
                "logo": ieeeWieLogo
            },
            {
                "title": "IEEE RAS",
                "url": "https://ieee-ras.org",
                "logo": ieeeRasLogo
            },
            {
                "title": "IHU",
                "url": "https://ihu.gr",
                "logo": ihuLogo
            },
            {
                "title": "IHU MSc Robotics",
                "url": "http://robotics.ihu.gr",
                "logo": ihuRoboticsLogo
            },
        ]
    }

    getSbFooterNavBar() {
        return [
            {
                "title": "Home",
                "url": "#"
            },
            {
                "title": "IEEE",
                "url": "https://ieee.org/"
            },
            {
                "title": "IEEE Greece Section",
                "url": "https://ieee.gr/"
            },
            {
                "title": "IEEE RAS",
                "url": "https://ieee-ras.org/"
            },
            {
                "title": "IEEE WIE",
                "url": "https://wie.ieee.org/"
            },
            {
                "title": "IHU",
                "url": "https://ihu.gr/"
            },
            {
                "title": "ICT IHU",
                "url": "http://ict.ihu.gr/"
            },
            {
                "title": "ICT MSc Robotics",
                "url": "http://robotics.ihu.gr/"
            },
        ]
    }

    getSbSocial() {
        return [
            {
                "icon": faFacebook,
                "url": "https://facebook.com/ieee.ihuserres"
            },
            {
                "icon": faInstagram,
                "url": "https://instagram.com/ieee.ihuserres"
            },
            {
                "icon": faLinkedin,
                "url": "https://linkedin.com/company/ieee-ihuserres"
            },
            {
                "icon": faGithub,
                "url": "https://github.com/ieeeihuserres"
            },
            {
                "icon": faYoutube,
                "url": "https://www.youtube.com/channel/UCL5HBLikQJIAoKiyew8qx9Q"
            },
        ]
    }
}
