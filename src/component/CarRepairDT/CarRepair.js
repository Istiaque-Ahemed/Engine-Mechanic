import React, { useEffect } from 'react';
import { useState } from 'react';
import RepairDetails from '../RepairDetails/RepairDetails';
const CarRepair = () => {
    const [carRepair,setCarRepair] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8000/CarRepairingDT')
        .then(res => res.json())
        .then(data => setCarRepair(data))
    },[])
    return (
        <div>
            {
                carRepair.map(re => <RepairDetails 
                    key={re._id}
                    re={re}
                
                ></RepairDetails> )
            }
        </div>
    );
};

export default CarRepair;