import React , {useState} from "react";
import NavBar from '../Components/NavBar'
import "../Styling/articlepage.css"
import { Image } from 'react-bootstrap'
import mindset from "../Assets/new.jpeg"
import Footer from '../Components/Footer'
import CaroselSlider from '../Components/CaroselSlider';
import { useParams} from 'react-router-dom';
import fb from "../firebase";
const DB =fb.firestore()

const Blogslist = DB.collection('blogs');


const ArticlePage = () => {
  const {id} = useParams();
  const[blogs, Setblogs] = useState([]);
  Blogslist.doc(id).get().then((snapshot) => {
      const data = snapshot.data()
      Setblogs(data);
  });
  const body = blogs.Body;

  return (
    <div>
        <NavBar/>

        <div className="Container article_container">
            {/* <div className='title'>
            <h1>Fixed Mindset VS Growth Mindset</h1>
            </div> */}

            <div className='article_header_image'>
                {/* <Image className='image_header' src={mindset} /> */}
            </div>


            <div className="blog">
                <div className="post">
                 
                <div  dangerouslySetInnerHTML={{__html: body}} />

                </div>
            </div>
        </div>

        <div>
            <CaroselSlider/>
          </div>
        <Footer/>

    </div>
  )
}

export default ArticlePage