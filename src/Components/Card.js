import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import cardimg from '..//Assets/OIP.jpeg'
import '../Styling/card.css'
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { Link } from 'react-router-dom'
import fb from "../firebase";
const DB = fb.firestore()
const Blogslist = DB.collection('blogs');

const CardSection = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 2", "0.5 1"],
    });


    const [blogs, Setblogs] = useState([]);
    useEffect(() => {
        const unsubscribe = Blogslist.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            Setblogs(data);
        });

        // Detach listener
        return unsubscribe;
    }, []);

    return (
        <div>

            <Container className='card_container'>
                <Row>
                    <Col sm={4} xs={{ order: 2 }} className='accord_box'>
                        <h2 className='accord_section'>Categories</h2>
                        <Accordion className='accord-sub-box'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Health</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Tech</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>School</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>


                    <Col sm={8} xs={{ order: 1 }}>
                        <motion.div
                            ref={ref}
                            style={{
                                scale: scrollYProgress,
                                opacity: scrollYProgress
                            }}
                            className='mb-1 sm:mb-3 last:mb-0'
                        >
                            <Row xs={1} md={2} className="g-4">
                                {blogs.map(blog => (
                                    <Col key={blog.id}>
                                        <Link className='Link' to={"/ArticlePage/" + blog.id}>
                                            <Card className='card_box'>
                                                <Card.Img variant="top" src={cardimg} className='card_image' />
                                                <Card.Body>
                                                    <Card.Title>{blog.Title}</Card.Title>
                                                    <Card.Text>
                                                        This is a longer card with supporting text below as a natural
                                                        lead-in to additional content. This content is a little bit
                                                        longer.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>

                                    </Col>
                                ))}
                            </Row>
                        </motion.div>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default CardSection

// git push -u origin main