'use client';
import { useEffect } from 'react';
import '../../styles/skills.css';

export default function SkillsPage() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>

      <main>
        {/* Frontend Skills */}
        <section className="skills-section animate-on-scroll">
          <div className="skills-container">
            <div className="skills-heading">
              <h2>Frontend Development Skills</h2>
              <p className="skills-description">
                Passionate about crafting engaging, user-friendly interfaces that deliver seamless experiences 
                across all devices. With expertise in HTML, CSS, and JavaScript, I build responsive and accessible
                web applications using modern frameworks like React.
              </p>

              <p className="skills-description">
               I focus on translating design concepts into functional, interactive experiences. 
               Whether working with UI libraries like Tailwind CSS or implementing animations and state management, 
               I strive to create smooth, efficient, and maintainable frontend architectures that elevate user engagement.
              </p>
            </div>

            <div className="skills-bars">
              {[
                { name: 'HTML', className: 'html', percent: '90%' },
                { name: 'CSS', className: 'css', percent: '85%' },
                { name: 'JavaScript', className: 'js', percent: '75%' },
                { name: 'React', className: 'react', percent: '70%' },
                { name: 'Tailwind CSS', className: 'tailwind', percent: '75%' },
                { name: 'Bootstrap', className: 'bootstrap', percent: '75%' },
                { name: 'Next.js', className: 'nextjs', percent: '70%' }
              ].map(skill => (
                <div className="skill" key={skill.name}>
                  <p>{skill.name}</p>
                  <div className="progress-bar">
                    <div className={`progress ${skill.className}`}>{skill.percent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Backend Skills */}
        <section className="skills-section animate-on-scroll">
          <div className="skills-container">
            <div className="backend-skills-heading">
              <h2>Backend and Database Skills</h2>
              <p className="backend-skills-description">
                Skilled in designing robust server-side architectures that power scalable and efficient web applications.
                 With expertise in Node.js, Python (Django/Flask) and Java, I ensure security, authentication, 
                 and seamless integration with frontend systems while optimizing for speed and reliability.
              </p>
              <p className="backend-skills-description">
                Experienced in working with SQL (MySQL) and NoSQL (MongoDB, Firebase) databases. 
                I design efficient data models, write optimized queries, and implement caching strategies for high-traffic applications. 
                I focus on creating maintainable, secure, and scalable backend solutions.
              </p>
            </div>

            <div className="skills-bars">
              {[
                { name: 'Java', className: 'java', percent: '70%' },
                { name: 'PHP', className: 'php', percent: '70%' },
                { name: 'Node.js', className: 'node', percent: '70%' },
                { name: 'Python', className: 'python', percent: '75%' },
                { name: 'MySQL', className: 'mysql', percent: '75%' },
                { name: 'MongoDB', className: 'mongo', percent: '75%' },
                { name: 'Firebase', className: 'firebase', percent: '75%' },
              ].map(skill => (
                <div className="skill" key={skill.name}>
                  <p>{skill.name}</p>
                  <div className="progress-bar">
                    <div className={`progress ${skill.className}`}>{skill.percent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UI/UX Skills */}
        <section className="skills-section animate-on-scroll">
          <div className="skills-container">
            <div className="design-skills-heading">
              <h2>UI/UX Designing Skills</h2>
              <p className="design-skills-description">
                I design with precision in Figma and Adobe XD, prototype interactions, and streamline workflows.
                 I convert complex ideas into clean, engaging visuals.
                 I use Canva, while WordPress empowers me to build scalable, content-rich sites.
              </p>
              <p className="design-skills-description">
                My process balances user research, wireframing, and developer collaboration to create cohesive experiences 
                From wireframes to prototypes, I ensure a seamless user experience across all devices while focusing on layout,
                color, and accessibility.
              </p>
            </div>

            <div className="skills-bars">
              {[
                { name: 'Figma', className: 'figma', percent: '80%' },
                { name: 'Adobe XD', className: 'xd', percent: '75%' },
                { name: 'Wireframing', className: 'wireframing', percent: '80%' },
                { name: 'Prototyping', className: 'prototyping', percent: '80%' },
                { name: 'Wordpress', className: 'wp', percent: '80%' },
                { name: 'Canva', className: 'canva', percent: '85%' },
              ].map(skill => (
                <div className="skill" key={skill.name}>
                  <p>{skill.name}</p>
                  <div className="progress-bar">
                    <div className={`progress ${skill.className}`}>{skill.percent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QA Skills */}
        <section className="skills-section animate-on-scroll">
          <div className="skills-container">
            <div className="skills-heading">
              <h2>Quality Assurance Skills</h2>
              <p className="skills-description">
                With a good understanding in manual testing, API validation, and test case design, 
                I ensure that every feature meets expected functionality and user needs. 
                I specialize in testing web and backend applications using tools like Postman, JIRA, and SQL,
                 identifying bugs early, and improving software reliability.
              </p>
              <p className="skills-description">
                I focus on verifying both functional and non-functional requirements, simulating real-world usage 
                scenarios to uncover edge cases and usability issues. 
                Whether it’s writing structured test cases, executing regression tests, or validating APIs,
                I strive to ensure software is stable, user-friendly, and free of defects before deployment.
              </p>
            </div>

            <div className="skills-bars">
              {[
                { name: 'Manual Testing', className: 'manual-testing', percent: '90%' },
                { name: 'Test Case Design', className: 'testcase', percent: '80%' },
                { name: 'Postman', className: 'postman', percent: '80%' },
                { name: 'Bug Reporting - JIRA', className: 'bugreport', percent: '80%' },
                { name: 'SQL for Testing', className: 'sqltest', percent: '75%' },
                { name: 'Agile & Scrum', className: 'agile', percent: '80%' },
                { name: 'Version Control - Git/Github', className: 'version', percent: '85%' },
              ].map(skill => (
                <div className="skill" key={skill.name}>
                  <p>{skill.name}</p>
                  <div className="progress-bar">
                    <div className={`progress ${skill.className}`}>{skill.percent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
