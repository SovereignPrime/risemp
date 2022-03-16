// Modules
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import riseLogo from '../styles/assets/spLogo.png';



// Add Joseph's code for the image capture.

const UserInputs = () => {
     
return (
     <div className='wrapper'>
          <div className='userInputIntro'>
               <h2>RISE Account Setup</h2>
               <p>Please Enter Your Account Information</p>
          </div>
          <div className='forms'>
               <div className="logo">
                    <img src={riseLogo}></img>
               </div>
               <form className="formMaster">
                    <div className="nameBox">
                         <label htmlFor="first name">First Name:</label>
                              <input type="text" name="firstName" />
                    </div>
                    <div className="nameBox">
                         <label htmlFor="last name">Last Name:</label>
                         <input type="text" name="lastName" />
                    </div>
                    <div className="infoBox">
                         {/* Ideally this will be calandar input for users dob. */}
                         <label htmlFor="age">Age:
                         </label>
                         <input type="text" name="age"/>
                    </div>
                    <div className="infoBox">
                         <label htmlFor="height">Height:</label>
                         <input type="text" name="height"/>
                    </div>
                    <div className="infoBox">
                         <label htmlFor="sex">Sex:
                         </label>
                         <select className="dropDown"
                              id="sex"
                              name="sex"
                              // onChange={(e) => setUserChoice(e.target.value)}
                              // value={userChoice}
                         >
                         <option value="placeholder" disabled> Please select your sex</option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="other">Other</option>
                         </select>
                    </div>
                    <div className="addBox">
                         <label htmlFor="address">Address:
                         </label>
                         <input type="text" name="address"/>     
                    </div>
                    <div className="occBox">
                         <label htmlFor="occupation">
                              Occupation:</label>
                         <input type="text" name="occupation"/>
                         
                    </div>
                    <div className="bioBox">
                         <label htmlFor="bio">
                              Bio:</label>
                              <textarea id="message" className="message" placeholder="Your Message" name="message" cols="30"
                         rows="10" required=""></textarea>
                    </div>
               </form>                    
          </div>
          <input className="submitButton" type="submit" value="SUBMIT" />    
     </div>

     
)
};

export default UserInputs;
