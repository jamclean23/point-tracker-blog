// Main App component for Admin Dashboard

// ====== IMPORTS ======

// React
import { useState } from 'react';

// Styling
import './App.css';

// Images
import inAppImg from './assets/in-app.jpg';
import loadingImg from './assets/loading-screen.jpg';
import menuImg from './assets/menu.png';
import aboutMeImg from './assets/portrait.jpg';

// Icons
import reactIcon from './assets/icons8-react-16.png';
import viteIcon from './assets/icons8-vite-16.png';
import dockerIcon from './assets/icons8-docker-16.png';
import railsIcon from './assets/icons8-ruby-on-rails-16.png';
import expoIcon from './assets/icons8-expo-16.png';

//  ====== FUNCTIONS ======

export default function App () {

  // == STATE



  // == RENDER

  return (
    <>
      <h1><span className='pointSpan'>Point </span><span className='trackerSpan'>Tracker</span></h1>
      <main>    
        <h2>Progress Update</h2>

        <div id='headerImgsWrapper'>
          <img className='headerImg' src={inAppImg}/>
          <img className='headerImg' src={loadingImg}/>
          <img className='headerImg' src={menuImg}/>
        </div>

        <h3>About This Project</h3>

        <h4>Objectives and Features</h4>
        <p>Thanks for taking the time to check out Point Tracker.</p>
        <p>
          The primary goal of this project is to assist clients and drone surveyors in the field.<br/><br/> 
          Point Tracker can locate and display information about control points using an interactive map-based interface, or by using a text-based search/sort menu.<br/><br/>
          After a control point is found, it can then be navigated to using a Google Maps API. (Apple maps could also be implemented). <br/><br/>
          Access to data is restricted by account, and must be approved by an administrator via database query or the Admin Dashboard (development in progress).
        </p>

        <h4>Planned Features</h4>
        <ul>
          <li>Admin Dashboard for approving users and managing permissions.</li>
          <li>Restrict user access to relevant client data.</li>
          <li>Links on the control point pin menu for web page containing control point data and images.</li>
          <li>Ability to add control points directly from the mobile app.</li>
        </ul>

        <h4>Planned Code Base Improvements</h4>
        <ul>
          <li>Documentation for building and deployment.</li>
          <li>Documentation for adding routes and web pages.</li>
          <li>Documentation for troubleshooting common issues.</li>
          <li>Improved unit test coverage.</li>
        </ul>

        <h3>Tech Stack</h3>
        <p>This is a full stack application, which includes: </p>
        <ul>
          <li>Mobile App
              <ul className='techUl'>
                <li className='techLi'>
                  <img src={reactIcon}/>
                  <span>React Native</span>
                </li>
                <li className='techLi'>
                  <img src={expoIcon}/>
                  <span>Expo Go</span>
                </li>
              </ul>
          </li>
          <li>Server
            <ul className='techUl'>
              <li className='techLi'>
                <img src={railsIcon}/>
                <span>Ruby on Rails</span>
              </li>
              <li className='techLi'>
                <img src={dockerIcon}/>
                <span>Docker</span>
              </li>
            </ul>
          </li>
          <li>Web Page</li>
            <ul className='techUl'>
              <li className='techLi'>
                <img src={reactIcon}/>
                <span>React</span>
              </li>
              <li className='techLi'>
                <img src={viteIcon}/>
                <span>Vite</span>
              </li>
            </ul>
        </ul>

        <h3>Progress Video</h3>
        <div
          id="progressVideoWrapper"
        >
          <iframe 
            id="progressVideo"
            allowFullScreen
            src="https://www.youtube.com/embed/Nq1Te1z_Qew?si=_6x_YeW-TnfP4Ikg"
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
        <h3>Links</h3>
        <h4 className='ulHeader'>Github:</h4>
        <ul>
          <li><a href='https://github.com/jamclean23/point-tracker-mobile'>Mobile App</a></li>
          <li><a href='https://github.com/jamclean23/point-tracker-server'>Server</a></li>
          <li><a href='https://github.com/jamclean23/point-tracker-web-front-end'>Application Web Pages</a></li>
          <li><a href='https://github.com/jamclean23/point-tracker-blog'>This Web Page</a></li>
        </ul>

        <h4 className='ulHeader'>YouTube:</h4>
        <ul>
          <li><a href='https://www.youtube.com/watch?v=Nq1Te1z_Qew'>Progress Video</a></li>
        </ul>
        
        <h3>About Me</h3>
        <p>
          <div id='aboutMeImgWrapper'>
            <img id='aboutMeImg' src={aboutMeImg} />
          </div>

          Hi, I'm Jesse McLean.<br/><br/>
          I'm a fullstack developer who enjoys finding creative solutions to complex problems.<br/><br/>
          When I'm not building websites, desktop programs, or mobile applications you'll find me exploring the Blue Ridge mountains or at home with a good book.<br/><br/>

          <a href='https://jamclean23.github.io/jm-portfolio/'>Portfolio</a><br/>
          <a href='https://github.com/jamclean23'>Github</a>

          <h4>Contact Me</h4>
            <p>I look forward to connecting with you! Feel free to email me at <a href='mailto:jamclean.dev@gmail.com'>jamclean.dev@gmail.com</a>.</p>
        </p>

        <h3>Attribution</h3>
        <div id='attributionWrapper'>
          <h4>Icons</h4>
          <div>
            <a target="_blank" href="https://icons8.com/icon/J79emsSv2QCu/react">React</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
          <div>
            <a target="_blank" href="https://icons8.com/icon/dJjTWMogzFzg/vite">Vite</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
          <div>
            <a target="_blank" href="https://icons8.com/icon/22813/docker">Docker</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
          <div>
            <a target="_blank" href="https://icons8.com/icon/ZMFmFsekpKfY/ruby-on-rails">Ruby On Rails</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
          <div>
            <a target="_blank" href="https://icons8.com/icon/4YmrqudTVJhf/expo">Expo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
        </div>
      </main>
    </>
  );
}