import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./serviceDetails.css"

const ServiceDetalis = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const { bannerHeading,_id,
        bannerTille,
        pageHeaderImg,
        info1Heading,
        info1Details,
        info2heading,
        info2Details,
        infoImg,
        eyBenefitsHeading,
        eyBenefitsDetalis,
        KeyBenefits1,
        KeyBenefits2,
        KeyBenefits3,
        KeyBenefits4,
        ExtraPart1Heading,
        ExtraPart1Details,
        ExtraPart1Icon,
        ExtraPart2Heading,
        ExtraPart2Details,
        ExtraPart2Icon} = service;

    useEffect(() =>{
        fetch(`http://localhost:8000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))


    },[])
    return (
        <div>
           <img src={pageHeaderImg} alt="" />
           <div className='Hader-text'>
           <span>{bannerTille}</span>
           <h3>{bannerHeading}</h3>
           </div>
        </div>
    );
};

export default ServiceDetalis;