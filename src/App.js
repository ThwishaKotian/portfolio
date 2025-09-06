import './App.css';
import { useEffect } from "react";
import ParticlesBackground from './components/ParticlesBackground';
import htmlIcon from './assets/html.png'
import reactIcon from './assets/react.png';
import jsIcon from './assets/js.png';
import cssIcon from './assets/css.png';
import gitIcon from './assets/git.png';
import sassIcon from './assets/sass.png';
import nodeIcon from './assets/node.png';
import retro from './assets/retro.png';
import github from './assets/github-logo.png';
import mail from './assets/mail.png';
import todo from './assets/todo.png'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% is visible
    );

    document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
  }, []);
  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center overflow-hidden">
      <div className='hero' id='hero'>
        <ParticlesBackground />

        <div className="heading">
          <div className="heading__line-1">Hello, I'm <span className='name'>Thwisha</span>.</div>
          <div className="heading__line-2">I'm a Frontend developer.</div>
          <a
            href="#about"
            className="inline-block px-6 py-2 transition duration-300 view-btn"
          >
            <span className="flex items-center justify-center gap-2">
              View my work
              <svg
                className="heading__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>arrow-right</title>
                <path
                  d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                ></path>
              </svg>
            </span>
          </a>

        </div>
      </div>
      <div className='about-section' id='about'>
        <div className="navbar">
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className='about'>
          <h2 className='about__heading section-heading'>About</h2>
          <div className='about-content'>
            <div className='profile'>
              <div className='summary hidden slide-left'>
                <div className="profile__picture">
                  <svg
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="user-icon"
                  >
                    <defs>
                      <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6DB8FF" />
                        <stop offset="50%" stopColor="#B178C4" />
                        <stop offset="100%" stopColor="#FF4D5A" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M256 288c52.9 0 96-43.1 96-96s-43.1-96-96-96-96 43.1-96 96 43.1 96 96 96zm0 32c-63.6 0-192 32.4-192 96v32h384v-32c0-63.6-128.4-96-192-96z"
                      stroke="url(#userGradient)"
                      strokeWidth="16"
                      fill="none"
                    />
                  </svg>
                </div>
                <p className='profile__blurb'>
                  Fully committed to the philosophy of life-long learning, I’m a frontend developer with a
                  deep passion for JavaScript, React and all things web development. The unique combination of
                  creativity, logic, technology and never running out of new things to discover, drives my excitement
                  and passion for web development. When I’m not at my computer I like to spend my time reading, keeping fit
                  and playing guitar.
                </p>
              </div>

              <div className='skills hidden slide-right'>
                <div class="skills__row">
                  <div class="skills__item skills__item--html">
                    <img src={htmlIcon} alt="" />
                    <div class="skills__item-name">HTML</div>
                  </div>
                  <div class="skills__item skills__item--react">
                    <img src={reactIcon} alt="" />
                    <div class="skills__item-name">REACT</div>
                  </div>
                </div>
                <div class="skills__row">
                  <div class="skills__item skills__item--js">
                    <img src={jsIcon} alt="" />
                    <div class="skills__item-name">Javascript</div>
                  </div>
                  <div class="skills__item skills__item--sass">
                    <img src={sassIcon} alt="" />
                    <div class="skills__item-name">SASS</div>
                  </div>
                  <div class="skills__item skills__item--r">
                    <img src={nodeIcon} alt="" />
                    <div class="skills__item-name">NODE.JS</div>
                  </div>
                </div>
                <div class="skills__row">
                  <div class="skills__item skills__item--css">
                    <img src={cssIcon} alt="" />
                    <div class="skills__item-name">CSS</div>
                  </div>
                  <div class="skills__item skills__item--git">
                    <img src={gitIcon} alt="" />
                    <div class="skills__item-name">GIT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='projects-section' id='projects'>
        <div className='projects__heading section-heading'>
          <h2 className='about__heading section-heading'>Projects</h2>
          <div className='project project-left'>
            <a href="https://thwishakotian.github.io/Retro-Sketch/" target="_blank">
              <div class="project__image-container retro">
                <div class="project__image-image">
                  <img src={retro} alt="" />
                </div>
              </div>
            </a>
            <div class="project__info">
              <h3 class="project__title">Retro-Sketch<br />Pixel Sketch App</h3>
              <p class="project__description">Create pixel art with a variety of drawing tools.</p>
              <a href="https://thwishakotian.github.io/Retro-Sketch/" target="_blank"
              ><div class="project__live-2">Live app</div></a>
              <a href="https://github.com/ThwishaKotian/Retro-Sketch" target="_blank"
              ><div class="project__live-2">learn more</div></a>
            </div>
          </div>
          <div className='project project-left'>
            <a href="https://thwishakotian.github.io/todo/" target="_blank">
              <div class="project__image-container retro">
                <div class="project__image-image">
                  <img src={todo} alt="" />
                </div>
              </div>
            </a>
            <div class="project__info">
              <h3 class="project__title">// TO-DO<br />Productivity App</h3>
              <p class="project__description">Keep track of tasks with custom project folders and notes.</p>
              <a href="https://thwishakotian.github.io/todo/" target="_blank"
              ><div class="project__live-2">Live app</div></a>
              <a href="https://github.com/ThwishaKotian/todo" target="_blank"
              ><div class="project__live-2">learn more</div></a>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-section contact' id='contact'>
        <div className='projects__heading section-heading'>
          <h2 className='about__heading section-heading'>Contact</h2>
          <p class="contact__text">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>

          <form
            className="contact__form"
            action="https://formspree.io/f/xeolpoqg"
            method="POST"
          >
            <input className="contact__form-name" type="text" name="name" placeholder="Name" required />
            <input className="contact__form-email" type="email" name="_replyto" placeholder="Email" required />
            <textarea className="contact__form-message" name="message" placeholder="Message" required></textarea>
            <div className="contact__form-error-submit">
              <button type="submit" className="contact__form-submit-2 project__live-2" id="form-submit">Submit</button>
            </div>
          </form>

        </div>
      </div>

      <footer className="footer">
        <a href="#hero">
          <div className="return-home">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" >
              <title></title>
              <path fill="#fafafa" d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
            </svg>
          </div>
        </a>
        <div className="socials">
          <a href="https://github.com/ThwishaKotian" target="_blank" rel="noopener noreferrer">
            <div className="socials__github">
              <img src={github} alt="" />
            </div>
          </a>
          <a href="mailto:thwishakotian00@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="socials__email">
              <img src={mail} alt="" />
            </div>
          </a>
        </div>
        <p className="copyright">THWISHA KOTIAN ©2025</p>
      </footer>
    </div >
  );
}

export default App;
