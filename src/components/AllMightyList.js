import React from 'react'
import InsertLinkIcon from '@mui/icons-material/InsertLink';


const AllMightyList = (props) => {
    const {title, size,date,uploader,category,img,url} = props

  return (

    <div className="list-all my-2">

    <div className='br title'>⦿ {title?.slice(0,70)}</div>
    {/* <InsertLinkIcon/> */}
    <div className='br size mx-2'>{size}30 GB</div>
    <div className='br uploader'>{uploader} Fitgirl </div>
<a href={url} target={'_blank'} className="btn mx-2 d-flex align-items-center  btn-primary"><InsertLinkIcon className='mx-1' fontSize='small'/> Dowload</a>

    </div>


  )
}

export default AllMightyList