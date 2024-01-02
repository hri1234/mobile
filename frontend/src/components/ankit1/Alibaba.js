import React from 'react'
import pic1 from '../../assets/images/shhh.png'
import pic2 from '../../assets/images/sh.png'
import pic3 from '../../assets/images/sh3.png'
import pic4 from '../../assets/images/sh4.png'
import pic5 from '../../assets/images/sh8.png'
import pic6 from '../../assets/images/crocks.jpg'
import pic7 from '../../assets/images/shoes2.png'
import pic8 from '../../assets/images/shoes3.png'
const Alibaba = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"white"}}>
    <h4 className="text-base text-muted font-semibold py-3">BIGGEST DEAL ON TOP BRAND</h4>
    <div className="row">
      <div className="col-md-3 col-6 mb-3">
        <div className="card">
          <div className="px-2 pt-2">
            <img src={pic1} className="card-img" />
          </div>
          <div className="card-body">
            <h6 className=" mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-3">
        <div className="card">
          <div className="px-2 pt-2">
            <img src={pic2} className="card-img" />      
          </div>
          <div className="card-body">
            <h6 className=" mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-3">
        <div className="card">
          <div className="px-2 pt-2">
            <img alt="..." src={pic3} className="card-img" />
          </div>
          <div className="card-body">
            <h6 className="mb-1">Up To 50% Off</h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-3">
        <div className="card">
          <div className="px-2 pt-2">
            <img src={pic4} className="card-img"/>
          </div>
          <div className="card-body">
            <h6 className="mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-3">
        <div className="card">
          <div className="px-2 pt-2">
            <img src={pic5} className="card-img"/>
          </div>
          <div className="card-body">
            <h6 className="mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-3">
        <div className="card">
          <div className="px-2 pt-2"><img src={pic6} className="card-img"/></div>
          <div className="card-body">
            <h6 className="mb-1"> Up To 50% Off</h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-3">
        <div className="card">
          <div className="px-2 pt-2">
            <img src={pic7} className="card-img"/>
          </div>
          <div className="card-body">
            <h6 className="mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-6 mb-3">
        <div className="card">
          <div className="px-2 pt-2"><img src={pic8} className="card-img" /> </div>
          <div className="card-body">
            <h6 className="mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Alibaba

