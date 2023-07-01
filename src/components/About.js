import React, { Component } from 'react';
export default class About extends Component {
   detectMob() {
      if( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) )
      {
        console.log("small screen");
        return true;
      }
    }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
               {this.detectMob()?<img src="images/profilepic.jpg" alt="" />:null}
            </div>

            <div className="nine columns main-col">

               <h2>About Me <a href='./resume_upd.pdf'><img src="https://img.icons8.com/office/32/000000/open-resume.png"/></a> </h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
         
      </section>
    );
  }
}