import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chip from '@mui/material/Chip';
import SerialAccordian from './SerialAccordian'

import ImbdLogo from '../Assets/logos/imdb-logo-transparent.png'
import netflex from '../Assets/logos/netflix-logo-png-2562.png'

import spinner from '../Assets/Ajax-Loading/Ajax-Loading.svg'

const SerialDetails = () => {
    const [ele, setele] = useState([]);
    const [Finishloading, setFinishloading] = useState(false);

    const [spinnerLoad, setspinner] = useState(true);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://movies-and-serials-torrent.p.rapidapi.com/tv_shows/serial/${localStorage.getItem('Sid')}`,
            headers: {
                'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
                'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.data.serial);
            setele(response.data.data.serial)
            setFinishloading(true)
            setspinner(false)

        }).catch(function (error) {
            console.error(error, "error");
        });

    }, [])


    return (
        <>


            {spinnerLoad &&
                <div className="center">

                    <img src={spinner} alt="" />
                </div>
            }

            {Finishloading &&
                <>
                    <div className='serial-detail-page container'>

                        <div className="Serial-top-cont my-5">


                            <div className="serial-left-cont mx-5">

                                <img className='serial-img' src={ele.poster.original} height='500px' width='400px' alt="" />
                            </div>


                            <div className="serial-right-cont mx-5">
                                <div className='flex-wrap my-4'>

                                    <h2>{ele.title}</h2>
                                </div>

                                <div className='my-5'>{ele.genre?.map(e => {
                                    return e.name + " / "
                                })}</div>

                                <div className="d-flex text-center my-4 ">


                                    <h6>View details on</h6>
                                    <a href={ele.imdb_id} target={'_blank'}>

                                        <img className='mx-3' src={ImbdLogo} alt="" height={'30px'} width={'60px'} />
                                    </a>
                                </div>

                                <div className="d-flex  origin my-4">
                                    <h4>Origin :</h4> <h4 className='mx-3'>{ele.network[0].name === "Netflix" ? <img className='mx-3' src={netflex} alt="" height={'30px'} width={'60px'} /> : ele.network[0].name}</h4>
                                </div>


                                <div className="episode">
                                    <h5>No of Episodes :  <strong className=''><Chip label={ele.ep.length} variant="outlined" color='success' /></strong></h5>
                                </div>
                                <div className="country my-3 d-flex">
                                    <span>Country : </span>
                                    <h3 className='mx-3'>

                                    {

                                    ele?.country[0]?.name ? ele?.country[0]?.name: ""

                                    }
                                    </h3>
                                </div>


                            </div>


                        </div>

                        <div className="py-5 d-flex flex-wrap serial-second-cont container">

                            <div className="second-left">

                                <div className="description ">

                                    {ele.description[0].body.slice(3, ele.description[0].body.length - 4)}
                                </div>
                            </div>

                            <div className="mx-3 second-right">

                                <h3 className='my-5'>Main cast</h3>

                                <div className="d-flex fsdjf">

                                    {


                                        ele?.character?.map((ele, i) => (
                                            <>
                                                <div className="character-card d-flex mx-2 my-2">

                                                    {ele.file.length !== 0 &&
                                                        <div className="cast-card">
                                                            <img src={ele?.file[0]?.original} alt="" height={'120px'} />

                                                        </div>}
                                                    <div className="char-right mx-2">
                                                        <span className='smalltxt my-5'>{ele.name}</span>

                                                    </div>
                                                </div>

                                            </>
                                        ))
                                    }
                                </div>

                            </div>

                        </div>
                        <div className="center"><strong style={{ color: "red" }} className="mx-3"> Note : You must have Utorent Web installed  <a className='mx-2' target={'_blank'} href="https://www.utorrent.com/">Here</a>else direct download links won't work </strong></div>



                        <div className="serial-download-container py-5 ">
                            <SerialAccordian arr={ele.ep} />
                        </div>



                    </div>
                </>
            }
        </>
    )
}

export default SerialDetails