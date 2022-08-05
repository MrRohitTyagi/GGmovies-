import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function SimpleAccordion({ arr }) {
  console.log(arr);
  return (
    arr?.map(ele => (
      <div className='my-1'>

        <Accordion sx={{ backgroundColor: "gray" }}>



          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography varient='' >season <strong>{ele.season}</strong> Episode <strong>{ele.ep}</strong> <span className='mx-5'>Tap to view Details</span></Typography>
          </AccordionSummary>
          <AccordionDetails>

            <div className="d-flex">
              <Typography >
                <strong>AirDate :</strong>
              </Typography>
              <Typography className='mx-3'>{ele.airdate} </Typography>
            </div>
            <div className="d-flex">
              <Typography >
                <strong>Episode Name :</strong>
              </Typography>
              <Typography className='mx-3'>{ele.title} </Typography>
            </div>



            {
              ele?.torrent?.map(ele => (
                <>

                  <div className=" accordian-item my-1 py-1 px-1">

                    <div className="d-flex">

                      <Typography sx={{ fontSize: "20px", width: "5rem" }}>

                        Title :
                      </Typography>

                      <Typography sx={{ fontSize: "15px" }}>{(ele.title).trim()}</Typography>
                    </div>

                  <div className="d-flex">

                    <Button href={ele.url} target={"_blank"} className='mx-3' variant='contained' size='small' color='success'><OpenInNewIcon className='mx-2'/> Source</Button>
                    <Button href={ele.value} download={true} className='mx-3' variant='contained' size='small' color='success'><DownloadIcon className='mx-2'/> Direct Download</Button>
                  </div>
                  </div>

                </>

              ))
            }



          </AccordionDetails>



        </Accordion>


      </div>
    ))
  );
}
