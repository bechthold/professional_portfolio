import React from 'react';
import {motion} from 'framer-motion'

import { images } from '../../constants'

import './About.scss'

const abouts = [
  { title: 'Back-End', description: 'I am a good developer', imgUrl: images.about},
  { title: 'Front-End', description: 'I am a good developer', imgUrl: images.about},
  { title: 'Databases', description: 'I am a good developer', imgUrl: images.about},
  { title: 'Full-Stack Development', description: 'I am a good developer', imgUrl: images.about},
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know That
        <span> Good Dev </span>
        <br/>
        Means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transtion={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
