import React from 'react';
import mountain from "../media/mountain.png"
import cloud from "../media/cloud.png";




class Bodywork extends React.Component {
  
   

        render(){
            return(
                <div>
                    <div className ="grid-look">
                            <div className ="info">
                                <p>
                                    Softening can require deep work. 
                                    <br></br>
                                    I would be honored to lend my hands in your process.  
                                </p>
                            </div> 

                            <div className ="empty-space">
                                <img src = {cloud} alt ='' className = "doodle"/ >
                            </div>
                    </div>
                    <div className = "gap">&nbsp;</div>
                    <div className = "grid-dark">
                        <div className ="info">
                            <p className = "text">
                            In an age when unprecedented amounts of information filter through our brains all day, every day, it is imperative that we make the time to connect 
                            with our bodies. It is common to disconnect from the body as we manage the stress, grief and anxiety that accompany life in our modern era. The more 
                            we live inside of our minds, hunched over cellphones and curled up on the couch, the more stuck our bodies become, creating a feedback loop of mental
                            and physical tension.<br></br> <br></br>
                            In my experience as a recipient of bodywork, I’ve found that a pair of compassionate and knowledgeable hands can help me to let go of built up
                            tightness, creating a softening of body and mind.<br></br> <br></br>
                            I am trained in Swedish massage, Shiatsu, sports massage, and deep tissue massage. In my practice, I bridge these varied modalities in order to 
                            provide a massage experience that meets your needs. Pain and preferences differ vastly from person to person, therefore I make sure communication is 
                            open and clear so that you receive what you want. As someone who experiences chronic tension headaches, I have a personal interest in the intricate 
                            musculature of the head, neck and shoulders, and specialize in massaging those regions.
                            </p>
                        
                        </div> 
                    </div>                        
                    <div className = "gap">&nbsp;</div> 
                    <div className = "grid-look"> 
                        
                    <img src = {mountain} alt ='' className = "doodle" /> 
                        
                        <div className = "info">
                            <p className = "text">
                                    
                                    <h2>Rates:</h2>
                                    
                                    75 minutes - $100
                                    <br></br>
                                    90 minutes - $120 
                                    <br></br>
                                    <br></br>
                                    
                                    20% Off your first massage
                                    <br></br> <br></br>
                                    25% Off for all BIPOC, service industry workers, and mental health professionals
                                    
                                    
                                    <br></br>
                                    <br></br>
                                    
                                    <i className = "smallType">sliding scale or trade available upon request.</i>
                                
                            </p>         
                        </div>
                    </div>  
                    <div className = "gap">&nbsp;</div>       
                    <div className = "grid-dark">  
                        <div className = "info">
                        
                            <p classname = "text">
                                <h2>Testimonials:</h2>
                           

                                    “Taj Newman is more than a massage therapist. She is a warm hearted, conscious and intentional communicator.  Taj raised the bar for me on the kind of attention I could expect from a licensed bodyworker.” 
                                    <br></br><br></br><strong>- Lola Broomberg </strong>
                                    <br/><br/>
                                    <hr></hr>
                                    <br></br>
                                    “I’m 64 years old and have been regularly seeking out massage for over 35 years. I am very particular about who I let work on my body. I’ve learned from experience to be discerning. All massages ARE NOT EQUAL. Taj Newman is gifted in the art of massage and bodywork. If you’re looking for a light touch, I’d recommend looking elsewhere. If you’re looking for someone who will become intimately acquainted with each and every fiber of your musculature, Taj Newman is as good as it gets.”
                                    <br></br><br></br><strong>- Andy Traisman</strong>
                            </p>

                        </div>   
                    </div>     
                    </div>
                
            );
        };
    }

export default Bodywork;