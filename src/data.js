import {
    AiOutlineHome,
    AiOutlineMail,
    AiOutlinePicture,
    AiOutlineUser,
    AiFillYoutube,
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillInstagram,
  } from "react-icons/ai";

  // navbar
export const navbar = [
    {
      icon: <AiOutlineHome />,
      href: "home",
    },
    {
      icon: <AiOutlineUser />,
      href: "about",
    },
    {
      icon: <AiOutlinePicture />,
      href: "portfolio",
    },
    {
      icon: <AiOutlineMail />,
      href: "contact",
    },
  ];

  export const socials = [
    {
        icon: <AiFillInstagram />,
        href: "instagram.com"
    },
    {
        icon: <AiFillLinkedin />,
        href: "linkedin.com"
    },
    {
        icon: <AiFillTwitterSquare />,
        href: "twitter.com"
    },
    {
        icon: <AiFillYoutube />,
        href: "Youtube.com"
    }
  ]