import { useEffect } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import heroImage from './assets/img/hero.png';
import workImage1 from './assets/img/work/1.jpg';
import workImage2 from './assets/img/work/2.jpg';
import workImage3 from './assets/img/work/3.jpg';
import workImage4 from './assets/img/work/4.jpg';
import workImage5 from './assets/img/work/5.jpg';
import workImage6 from './assets/img/work/6.jpg';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
      });
    
      gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'center',
          end: '820',
          scrub: true
        }
      });
    
      let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
      itemsL.forEach(item => {
        gsap.fromTo(item, { x: -200, opacity: 0 }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
          }
        });
      });
    
      let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
      itemsR.forEach(item => {
        gsap.fromTo(item, { x: 200, opacity: 0 }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
          }
        });
      });
    }
  }, []);

  return (
    <div className="wrapper">
    <div className="content">
      <header className="hero-section">
        <img
          data-speed=".6"
          className="hero"
          src={heroImage}
          alt="Hero" />
    
        <div className="container">
          <div data-speed=".75" className="main-header">
            <h1 className="main-title">creative scroll</h1>
          </div>
        </div>
      </header>
    
      <div className="portfolio">
        <div className="container">
          <main className="gallery">
            <div data-speed=".9" className="gallery__left">
              <img className="gallery__item" src={workImage1} alt="Work 1" />
              <img className="gallery__item" src={workImage2} alt="Work 2" />
    
              <div className="text-block gallery__item">
                <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                <p className="text-block__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, obcaecati aliquam reprehenderit necessitatibus, repellendus nemo repudiandae voluptates quibusdam laudantium sint qui, velit ipsa nisi libero error vel accusamus maxime debitis. 
                </p>
              </div>
    
              <img className="gallery__item" src={workImage6} alt="Work 6" />
            </div>
    
            <div data-speed="1.1" className="gallery__right">
              <div className="text-block gallery__item">
                <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                <p className="text-block__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, obcaecati aliquam reprehenderit necessitatibus, repellendus nemo repudiandae voluptates quibusdam laudantium sint qui, velit ipsa nisi libero error vel accusamus maxime debitis. 
                </p>
              </div>
    
              <img className="gallery__item" src={workImage3} alt="Work 3" />
              <img className="gallery__item" src={workImage4} alt="Work 4" />
              <img className="gallery__item" src={workImage5} alt="Work 5" />
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
