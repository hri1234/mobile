import React from 'react'
import './megha.css'
import pic1 from '../../assets/images/wo1.png'
import pic2 from '../../assets/images/wo3.png'
import pic3 from '../../assets/images/wo9.png'
import pic4 from '../../assets/images/wo9.png'
import pic5 from '../../assets/images/crock(1).png'
const Megha = () => {
  return (
    <div className="container-fluid " style={{backgroundColor:"#fff" }}>
    {/* <h2 className="my-4 ">Discover your next business opportunity</h2> */}
    <div className="row">
      <div className="col-md-4 ">
        <div className="py-1">
          {/* <h5 className="d-inline">Top ranking</h5> */}
          <span className="float-end">
            {/* <a href="">View more</a> */}
          </span>
        </div>
        <div id="carouselExampleFade"
            className="carousel slide carousel-fade bg-white rounded-3"
            data-bs-ride="carousel">
          <div className="carousel-inner p-3">
            <div className="carousel-item active">
              {/* <h5>Most Popular</h5>
              <span>Fresh fruit</span> */}
              <div className="">
                <div className="bg-fruit-1 rounded-3">
                  <span className="bg-light rounded-2">
                    popularity score:4.4
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* <h5>Most Popular</h5>
              <span>Fresh fruit</span> */}
              <div className="bg-fruit-2 rounded-3">
                <span className="bg-light rounded-2">popularity score:4.4</span>
              </div>
            </div>
            <div className="carousel-item">
              {/* <h5>Most Popular</h5>
              <span>Fresh fruit</span> */}
              <div className="bg-fruit-3 rounded-3">
                <span className="bg-light rounded-2">popularity score:4.4</span>
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
      <div className="col-md-4 col-6">
        <div className="py-1">
          {/* <h5 className="d-inline">Top ranking</h5> */}
          <span className="float-end">
            {/* <a href="">View more</a> */}
          </span>
        </div>
        <div className="p-3 bg-white rounded-3">
          <div className="c1">
            <div className="row bg-white ">
              {/* <h5>103,000+ products added today</h5> */}
              <div className="col-md-6 p-2">
                <img src={pic1}  alt="" className="img-fluid rounded-3"/>
              </div>
              <div className="col-md-6 p-2">
                <img src={pic2}  alt="" className="img-fluid rounded-3"/>
              </div>
              <div className="col-md-6 p-2">
                <img src={pic5}  alt="" className="img-fluid rounded-3"/>
              </div>
              <div className="col-md-6 p-2">
                <img src={pic3}   alt="" className="img-fluid rounded-3"/>
              </div>
            </div>
            {/* <div className="row p-2 my-2 bg-white">
                <div className="col-md-4" style={{height:"20px"}}>
                    <img src={pic4}  alt="" className="img-fluid rounded-3" style={{height:"20px"}}/>
                </div>
              <div className="col-md-8">
                <h5>New This Week</h5>
                <span>Product from verified suppliers</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-4 col-6">
        <div className="py-1">
          {/* <h5 className="d-inline">Top ranking</h5> */}
          <span className="float-end">
            {/* <a href="">View more</a> */}
          </span>
        </div>
        <div className="p-3 bg-white rounded-3">
          <div className="c1 ">
            <div className="row p-2 my-2 bg-white">
              <div className="col-md-4">
                <img
                  src={pic5}
                  alt=""
                  className="img-fluid rounded-3"/>
              </div>
              <div className="col-md-8">
                <h5>New This Week</h5>
                <span>Lowest prices in 180 days </span>
              </div>
            </div>
            <div className="row bg-white">
              <h5>Deals on best sellers</h5>
              <div>
                <div className="bg-fruit-4 rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Megha
