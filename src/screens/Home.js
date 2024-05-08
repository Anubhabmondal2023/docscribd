import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <main>
        <div className="image">
          <img src="./images/doctor.png" alt="doctor_image" className="doctor_img"
            srcSet="https://png.pngtree.com/png-vector/20230929/ourmid/pngtree-indian-doctors-isolated-png-image_10130117.png"
            draggable="false"/>
        </div>
        <div className="text">
          <p className="bold_poetsen" >LET'S MAKE</p>
          <p className="tagline">Healthcare <em>Paperless</em> <br />Keep better track of <em>patients' case
            history.</em><br />Now only with <b>DocScribd!!</b></p>
        </div>
      </main>
      <div><Footer/></div>
    </div>
  )
}
