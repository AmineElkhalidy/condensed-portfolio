import { FaGithub, FaLinkedin } from "react-icons/fa";
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
