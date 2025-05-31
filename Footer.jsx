import styles from "./footer.module.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>About Us</h2>
          <p>
            Mahshid's Blog is a space to share ideas, tutorials, and insights about web development, design, and tech.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Contact</h2>
          <p>
            📞 <a href="tel:+351 933 818 919" className={styles.link}>+351 933 818 919</a>
          </p>
          <p>
            📧 <a href="mailto:mahshid@example.com" className={styles.link}>mahshid@example.com</a>
          </p>
        </div>

        <div className={styles.section}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} Mahshid's Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
