import React from 'react';
import Headline from '../components/Headline/Headline';
import headlineImage from '../assets/headline_about.jpg';
import styles from './about.module.scss';
import founderImage from '../assets/about_founder.jpg';
import historyImage from '../assets/about_history.jpg';

const About = () => {
    return (
        <>
            <Headline src={headlineImage.src} title='About us' /> 
            <div className={styles.quote}>
                <h2>Time is what we want most, but what we use worst. ~ William Penn</h2>
            </div>
            <section className={styles.about}>
                <div className={styles.about__flex}>
                    <div className={styles.about__imageWrapper}>
                        <img className={styles.about__image} src={historyImage.src} />
                    </div>
                    <div className={styles.about__contentWrapper}>
                        <h2 className={styles.about__title}>Our history</h2>
                        <p className={styles.about__content}>One day when shopping for a new planner I thought to myself – why not design something of my own? Something that would combine all of the productivity techniques I love, while also have a touch of pleasant aesthetic to it. And that’s how the journey had begun! I love helping women become a better version of themselves daily. Welcome! I’m so glad you’ve found us.  </p>
                    </div>
                </div>
                <div className={styles.about__flex}>
                    <div className={styles.about__imageWrapper}>
                        <img className={styles.about__image} src={founderImage.src} />
                    </div>
                    <div className={styles.about__contentWrapper}>
                        <h2 className={styles.about__title}>Our founder</h2>
                        <p className={styles.about__content}>I’ve always been a planning junkie, but this period of my life was an especially obsessive journey. I spent a year on reading self-help books on productivity, time management, goal-setting tactics, financial planning, habit formation, decluttering, you name it… It helped me feel like my life was a bit more organized and put together. Little did I know that I was on my way to finding my purpose.  </p>
                    </div>    
                </div>
            </section>
        </>
    )
}

export default About;