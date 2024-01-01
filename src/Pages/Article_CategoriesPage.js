import React, { useRef, useState, useEffect } from 'react'
import "../Styling/ArticleCategories.css"
import NavBar from '../Components/NavBar'
import CardSection from '../Components/Card'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import cardimg from '..//Assets/OIP.jpeg'
import Footer from '../Components/Footer'
import transition from '../transition';
import SliderBanner from '../Components/SliderBanner'
import { Link } from 'react-router-dom'
import fb from "../firebase";
const DB = fb.firestore()
const Blogslist = DB.collection('blogs');

const Article_CategoriesPage = () => {

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
    <div className='Article_CategoriesPage'>
      <NavBar />
      {/* <CardSection/> */}

<SliderBanner/>
      <Container className='container_box'>
        {/* <Row>
          <Col sm={9} md={20} > */}
            <Row xs={1} md={3} className="g-5">
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
          {/* </Col>
        </Row> */}
      </Container>

      <Footer/>
    </div>
  )
}

export default transition(Article_CategoriesPage);