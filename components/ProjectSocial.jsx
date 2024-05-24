//import { Icon } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaGlobe } from 'react-icons/fa'

const proSocials = [
    { icon: <FaGithub/>, path: "https://github.com/arwijesuriya" },
    { icon: <FaGlobe/>, path: "https://www.linkedin.com/in/arwijesuriya58/" },
];

const ProjectSocial = ({projectStyles, proIconStyles}) => {
  return (
    <div className={projectStyles}>
        {proSocials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={proIconStyles} target="_blank">
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default ProjectSocial