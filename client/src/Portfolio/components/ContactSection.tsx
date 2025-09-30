import { Linkedin, Facebook, Mail, AtSign } from "lucide-react";
import SvgIcons from "./SvgIcons.tsx";

const ContactSection = () => {
  const contactAccounts = [
    {
      name: "Linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/adebayo-muis"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61554495275289"
    },
    {
      name: "X ( formerly Twitter )",
      icon: AtSign,
      url: "https://x.com/Charmingdc01"
    },
    { name: "Gmail", icon: Mail, url: "mailto:charmingdc002@gmail.com" }
  ];

  return (
    <section>
      <div className="section-headtag">
        <h3> Contact </h3>

        <SvgIcons type="rightDownArrow" width="30px" height="30px" />
      </div>

      <h2 className="section-headtitle">Get in touch</h2>

      <p>
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee :)
      </p>

      <div className="contacts-container">
        {contactAccounts.map((account, index) => {
          const Icon = account.icon;
          return (
            <a
              href={account.url}
              target="_blank"
              className="contact-div"
              key={index}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
