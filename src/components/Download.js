import React from 'react'
import '../All css/download.css'
import { Button } from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import computer from '../media/computer.png'
import StorageIcon from '@mui/icons-material/Storage';
import ClearIcon from '@mui/icons-material/Clear';




const download = ({ torrents }) => {


  // console.log(torrents);


let handlecut = ()=>{

  document.querySelector('.dowbload-cont').style.display = "none" 
  
  document.querySelector('.landing-page-cont').style.opacity="100%"
  document.querySelector('.landing-page-cont').style.filter ="blur(0px)"


}
  return (
    <div className='main-cont'>
      <ClearIcon onClick={handlecut} size='large' className='cross'/>
      {
        torrents?.map((ele, i) => {
          return <div key={i} className="box">

            
            <img className='my-1' src={computer} alt="" height={'80px'} width={'80px'} />
            <span className='dasgd'>{ele.quality}</span>
            <div className="size my-3 d-flex">
              {<StorageIcon className='mx-3'/>} <span className='underline fs-6'>{ele.size}</span>
            </div>


            <Button size="small" download color="warning" variant="contained" href={ele.url}>{<CloudDownloadIcon className='mx-2' />}Download</Button>

          </div>
        })


      }

    </div>
  )
}

export default download