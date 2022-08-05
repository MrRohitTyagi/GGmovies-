import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SerialCard from './SerialCard';
import "../All css/SearchSearial.css"
import loading from "../Assets/Ajax-Loading/Ajax-Loading.svg"


const Serial = () => {
    const [loadingSwitch, setloadingSwitch] = useState(false);

    const [AllSeriesData, setAllSeriesData] = useState([]);
    const [Inputval, setInputval] = useState('');

    useEffect(() => {

        


    }, [])

    let FetchData= ()=>{

        if (Inputval === "") { return }
        setloadingSwitch(true)
        const options = {
            method: 'GET',
            url: `https://movies-and-serials-torrent.p.rapidapi.com/tv_shows/search/${Inputval}`,
            headers: {
                'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
                'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            // console.log(response.data.data.serials);
            setAllSeriesData(response.data.data.serials)
            setloadingSwitch(false)

        }).catch(function (error) {
            console.error(error);
        });


    }
    let handleEnterDown = (e) => {
        if (e.key === "Enter") {
            FetchData()
        }

        // console.log(e); 

    }


    return (
        <div className='serial-container container'>
            
                
            

            <div className="center serial-search my-5">
                <input onKeyDown={(e) => handleEnterDown(e)} value={Inputval} onChange={(e) => setInputval(e.target.value)} placeholder="Enter series/serial name..." className="input" name="text" type="text" />
                <button onClick={FetchData} className='a-button mx-3'> Search</button>
            </div>

            {/* Cards portion  */}
            <div className="center">
                    {loadingSwitch && <img src={loading} alt='' />}
                </div>


            <div className="Searis-cards-cont">

                {

                    AllSeriesData?.map((ele, i) => (
                        <div key={i} className='fhjhsfdf'>
                            <SerialCard id={ele.id} title={ele.title} img={ele.poster} imbd_link={ele.imdb_id} />
                        </div>
                    ))

                }


            </div>




        </div>
    )
}

export default Serial