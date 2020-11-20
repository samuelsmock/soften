import React from 'react';







class Footer extends React.Component {
    render(){
        return(
            <div className ="footer">
                
                
               
                
                <div className='grid'>
                    <div className = "grid-item">
                        <p>
                            Copyright © 2020 soften bodywork and care
                            <br></br>
                            MA 61050645 
                        </p>
                    </div>        
                    <div className = "grid-item">   
                        <p>
                            email: softenbodywork@gmail.com
                            <br></br>
                            ph: 541-359-5301
                        </p>
                    </div>
               

                    <div className = "grid-item">
                       
                        <p>
                            
                            <strong>Location:</strong> 
                            <br></br>
                      
                        116 Legion Way SE
                        <br></br>
                        Olympia, WA 98506
                        </p>
                    </div>
                    <div className = "grid-item">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.838999744086!2d-122.90279798438895!3d47.04338997915134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491751c42610235%3A0xb5d9df17da8efb22!2s116%20Legion%20Way%20SE%2C%20Olympia%2C%20WA%2098501!5e0!3m2!1sen!2sus!4v1605288200789!5m2!1sen!2sus" width="300" height="250" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div> 
                    
     
                  
            </div>
        );
    };
}

export default Footer;