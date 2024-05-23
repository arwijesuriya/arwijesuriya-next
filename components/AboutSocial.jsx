import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDev, FaTwitter, FaHackerrank, FaMedium } from 'react-icons/fa';

const mySocials = [
    { icon: <FaGithub/>, path: "https://github.com/arwijesuriya" },
    { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/arwijesuriya58/" },
    { icon: <FaFacebook/>, path: "https://www.facebook.com/arwijesuriya58/" },
    { icon: <FaInstagram/>, path: "https://www.instagram.com/arwijesuriya58/" },
    { icon: <FaDev/>, path: "https://dev.to/arwijesuriya58" },
    { icon: <FaTwitter/>, path: "https://twitter.com/arwijesuriya58" },
    { icon: <FaHackerrank/>, path: "https://www.hackerrank.com/profile/arwijesuriya58" },
    { icon: <FaMedium/>, path: "https://medium.com/@arwijesuriya.7" },
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