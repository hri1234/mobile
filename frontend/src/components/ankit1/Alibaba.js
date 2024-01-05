import React from 'react'
import pic1 from '../../assets/images/shhh.png'
import pic2 from '../../assets/images/sh.png'
import pic3 from '../../assets/images/sh3.png'
import pic4 from '../../assets/images/sh4.png'
import pic5 from '../../assets/images/sh8.png'
import pic6 from '../../assets/images/crocks.jpg'
import pic7 from '../../assets/images/shoes2.png'
import pic8 from '../../assets/images/shoes3.png'
import Products from '../Products/Products'
import { Link } from 'react-router-dom'
const Alibaba = () => {
  return (
    <>
    <Link to ="/Products">

    <div className="container-fluid" style={{backgroundColor:"#fff"}}>
    <h4 className="text-base text-muted font-semibold py-3">BIGGEST DEAL ON TOP BRAND</h4>
    <div className="row">
      <div className="col-lg-3 col-6 col-md-4 mb-2 p-2">
        <div className="card border-0 shadow">
          <div className="px-2 pt-2" style={{height:"200px"}}>
            <img src={pic1} className="" style={{width:"100%" ,height:"100%"}}/>
          </div>
          <div className="card-body">
            <h6 className=" mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6 col-md-4 mb-2 p-2">
        <div className="card  border-0 shadow">
          <div className="px-2 pt-2" style={{height:"200px"}} >
            <img src={pic2} className="" style={{width:"100%" ,height:"100%"}} />      
          </div>
          <div className="card-body">
            <h6 className=" mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6 col-md-4 mb-2 p-2">
        <div className="card  border-0 shadow">
          <div className="px-2 pt-2" style={{height:"200px"}}>
            <img alt="..." src={pic3} className="" style={{width:"100%" ,height:"100%"}} />
          </div>
          <div className="card-body">
            <h6 className="mb-1">Up To 50% Off</h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6 col-md-4 mb-2 p-2">
        <div className="card  border-0 shadow">
          <div className="px-2 pt-2" style={{height:"200px"}}>
            <img src={pic4} className="" style={{width:"100%" ,height:"100%"}}/>
          </div>
          <div className="card-body">
            <h6 className="mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6 col-md-4 mb-2 p-2">
        <div className="card  border-0 shadow">
          <div className="px-2 pt-2" style={{height:"200px"}}>
            <img src={pic5} className="" style={{width:"100%" ,height:"100%"}}/>
          </div>
          <div className="card-body">
            <h6 className="mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6 col-md-4 mb-2 p-2">
        <div className="card  border-0 shadow">
          <div className="px-2 pt-2" style={{height:"200px"}}>
            <img src={pic6} className="" style={{width:"100%" ,height:"100%"}}/>
            </div>
          <div className="card-body">
            <h6 className="mb-1"> Up To 50% Off</h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6 col-md-4 mb-2 p-2">
        <div className="card  border-0 shadow">
          <div className="px-2 pt-2" style={{height:"200px"}}>
            <img src={pic7} className="" style={{width:"100%" ,height:"100%"}}/>
          </div>
          <div className="card-body">
            <h6 className="mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6 col-md-4  mb-2 p-2">
        <div className="card  border-0 shadow">
          <div className="px-2 pt-2" style={{height:"200px"}}>
            <img src={pic8} className="" style={{width:"100%" ,height:"100%"}} />
             </div>
          <div className="card-body">
            <h6 className="mb-1">
              Up To 50% Off
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Link>
  </>
  )
}

export default Alibaba

