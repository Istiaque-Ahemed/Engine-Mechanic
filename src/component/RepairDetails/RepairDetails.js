import React from 'react';
import './RepairDetails.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CountUp from 'react-countup';


const RepairDetails = ({re}) => {
    const {miniTitle,Hadline,description,specality1,specality2,specality3,ceoImg,signatureImg,ceoName,ceoTitle,carRepairText,carRepairYearText,carRepairImg1,carRepairImg2,carRepairImg3,} = re;
    return (
        <div className="car-repair">
            <div className="first-part">
                <p className="mini-title">{miniTitle}</p>
                <h1>{Hadline}</h1>
                <p className="description">{description}</p>
                <CheckCircleIcon sx={{color:"green",marginRight:"10px"}}/> <span className="span-1">{specality1}</span> <br />
                <CheckCircleIcon sx={{color:"green",marginRight:"10px"}}/><span className="span-2">{specality2}</span><br />
                <CheckCircleIcon sx={{color:"green",marginRight:"10px"}}/> <span className="span-3">{specality3}</span>
                <hr style={{width:"500px",margin:"40px 0px 40px 0px"}} />
                <div className="ceo-part">
                   <img style={{width:"50px",height:"50px",marginRight:"38px"}} src={ceoImg} alt="" />
                   <div style={{marginRight:"15px"}}>
                   <span style={{fontSize:"18px",fontWeight:"700"}}>{ceoName}</span><br />
                   <span style={{fontSize:"18px",fontWeight:"700", color:"red",marginRight:"32px"}}>{ceoTitle}</span>
                   </div>
               
                    <img src={signatureImg} alt="" />
                </div>
            </div>
            <div className="second">
           
                <div className="car-pic">
                    <CountUp style={{color:"red",fontWeight:"700",fontSize:"66px"}} start={500} end={2500} duration={5}/> <span  style={{color:"red",fontWeight:"700",fontSize:"66px"}}>+</span>
                <p style={{fontSize:"18px",fontWeight:"700"}}>{carRepairText}</p>
                <img src={carRepairImg1} style={{width:"235.75px",height:"399px",objectFit:"cover",borderRadius: "2px 2px 2px 2px"}}alt="" />

                </div>
                <div className="car-pic2">
                <CountUp style={{color:"red",fontWeight:"700",fontSize:"66px"}} start={2000} end={5429} duration={5}/>
                <p style={{fontSize:"18px",fontWeight:"700"}}>{carRepairYearText}</p>
                <div className='pic'>
                    <img style={{width:"240.75px",height:"170px",objectFit:"cover",marginBottom:"50px",borderRadius: "2px 2px 2px 2px"}} src={carRepairImg2} alt="" />
                    
                    <img style={{width:"240.75px",height:"179px",objectFit:"cover",borderRadius: "2px 2px 2px 2px"}} src={carRepairImg3} alt="" />
                </div>


                
                </div>
                
            </div>
        </div>
    );
};

export default RepairDetails;   
