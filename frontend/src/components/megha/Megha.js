import React from 'react'
import './megha.css'
import pic1 from '../../assets/images/flip1.jpg'
import pic2 from '../../assets/images/flip2.jpg'
import pic3 from '../../assets/images/flip3.jpg'
import pic4 from '../../assets/images/flip4.jpg'
import pic5 from '../../assets/images/flip5.jpg'
import pic6 from '../../assets/images/flip6.jpg'
import pic7 from '../../assets/images/flip7.jpg'
import pic8 from '../../assets/images/flip8.jpg'
import { Link } from 'react-router-dom'
import Products from '../Products/Products'
const Megha = () => {
  return (
    <>
    <Link to="/Products">
    <div className="container-fluid my-2" style={{backgroundColor:"rgb(240, 240, 240)"}}>
    <h2 className="my-4">Discover your next business opportunity</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="py-1">
          <h5 className="d-inline">Top ranking</h5>
          <span className="float-end">
            <a href="">View more</a>
          </span>
        </div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade bg-white rounded-3" data-bs-ride="carousel">
          <div className="carousel-inner p-3">
            <div className="carousel-item active">
              <h5>Most Popular</h5>
              <span>Fresh fruit</span>
              <div className="">
              <div className="" style={{height:"350px"}}>
                <img src={pic1} alt="" style={{width:"100%", height:"100%"}} className=" rounded-3"/>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <h5>Most Popular</h5>
              <span>Fresh fruit</span>
              <div className="" style={{height:"350px"}}>
                <img src={pic4} alt="" style={{width:"100%", height:"100%"}} className=" rounded-3"/>
                </div>
            </div>
            <div className="carousel-item">
              <h5>Most Popular</h5>
              <span>Fresh fruit</span>
              <div className="" style={{height:"350px"}}>
                <img src={pic6} alt="" style={{width:"100%", height:"100%"}} className=" rounded-3"/>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <div className="py-1">
          <h5 className="d-inline">Top ranking</h5>
          <span className="float-end">
            <a href="">View more</a>
          </span>
        </div>
        <div className="p-3 bg-white rounded-3">
          <div className="c1">
            <div className="row bg-white ">
              <h5>103,000+ products added today</h5>
              <div className="col-md-6 p-3">
                <div className="" style={{height:'157x'}}>
                <img src={pic2}  alt="" className=" rounded-3" style={{width:"100%",height:"100%"}}/>
                </div>
              </div>
              <div className="col-md-6 p-3">
                <div className="" style={{height:'157px'}}>
                <img src={pic3}  alt="" className=" rounded-3" style={{width:"100%",height:"100%"}}/>
                </div>
              </div>
              <div className="col-md-6 p-3">
                <div className="" style={{height:'157px'}}>
                <img src={pic6}  alt="" className=" rounded-3" style={{width:"100%",height:"100%"}}/>
                </div>
              </div>
              <div className="col-md-6 p-3">
                <div className="" style={{height:'157px'}}>
                <img src={pic1}  alt="" className=" rounded-3" style={{width:"100%",height:"100%"}}/>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="py-1">
          <h5 className="d-inline">Top ranking</h5>
          <span className="float-end">
            <a href="">View more</a>
          </span>
        </div>
        <div className="p-3 bg-white rounded-3">
          <div className="c1">
            <div className="row p-2 my-2 bg-white">
              <div className="col-md-4">
                <div className="" style={{height:"80px"}}>
                <img src={pic7} alt="" style={{width:"100%", height:"100%"}} className=" rounded-3"/>
                </div>
              </div>
              <div className="col-md-8">
                <h5>New This Week</h5>
                <span>Lowest prices in 180 days </span>
              </div>
            </div>
            <div className="row bg-white">
              <h5>Deals on best sellers</h5>
              <div>
              <div className="" style={{height:"260px"}}>
                <img src={pic8} alt="" style={{width:"100%", height:"100%"}} className=" rounded-3"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  </>
  )
}
export default Megha
