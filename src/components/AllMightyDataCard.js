import React from 'react'
import '../All css/AllmightyCss.css'

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import InsertLinkIcon from '@mui/icons-material/InsertLink';


const AllMightyDataCard = (props) => {
    const { title, size, date, uploader, category, img, url } = props
    // console.log(img);
    return (
        <div className='AllData-card my-5'>


            <img src={img} alt="Image Not Found" className="all-img" />
            <div className="all-right-cont">
                <h4 className='mb-0 mx-4 text-center '>{title?.slice(0, 20)}</h4>
                <hr />
                <span className='mx-4  opacity-50 disabled'>{date}</span>
                <div className="d-flex align-items-center">

                    <span className=' mx-4'>{uploader}</span> <span className='align-items-center'><CloudDownloadIcon className='mx-2' /> {size}</span>
                </div>
                <div className="d-flex align-items-center">

                    <span className='mx-4 '>catagory :</span> <span className='mx-4 cata' >{category} </span>
                </div>

                <a href={url} style={{ textDecoration: "none" }} target={'_blank'} className=' mx-4'> <div variant='outlined' color='success' size='large'><InsertLinkIcon /> Source</div> </a><a href={props.dld} className="btn-primary btn">Download</a>
                {/* <div className='btn btn-warning'></div> */}
                <div className="d-flex align-items-center flex-wrap">
                    <div className="d-flex align-items-center">


                    </div>
                </div>
            </div>


        </div>
    )
}

export default AllMightyDataCard