import React from 'react'
import imdblogo from '../Assets/logos/imdb-logo-transparent.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const SerialCard = ({ title, img, imbd_link ,id }) => {

let HndleSerialRedirict =(id)=>{
    console.log(id);

    localStorage.setItem("Sid",id)
}

    return (
        <Link onClick={()=> HndleSerialRedirict(id)} to='/Serial-details-page' className='series-card my-4 text-decoration-none '>

            <div className="series-left-cont">
                <img src={img === null ? "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" : img.original} alt={title} height={'100%'} width={'200px'} />

            </div>



            <div className="series-right-cont">
                <h5 className='mx-3 my-4 h-8'>{title}</h5>
                <hr />
                <span className='mx-3'>Click the logo below for more <span className="mx-3">details 🡫</span></span>
                <br />
                <a href={imbd_link} target={'_blank'}>

                    <img className='mx-3 my-3' src={imdblogo} height='30px' width='60px' alt="" />
                </a>
                <br />
                <span className='mx-3 my-2'>Available in ➾ </span>
                <div className="my-2"></div>
                <span className='quality-type '>4K</span>
                <span className='quality-type'>1080p</span>
                <span className='quality-type'>720p</span>

                <Button sx={{width:'90%', m:1,mt:3}} variant={'contained'} className='w-full'>Download</Button>



            </div>



        </Link>
    )
}

export default SerialCard