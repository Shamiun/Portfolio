import Link from "next/link"
import {FaLinkedinIn, FaTwitter, FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa'

const social =[
    {icon: <FaGithub/>, path:'https://github.com/Shamiun'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/shamiun-shadid'},
    {icon: <FaTwitter />, path: 'https://x.com/shamiunshadid'},
    //{icon: <FaFacebook />, path: ''},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/sha_.did'},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {social.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social