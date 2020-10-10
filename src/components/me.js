import React from 'react';
import headshot from '../media/headshot.jpg';






class Head extends React.Component {
    render(){
        return(
            <div className ="profile">
                
                
                <img id = 'headshot' src = {headshot} alt = 'profile pic'/>
              
                <div className ="info">
                    <h1 className = "large-print">about me:</h1>
                    <p>hi, my name is taj elly newman. i am a bodyworker and caregiver living in olympia, washington. i grew up in eugene, oregon, where i developed an intuitive relationship to massage by watching my mom trade back rubs with her friends as they shared about their lives. since leaving eugene, i lived in israel, where i received a bachelors degree in literature from tel aviv university and learned to speak hebrew. i also lived in new orleans for a beautiful four years, wherein i received my massage therapy training at delgado community college, and opened a home massage practice. since my return to the pacific northwest, i've begun giving care to people approaching their death. i am excited to build a massage practice in olympia, while supporting elders in my community. when i'm not massaging or taking care of other's, i love cooking, watching light dance on water and making art. </p>
                    <p className='contact'>
                        Contact: tajdotnewman@gmail.com
                    </p>
                    
                   
                </div>    
            </div>
        );
    };
}

export default Head;