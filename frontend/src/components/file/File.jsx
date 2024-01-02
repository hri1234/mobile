import './Home.css'
import React from 'react'
import pic1 from '../../assets/images/ama1.jpg'
import pic2 from '../../assets/images/ama2.jpg'
import pic3 from '../../assets/images/ama3.jpg'
import pic4 from '../../assets/images/ama4.jpg'
import pic5 from '../../assets/images/ama5.jpg'
import pic6 from '../../assets/images/ama6.jpg'
import pic7 from '../../assets/images/ama7.jpg'
import pic8 from '../../assets/images/ama8.jpg'
const File = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:"white"}}>
        <div className="row">
          <div className="col-lg-4">
            <div className="row m-1" style={{ backgroundColor: "white" }}>
              <h5 className='mt-4 mb-4' style={{ fontWeight: "600" }}>Festive Gifting $ Collections
                <i class="fa fa-angle-right my float-end" style={{
                  backgroundColor: "rgb(28, 65, 214)",
                  borderRadius: "50%", color: "white", height: "25px", width: "25px", textAlign: "center", lineHeight: "25px"}}></i></h5>
                <div className="col-md-6 col-6">
                <div class="card">
                  <div className="" style={{height:"170px"}}>
                  <img src={pic1}  style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div class="card-body">
                    <h6 className="card-title sup">Women's Kurtas</h6>
                    <h6 className="card-title super">Min. 50% Off</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div class="card">
                <div className="" style={{height:"170px"}}>
                  <img src={pic2}  style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div class="card-body">
                    <h6 className="card-title sup">Women's Pars</h6>
                    <h6 className="card-title super">Min. 30% Off</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-6 mt-3">
                <div class="card">
                <div className="" style={{height:"170px"}}>
                  <img src={pic3}  style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div class="card-body">
                    <h6 className="card-title sup">Women's Kurtas</h6>
                    <h6 className="card-title super">Min. 50% Off</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-6 mt-3">
                <div class="card">
                <div className="" style={{height:"170px"}}>
                  <img src={pic4}  style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div class="card-body">
                    <h6 className="card-title sup">Women's Bag</h6>
                    <h6 className="card-title super">Min. 10% Off</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row m-1" style={{ backgroundColor: "white" }}>
              <h5 className='mt-4 mb-4' style={{ fontWeight: "600" }}>New Styles for Her
                <i class="fa fa-angle-right my float-end" style={{
                  backgroundColor: "rgb(28, 65, 214)",
                  borderRadius: "50%", color: "white", height: "25px", width: "25px", textAlign: "center", lineHeight: "25px"}}></i></h5>
              <div className="col-md-6 col-6">
                <div class="card">
                <div className="" style={{height:"170px"}}>
                  <img src={pic5}  style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div class="card-body">
                    <h6 className="card-title sup">Women's Kurtas</h6>
                    <h6 className="card-title super">Min. 50% Off</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div class="card">
                <div className="" style={{height:"170px"}}>
                  <img src={pic6}  style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div class="card-body">
                    <h6 className="card-title sup">Women's Pars</h6>
                    <h6 className="card-title super">Min. 60% Off</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-6 mt-3">
                <div class="card">
                <div className="" style={{height:"170px"}}>
                  <img src={pic7}  style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div class="card-body">
                    <h6 className="card-title sup">Women's Watch</h6>
                    <h6 className="card-title super">Min. 70% Off</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-6 mt-3">
                <div class="card">
                <div className="" style={{height:"170px"}}>
                  <img src={pic8}  style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div class="card-body">
                    <h6 className="card-title sup">Women's Kurtas</h6>
                    <h6 className="card-title super">Min. 50% Off</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card1">
              <div class="overlap-group-wrapper">
                <div class="overlap-group">
                  <div class="text-box">
                    <div class="frame">
                      <div class="text-wrapper">Shop your fashion Needs</div>
                      <p class="with-latest-trendy">with Latest &amp; Trendy Choices</p>
                    </div>
                    <div class="fill-button">
                      <div class="div">Shop Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
    </>
  )
}
export default File

