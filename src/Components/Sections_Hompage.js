import React, { useRef } from 'react'
import { Container, Image } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import studentImage from "..//Assets/OIF.jpeg"
import podcast from "..//Assets/Rbh.jpeg"

import '..//Styling/sections.css'
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { Link } from 'react-router-dom'

const SectionsHompage = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    return (
        <>
            {/* <motion.div
        ref={ref}
        style={{
            scale:scrollYProgress,
            opacity:scrollYProgress
        }}
        className='mb-3 sm:mb-8 last:mb'
        > */}
            <Container className='section_container'>
                <Row className='row_section'>
                    <Col sm={5}>
                        <div className="title_header">
                            <h1>Discover intresting Articles</h1>
                        </div>

                        <div className="body_section">
                            <p>
                                Are you looking for tips and tricks on how to succeed in school and life?
                                Do you want to learn how to develop grit, the passion and perseverance that drives long-term achievement? If yes, then you should check out our blog’s article section,
                                where we share the best advice and resources for students who want to improve their performance and achieve their goals.
                            </p>
                            <p>
                                Whether you need help with study skills, time management, motivation, mindset, or anything else,
                                you will find useful and practical information in our articles. So don’t miss this opportunity to learn from experts,
                                mentors, and peers who have overcome challenges and achieved success in school and life.
                                Read our articles today and start developing your grit!
                            </p>
                        </div>

                        <div className='Listen_button'>

                            <Link className='Link' to="/Article_CategoriesPage"> <Button variant="dark">Show Me</Button></Link>

                        </div>
                    </Col>

                    <Col sm={6}>
                        <Image className='sectionImage' src={studentImage} alt='' fluid />
                    </Col>
                </Row>
            </Container>
            {/* </motion.div> */}

            <Container className='section_container'>
                <Row className='row_section'>
                    <Col sm={6} xs={{ order: "last" }} >
                        <Image className='sectionImage' src={podcast} alt='' fluid />
                    </Col>
                    <Col sm={5} xs={{ order: "first" }} >
                        <div className="title_header">
                            <h1>Podcasts</h1>
                        </div>

                        <div className="body_section">
                            <p>
                                Welcome to Gritty Students, the podcast that helps you to achieve your goals as a student and beyond.
                                In this podcast, you will learn from experts, mentors, and peers who have overcome challenges and achieved
                                success in school and life. You will also discover the latest research and tips on how to develop grit,
                                the passion and perseverance that drives long-term achievement.
                            </p>
                            <p>
                                Whether you want to improve your grades, get into your dream college,
                                or pursue your career aspirations, this podcast will inspire you and equip you with the tools and
                                strategies you need to succeed. Join us every week as we explore topics such as goal setting, time management,
                                study skills, motivation, mindset, and more.
                                If you’re ready to take your performance to the next level, this podcast is for you!
                            </p>
                        </div>

                        <div className='Listen_button'>
                            <Link className='Link' to="/PodcastPage"><Button variant="dark">Listen Now</Button> </Link>


                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SectionsHompage