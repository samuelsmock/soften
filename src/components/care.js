import React from 'react';
import headshot from '../media/headshot.jpg';
import candle from '../media/candle.jpg';
import greySky from "../media/grey_sky.jpg";
import touching from "../media/touching.png";



class Care extends React.Component {

  

    render(){
        return(
            <div>
                    <div className ="grid-look">
                            <div className ="info">
                                <p className = "text">                              
                                    Alongside my bodywork practice, I also work as a caregiver for the elderly, specializing in end-of-life care. As the body begins to shut down, 
                                    palliative care can help to ease a person’s transition into the unknown. My experience in the caregiving field has shown that it can be immensely
                                    helpful for a person to have an ally in their walk toward death, who is not a medical provider or immediate family member.
                              
                                </p>     
                                
                            </div>    
                            <img className = 'doodle' src = {touching} alt = ''/>     
                    </div>
                    <div className = "grid-look">
                        <div className ="info">
                                    <p className = "text">                              
                                        In the past, my caregiving
                                        has entailed any of the following: gentle massage, food preparation for client and/or client’s family, assistance toileting, conversation and
                                        quiet companionship. The relationship between a client and their caregiver is intimate, and expectations vary from family to family, so please
                                        reach out and we can explore whether my offerings fit your needs. 
                                        <h2>Rates:</h2>
                                    
                                    $35/hour
                                    <br></br>
                                    $200/overnight
                                  
                                    </p>    
                                   
                                    
                                    
                        
                                
                        </div>  
                      
                    </div>
                      

                    <div className = "gap">&nbsp;</div>
                    <div className = "grid-dark">
                        <div className ="info">
                            <p className = "text">
                            <h2>Testimonials </h2>
                            

                            “Taj is that rare creature that is informed by compassion in every move she makes, but she does not allow this compassion in any 
                            way to cause her to deny the patient any freedom of movement or to make decisions of their own. She is a rare combination of someone 
                            who provides caregiving, but does not allow that caregiving to in any way shortchange the patient in establishing his or her freedom of
                            expression. She is way better than anything I could say.”
                            <br></br>
                            -David W., caregiving client 
 
                            </p>
                        
                        </div> 
                    </div>                        
                        
                       
                    </div>
        );
    };
}

export default Care;