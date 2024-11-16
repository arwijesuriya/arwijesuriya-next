import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDev, FaHackerrank, FaMedium } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const mySocials = [
    { icon: <FaGithub/>, path: "https://github.com/arwijesuriya" },
    { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/arwijesuriya/" },
    { icon: <FaFacebook/>, path: "https://www.facebook.com/arwijesuriya.me/" },
    { icon: <FaInstagram/>, path: "https://www.instagram.com/arwijesuriya.me/" },
    { icon: <FaDev/>, path: "https://dev.to/arwijesuriya" },
    { icon: <FaSquareXTwitter/>, path: "https://x.com/arwijesuriya" },
    { icon: <FaHackerrank/>, path: "https://www.hackerrank.com/profile/arwijesuriya" },
    { icon: <FaMedium/>, path: "https://medium.com/@arwijesuriya" },
];

const AboutSocial = ({mySocialsStyles, myIconStyles}) => {
    return (
        <div className={mySocialsStyles}>
            {mySocials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={myIconStyles} target="_blank">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default AboutSocial