import React,{useEffect, useState} from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices] = useState([]);
 

    useEffect(() =>{
        fetch('http://localhost:8000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    
    return (
        <>
       
        <div className='services'>
        <div className='text'>
       <div>
       <span>Repair and Maintenance</span>
        <h1>Our Services</h1> 
       </div>
       <p>Our repair service keeps your vehicle moving. From minor repairs to major repairs of your vehicle. We offer a variety of services and you can count on us for all of your vehicle’s needs.</p>

        </div>
        
             <div className='single-service'>
             {
                services.map(service =><Service
                key={service._id}
                service={service}
                
                ></Service>)
            }
             </div>
    

         </div>
         
        </>
    );
};

export default Services;


