import React from 'react';
import headshot from '../media/headshot.jpg';
import candle from '../media/candle.jpg'





class Care extends React.Component {
    render(){
        return(
            <div className ="profile">
                <div className ="info">
                       
                    <p>
                        alongside my bodywork practice, i also work as a caregiver for the elderly, specializing in end-of-life care. 
                        <br/><br/>
                        as the body begins to shut down, palliative care can help to ease a person’s transition into the unknown.
                        my experience in this field has shown me that it can be helpful for a dying person to have an ally in their walk toward death, 
                        who is not a medical provider or family member.
                        <br/><br/>
                    </p> 
                    <img src = {candle} className = 'picture' alt = ''></img>       
                </div>

               

                <div className = 'info'>           
                        <p>
                            i work with the body through gentle massage, as well as in the emotional sphere, 
                            by offering a listening ear and compassionate presence. this work is intimate and expectations vary from family to family, so please 
                            reach out and we can explore whether my offerings fit your needs. 
                            <br/><br/>
                            rates vary
                        </p>
                        <br/><br/>
                        
                </div> 
                  
            </div>
        );
    };
}

export default Care;