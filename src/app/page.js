import styles from "./page.module.css";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const buttons = [
  {
    name: "About",
    href: "/about",
    icon: CgProfile,
  },
  {
    name: "Github",
    href: "https://github.com/yohanmayorga",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yohanmayorga",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/YohanMayorga",
    icon: FaXTwitter,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@yohanmayorga",
    icon: IoLogoYoutube,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yohanmayorga",
    icon: FaLinkedin,
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{"<Yohan Mayorga/>"}</div>
      <div className={styles.iconsBox}>
      {buttons.map(({ name, href, icon: Icon }) => (
            <div key={name}>
              <Link href={href} className={styles.button} aria-hidden="true">
                <span className={styles.sidebarIcon}>
                  <Icon />
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
