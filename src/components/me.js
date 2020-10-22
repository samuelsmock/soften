import React from 'react';
import headshot from '../media/headshot.jpg';
import trees from '../media/nw_trail.jpg';
import yin from "../media/yinyang.png";




class Me extends React.Component {
    render(){
        return(
            <div className ="profile">
                
                
               
               
                <div className ="info">
                        
                    <p className = "wrapped-text"> 
                        my name is taj elly newman. i am a bodyworker and caregiver living in olympia, washington. i grew up in eugene, oregon, 
                        where i developed an intuitive relationship to massage by watching my mom trade back rubs with her friends as they shared 
                        about their lives. since leaving eugene, i lived in israel, where i received a bachelors degree in literature from tel aviv 
                        university and learned to speak hebrew. i also lived in new orleans for a beautiful four years, wherein i received my massage 
                        therapy training at delgado community college, and opened a home massage practice.  
                    </p>
                    <img className = 'picture' src = {headshot} alt = 'profile pic'/>
                </div>

                <div className = 'empty-space'> 
                    <img src = {yin} alt = '' className= 'yang'></img>
                </div>

                <div className = 'info'>
                    <img className= 'picture' src ={trees} alt = 'trees'/>
                    <p className = "wrapped-text">
                        since my return to the pacific northwest, i've also begun to give care to people approaching their death. i am excited to build a 
                        massage practice in olympia, while supporting elders in my community. when i'm not massaging or taking care of others, i love 
                        cooking, watching light dance on water and making art.
                    </p> 
                </div> 
            </div>
        );
    };
}

export default Me;