import { Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-content">
        <p className="section-label">05 / CONTACT</p>

        <h2>
          Have a project, opportunity or idea?
          <span> Let's talk.</span>
        </h2>

        <p>
          I'm open to opportunities involving digital marketing, marketing
          analytics, business growth and technology.
        </p>

        <a
          href="mailto:farukmuktaraliyu@gmail.com"
          className="contact-email"
        >
          <Mail size={22} />
          Get in touch
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}

export default Contact;