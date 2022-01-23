import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'; 

const Service = ({service}) => {
    const {bannerHeading,_id,
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
        ExtraPart2Icon
      } =service;
      const url =`/service/${_id}`;
    return (
        <>
        <div className='service-card'>
          <img style={{width:"250px"}} src={infoImg} alt="" />
            <div className='card-details'>
             <h5>{bannerHeading}</h5>
             <p className='service-text'>{info1Details.slice(0, 150)}</p>
             <Link to={url}>
             <Button variant='light'> Read More <i class="fas fa-arrow-right"></i></Button>
             </Link>
            </div>
        </div>
        </>
    );
};

export default Service;