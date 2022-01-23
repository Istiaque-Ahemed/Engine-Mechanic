import React from 'react';
import {Container} from "react-bootstrap"
import './Footer.css';

const Footer = () => {
    return (
    
            <section className="Footer">
                <Container className='Footer-2'>
                    <div className='About-autolane'>
                    <h4 className='About-title'>About AutoLane</h4>
                    <p className='datelis'> Autolane is built for Auto Repair and Car Maintenance shops but is suitable for all companies with related services. Novice or experienced in WordPress, this theme will fit your needs to build a website that will stand out.</p>
                    </div>
                    <div>
                        <h1 className='text-denger'>hey</h1>
                    </div>
                    <div>
                    <h5 className='About-title'>Contact Details</h5>
                            
                            <div className='icong'>
                                <div>
                                    <i class="fas fa-globe-americas add-icon"></i>
                                </div>
                                <div >
                                    <span className='address'>346 Woodbridge Lane</span><br />
                                    <span className='address1'>Seattle, United States</span>
                               </div>
                            </div>
                            <hr style={{color:"rgb(245 245 245)",marginTop:"25px",marginBottom:"25px"}} />
                            <div className='icong'>
                                <div>
                                <i class="fas fa-phone-alt add-icon"></i>
                                </div>
                                <div >
                                    <span className='address'>+21 347 678 901</span><br />
                                    <span className='address1'>Mon till Fri: 8:00 till 6:00</span>
                               </div>
                            </div>
                            <hr style={{color:"rgb(245 245 245)",marginTop:"25px",marginBottom:"25px"}} />
                            <div className='icong'>
                                <div>
                                <i class="fas fa-envelope add-icon"></i>
                                </div>
                                <div >
                                    <span className='address'>info@autolane.com</span><br />
                                    <span className='address1'>We reply within 1 day</span>
                               </div>
                            </div>
                        </div>  
                    <div className='opening-details'>
                    <h5 className='About-title'>Opening Hours</h5>
                    <div >
                        
                            <div className="opening-hours">
                            <p style={{marginRight:""}}>Monday</p>
                            <span className='time'>08:00 - 18:00</span>
                            </div>
                           
                            <hr style={{color:"rgb(245 245 245)",margin:"0px"}} />

                            <div className="opening-hour">
                            <p style={{marginRight:""}}>Tuesday</p>
                            <span className='time'>08:00 - 18:00</span>
                            </div>
                             <hr style={{color:"rgb(245 245 245)",margin:"0px"}} />

                            <div className="opening-hour">
                            <p style={{marginRight:""}}>Wednesday</p>
                            <span className='time'>08:00 - 18:00</span>
                            </div>
                             <hr style={{color:"rgb(245 245 245)",margin:"0px"}} />

                            <div className="opening-hour">
                            <p style={{marginRight:""}}>Thursday</p>
                            <span className='time'>09:00 - 15:30</span>
                            </div>

                            <hr style={{color:"rgb(245 245 245)",margin:"0px"}} />

                            <div className="opening-hour">
                            <p style={{marginRight:""}}>Friday</p>
                            <span className='time1'>We're Closed</span>
                            </div>

                            <hr style={{color:"rgb(245 245 245)",margin:"0px"}} />

                            <div className="opening-hour">
                            <p style={{marginRight:""}}>Saturday</p>
                            <span className='time'>08:00 - 18:00</span>
                            </div>
                            <hr style={{color:"rgb(245 245 245)",margin:"0px"}} />

                            <div className="opening-hour">
                            <p style={{marginRight:""}}>Sunday</p>
                            <span className='time'>08:00 - 18:00</span>
                            </div>
                
                          
                    
                    </div>
                    </div>
                </Container>

            </section>
        
    );
};

export default Footer;

//     