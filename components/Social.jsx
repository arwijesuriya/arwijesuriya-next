import { Icon } from "lucide-react";
import Link from "next/link"

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub/>, path: "https://github.com/arwijesuriya" },
    { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/arwijesuriya58/" },
    { icon: <FaFacebook/>, path: "https://www.facebook.com/arwijesuriya58/" },
    { icon: <FaInstagram/>, path: "https://www.instagram.com/arwijesuriya58/" },
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Social