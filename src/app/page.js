'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function HomePage() {
  useEffect(() => {
    // Typed text animation
    const texts = ["Web Developer", "UI/UX Designer", "QA Engineer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let isDeleting = false;

    const type = () => {
      const element = document.querySelector(".typed-text");
      if (!element) return;

      const fullText = texts[count];

      currentText = isDeleting
        ? fullText.substring(0, index--)
        : fullText.substring(0, index++);

      element.textContent = currentText;

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === fullText) {
        speed = 1000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        count = (count + 1) % texts.length;
        speed = 500;
      }

      setTimeout(type, speed);
    };

    type();

    // Scroll animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // Mail button
    const mailBtn = document.getElementById('mailMe');
    if (mailBtn) {
      mailBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const email = "vinayagamoorthyshanjeyan@gmail.com";
        const subject = encodeURIComponent("Hello from your website!");
        const body = encodeURIComponent("Hi Shanjeyan,\n\nI wanted to get in touch with you regarding...");
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            {/* Social Icons */}
            <div className={styles.heroIcons}>
              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/shanjeyan/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/_vi.jeyan_/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/SanzGitHere/" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.figma.com/@shanjeyanvinaya" target="_blank"><i className="fab fa-figma"></i></a>
                <a href="https://www.behance.net/vinayagshanjey" target="_blank"><i className="fab fa-behance"></i></a>
              </div>
            </div>

            {/* Text Content */}
            <div className={`${styles.heroText} visible animate-on-scroll`}>
              <h1 className={styles.heroTitle}>I'm V.Shanjeyan</h1>
              <h1 className={styles.heroRole}>
                <span className="typed-text">Software Engineer</span><span className="cursor">&nbsp;</span>
              </h1>
              <p className={styles.paragraph}>
                I’m a passionate and self-motivated Software Engineering undergraduate with hands-on experience in
                designing and developing responsive web applications and scalable backend systems. I also have a solid
                understanding of software quality assurance, and I take pride in delivering applications that are
                reliable, well-tested, and refined for performance and usability.
              </p>
              <a href="/files/Shanjeyan_Portfolio_Resume.pdf" target="_blank" className={styles.downloadBtn}>My Resume</a>
              <a href="#" id="mailMe" className={styles.downloadBtn}>Mail Me</a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={`${styles.heroImage} visible animate-on-scroll`}>
          <Image
            src="/images/mypic.jpg"
            alt="Shanjeyan's Profile"
            width={430}
            height={540}
            draggable={false}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2 className="visible animate-on-scroll">What Services I'm Providing</h2>
        <div className={`${styles.cardContainer} animate-on-scroll`}>
          {[
            {
              img: '/images/web-development.png',
              title: 'Web Development',
              desc: `I build responsive, clean, and user-friendly websites using HTML, CSS, JavaScript, PHP, and MySQL. 
                Whether it’s a personal blog or a business platform, I ensure performance, usability and mobile compatibility.`,
            },
            {
              img: '/images/UI-UX-Design-icon-300x300.png',
              title: 'UI/UX Design',
              desc: `I design engaging user interfaces and experiences using tools like Figma. 
                My design process emphasizes layout, flow, and usability, ensuring your website or app is intuitive,
                visually appealing, and user-centered.`,
            },
            {
              img: '/images/QA.png',
              title: 'Quality Assurance (QA)',
              desc: `I ensure software works as intended and delivers a smooth user experience by testing and validating functionality, 
                design, and performance. My goal is to ensure software is reliable, user-friendly, and of high quality.`,
            },
          ].map((card, idx) => (
            <div className={`${styles.card} visible animate-on-scroll`} key={idx}>
              <Image
                src={card.img}
                alt={card.title}
                width={60}
                height={60}
                className={styles.cardImg}
              />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
