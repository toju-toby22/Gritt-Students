import React, {useRef} from 'react'
import { Container, Image } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import studentImage from "..//Assets/R (1).jpeg"
import '..//Styling/sections.css'
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';

const SectionsHompage = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target : ref,
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi harum ratione minus sequi voluptates! Dolore,
                                rem et! Expedita, nemo accusamus!
                                Assumenda perferendis consectetur hic, laudantium distinctio unde impedit aspernatur dicta!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi harum ratione minus sequi voluptates! Dolore,
                                rem et! Expedita, nemo accusamus!
                                Assumenda perferendis consectetur hic, laudantium distinctio unde impedit aspernatur dicta!
                            </p>
                        </div>

                        <div className='Listen_button'>
                        <Button variant="dark">Show Me</Button>
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
                    <Col sm={6} xs={{order: "last"}} >
                        <Image className='sectionImage' src={studentImage} alt='' fluid />
                    </Col>
                    <Col sm={5 }xs={{order: "first"}} >
                        <div className="title_header">
                            <h1>Podcasts</h1>
                        </div>

                        <div className="body_section">
                            <p>
                                Lorem 9 ipsum dolor sit amet, consectetur adipisicing elit. Nisi harum ratione minus sequi voluptates! Dolore,
                                rem et! Expedita, nemo accusamus!
                                Assumenda perferendis consectetur hic, laudantium distinctio unde impedit aspernatur dicta!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi harum ratione minus sequi voluptates! Dolore,
                                rem et! Expedita, nemo accusamus!
                                Assumenda perferendis consectetur hic, laudantium distinctio unde impedit aspernatur dicta!
                            </p>
                        </div>

                        <div className='Listen_button'>
                        <Button variant="dark">Listen Now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SectionsHompage