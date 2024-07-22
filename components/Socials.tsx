import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import Link from "next/link";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/AmineElkhalidy",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/elkhalidyamine/",
  },
  // {
  //   icon: <FaSquareUpwork />,
  //   path: "https://www.upwork.com/freelancers/~01f55a2d4b119d3119",
  // },
];

const Socials = ({
  containerStyle,
  iconStyle,
}: {
  containerStyle: string;
  iconStyle: string;
}) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyle}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
