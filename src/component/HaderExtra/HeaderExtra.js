import React from 'react';
import './HeaderExtra.css'
import MapIcon from '@mui/icons-material/Map';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import DirectionsIcon from '@mui/icons-material/Directions';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ReportIcon from '@mui/icons-material/Report';


const HeaderExtra = () => {
    return (
        <section className="extra-area">
            <div className="haderDetalis-1">
               <div className="haderInfo">
                    <MapIcon className="icon" sx={{ color: "red" ,fontSize:"50px",marginBottom:"20px"}}/>
                    <h6 className="fw-bold">Location Details</h6>
                    <p>336 
                     Woodbridge Lane Seattle, 3030 Washington
                    <br />
                      +(12) 123 - 556 - 7890
                    </p>
               </div>
            </div>
            <div className="haderDetalis-2">
                <div className="haderInfo">
                    <CarRepairIcon className="icon" sx={{ color: "red" ,fontSize:"50px",marginBottom:"20px"}}/>
                    <h6 className="fw-bold">Emergency Repair</h6>
                    <p>Low rates and emergency service available 24 hours a day every day of the year
                    </p>
               </div>
            </div>
            <div className="haderDetalis-3">
            <div className="haderInfo">
                    <DirectionsIcon className="icon" sx={{ color: "red" ,fontSize:"50px",marginBottom:"20px"}}/>
                    <h6 className="fw-bold">Location Details</h6>
                    <p>336 
                     Woodbridge Lane Seattle, 3030 Washington
                    <br />
                      +(12) 123 - 556 - 7890
                    </p>
               </div>
            </div>
            <div className="haderDetalis-4">
            <div className="haderInfo">
                    <EventAvailableIcon className="icon" sx={{ color: "red" ,fontSize:"50px",marginBottom:"20px"}}/>
                    <h6 className="fw-bold">Location Details</h6>
                    <p>336 
                     Woodbridge Lane Seattle, 3030 Washington
                    <br />
                      +(12) 123 - 556 - 7890
                    </p>
               </div>
           </div>

          <p className="text-center mt-5 warning"> <ReportIcon sx={{color:"yellow"}}/> We're open for business 6 days a week. See the <span>opening hours</span> of our workshop</p>

    </section>
    );
};

export default HeaderExtra;