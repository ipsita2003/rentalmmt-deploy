import { React, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import HeroSection from './components/HeroSection'
import '../App.css'
import { Link } from 'react-router-dom'
// import background from './img/background-image.jp
const Home = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return <>
    <nav className='navbar'>

      <div className='container'>

        <div className='logo'>

          <span><h1> Hotel Hyatt</h1></span>

        </div>

        <div className='menu-icon' onClick={handleShowNavbar} >

          <ion-icon name="menu-outline"></ion-icon>

        </div>

        <div className={`nav-element ${showNavbar && 'active'} `} >
          <ul >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/create-user'>User</Link>
            </li>
            
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* hero-section  */}

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
        src='https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/04/27/1448/Grand-Hyatt-Dubai-P353-Hotel-Exterior-Pools-Twilight.jpg/Grand-Hyatt-Dubai-P353-Hotel-Exterior-Pools-Twilight.16x9.jpg'
        alt='first'  
        height={500}
          width={100}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/4f/b7/ce/4fb7ce2d77c5b5c04399ab8f7cf6a28f.jpg"
          alt="Second slide"
          height={500}
          width={100}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1420/KOLKA-P035-La-Cucina-Pranzo-Set-Up.jpg/KOLKA-P035-La-Cucina-Pranzo-Set-Up.4x3.jpg"
          alt="Third slide"
          height={500}
          width={100}

        />

      </Carousel.Item>
    </Carousel>

    {/* <Linkbout section > */}


    <div className='about-section'>
      <div className='container'>
        <div className='row'>
          {/* image */}
          <div className='col mt-3'>
            <img src='./image/doctors-animate.svg' alt='' />

          </div>
          {/* content  */}
          <div className='col mt-5'>
            <h3 className='text-light text-center'> ABOUT US </h3>
            <h3 className='text-light text-center'> What we are and our history</h3>
            <p className='text-light'> As one of the world’s top hospitality companies, Hyatt remains committed to caring for people so they can be their best. READ MORE
            </p>

          </div>
        </div>
      </div>
    </div>



  {/* footer section  */}
 
<div className="text-center text-lg-start bg-light text-muted">

  <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      
      <Link href="" className="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i class="fab fa-google"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </Link>
    </div>
    
  </div>
 
  <div className="">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link href="#!" class="text-reset">Angular</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">React</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Vue</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Laravel</Link>
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link href="#!" class="text-reset">Pricing</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Settings</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Orders</Link>
          </p>
          <p>
            <Link href="#!" class="text-reset">Help</Link>
          </p>
        </div>
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Bidhannagar, Kolkata, West Bengal</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> +91 6371232611</p>
        </div>
        
      </div>
     
    </div>
  </div>
 

  
  <div class="text-center p-4" style={{backgroundcolor: "rgba(0, 0, 0, 0.05);"}} >
    © 2021 Copyright:
    <Link class="text-reset fw-bold" href="https://mdbootstrap.com/">Hotel Hyatt.com</Link>
  </div>
 
</div>

  </>



}

export default Home