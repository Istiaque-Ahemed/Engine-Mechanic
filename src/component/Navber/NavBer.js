import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{bgcolor:'black'}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               engine mechanic
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default NavBer;

// [
//   {
//     miniTitle:"Auto Repair since 1967",
//     Hadline:"We're a Car Repair and Mechanic Shop in Seattle",
//     description:"Since 1967, Autolane proudly services cars by providing quality workmanship and friendly customer service for car repairs and preventative maintenance work. From brake repair and engine diagnostics to suspension changes and oil changes. ",
//     specality1:"Specialized services, customized to your needs",
//     specality2:"100% environmentally friendly chemicals",
//     specality3:"We supply all car equipment and solutions",
//     ceoImg:"https://i.ibb.co/8rQt6gd/person-pgyudiq0zrf3uqvjdjdlcrauqdkwq2vtqjaufi0whg.png",
//     signatureImg:"https://i.ibb.co/G0hJqWM/signature.png",
//     ceoName:"Harold Johnson",
//     ceoTitle:"CEO Autolane",
//     carRepair:"2500+",
//     carRepairText:"Cars Repaired this Year",
//     carRepairYear:"5429",
//     carRepairYearText:"Tires Replaced this Year",
//     carRepairImg1:"https://i.ibb.co/DWdSmDV/bangladesh.jpg",
//     carRepairImg2:"https://i.ibb.co/tzDtD54/engine-repair-2.jpg",
//     carRepairImg3:"https://i.ibb.co/vjzJSTN/performance-2.jpg"

//   }
// ]