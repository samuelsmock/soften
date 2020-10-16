import React from 'react';
import headshot from '../media/headshot.jpg';






class Bodywork extends React.Component {
  
        render(){
            return(
                <div className ="profile">
                    <div className ="info">
                        <p>
                            i have been trained in swedish massage, shiatsu, sports massage, and deep tissue massage. in my practice,
                            i like to bridge these varied modalities in order to provide a massage experience that meets your needs. 
                            pain and preferences differ vastly from person to person, therefore i make sure communication is open and 
                            clear so that you receive what you are looking for. as someone who is intimately acquainted with tension headaches, 
                            I specialize in working on the head, neck and shoulder regions and relieving such pain for others'. softening can require deep work. 
                            I would be honored to lend my hands in your process. 
                            <br/><br/>
                            rates:
                            <br/><br/>
                            75 minutes - $100
                            <br/><br/>
                            90 minutes - $120 
                            <br></br>
                            </p>
                        <p className= 'smallType'>
                        <i>sliding scale available upon request.</i>
                        </p>
                    </div> 
                      
                </div>
            );
        };
    }

export default Bodywork;