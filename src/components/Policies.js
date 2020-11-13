import React from 'react';
import beach from "../media/beach.jpg"  
import holding from "../media/holding.png"
import mountain from "../media/mountain.png"
import cloudWhite from "../media/cloud_white.png";



class Policies extends React.Component {


    render(){
        return(
            <div>
                <div className ="grid-look">
                        <div className ="text">
                            
                            <p>
                                <strong>Phone: </strong>
                                <br></br>
                           
                                541-359-5301
                            </p>
                            <p>
                            
                                <strong>Email: </strong>
                                <br></br>
                                
                                softenbodywork@gmail.com
                            </p>

                        </div> 
                        <div className ="info">
                            <img src = {holding} alt ='' className = "doodle"/ >
                        </div>

                        
                </div>
                <div className = "grid-look">
                    
                       
                        <p>
                            
                            <strong>Location:</strong> 
                            <br></br>
                      
                        116 Legion Way SE
                        <br></br>
                        Olympia, WA
                        <br></br>
                        98506
                        </p>
                   
                    <div className = "info">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.838999744086!2d-122.90279798438895!3d47.04338997915134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491751c42610235%3A0xb5d9df17da8efb22!2s116%20Legion%20Way%20SE%2C%20Olympia%2C%20WA%2098501!5e0!3m2!1sen!2sus!4v1605288200789!5m2!1sen!2sus" width="300" height="250" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
                    </div> 
              
                <div className = "gap">&nbsp;</div>
                <div className = "grid-dark">
                    <div className ="info">
                        <p className = "text">
                            <h2>Hours:</h2>
                            I am currently seeing massage therapy clients on Sundays and Mondays, by appointment only. 
                            Caregiving hours are determined as needed. 

                        </p>
                        
                    </div> 
                    <img src = {cloudWhite} alt ='' className = "doodle" /> 
                </div>                        
                <div className = "gap">&nbsp;</div> 
                <div className = "grid-look"> 
                    
                
                    
                    <div className = "info">
                        <p className = "text">
                                
                        <h2>COVID-19</h2>
In response to the risks associated with covid-19, I am committed to meeting state guidelines on sanitation and hygiene. Additionally, I will wear a mask for the 
entirety of our session together, and I ask that you do the same

                            
                        </p>         
                    </div>
                </div>  
                <div className = "gap">&nbsp;</div>       
                <div className = "grid-dark">  
                    <div className = "info">
                    
                        <p classname = "text">
                            <h2> Cancellation Policy</h2>
                    

                           
To cancel an appointment, please inform me at least 24 hours in advance in order to avoid being charged. Cancellations with less than 24 hours notice will be charged half price. 
However, if you begin to experience Covid-like symptoms at any point before your appointment, please let me know, and there will be no penalty for rescheduling your appointment. 

                        </p>

                    </div>   
                </div>     
            </div>
        );
    };
}

export default Policies;