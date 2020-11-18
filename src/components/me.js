import React from 'react';
import headshot from '../media/headshot.jpg';
import trees from '../media/nw_trail.jpg';
import yin from "../media/yinyang.png";
import sky from "../media/sky.png";
import grapes from "../media/grapes.png";



class Me extends React.Component {

    // componentDidMount(){
      
    //     document.body.style.backgroundImage = `url(${sky})`;
    // }
    render(){
        return(
            <div className = "column-center">
                <div className ="grid-look">
                    <img className = 'picture' src = {headshot} alt = 'profile pic'/>    
                    <div className ="info">
                        
                            <p> 
                            Welcome! My name is Taj Newman, and I am a bodyworker and caregiver living in Olympia, Washington (MA 61050645). I grew up in Eugene, Oregon, 
                            where I developed an intuitive relationship to massage by watching my mom trade back rubs with her friends as they shared about their lives. 
                            Since leaving eugene, I lived in Israel, where I received a bachelor's degree in literature from Tel Aviv University, and learned to speak Hebrew.
                         
                            </p>
                            
                    </div>  
                </div>
                <div className = "gap"></div>
               
                
                <div className="grid-dark">
                    <div className ="info">
                    <img src = {grapes} alt = '' className= 'doodle'></img>
                        <p>I also lived in New Orleans for a beautiful four years, wherein I received my massage therapy training at Delgado Community College, and opened a home massage
                            practice. Since my return to the Pacific Northwest, I've also begun giving care to people approaching death. I am excited to build a massage practice in Olympia, 
                            while supporting elders in my community. When I'm not taking care of others, I take care of myself by cooking, watching light reflect on water, walking in the 
                            woods and making art. 
                        </p>
                    </div>
                    
                </div>
               
                
                
            </div>
            
        );
    };
}

export default Me;