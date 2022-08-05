import React, { useEffect, useState } from 'react'
import '../All css/AllmightyCss.css'
import '../All css/input and buttnon.css'
import AllMightyDataCard from './AllMightyDataCard'
import axios from 'axios'
import AllMightyList from './AllMightyList'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { Button } from '@mui/material'

import ProgressBar from "./ProgressBar"

const AllMightySearch = () => {
    const [searchButton, setsearchButton] = useState(true);
    const [progressbarvisibility, setprogressbarvisibility] = useState(false);
    const [showadvancesearch, setshowadvancesearch] = useState(false);
    const [advancesearchinpurval, setadvancesearchinpurval] = useState('');
    const [listToCardchanger, setlistToCardchanger] = useState(false);
    const [totalResults,settotalResults] = useState();


    const [viewchanger, setviewchanger] = useState('Click for Detailed View');
    const [Inpval, setInpval] = useState('');
    const [allData, setallData] = useState([]);
    const [ShowingresultsFor, setShowingresultsFor] = useState('');
    const [Detailesbutton,setDetailesbutton] = useState(false);


    // useEffect(() => {
    //     setprogressbarvisibility(true)

    //     if (Inpval === "") {
    //         return
    //     }

    //     const options = {
    //         method: 'GET',
    //         url: 'https://torrent-search2.p.rapidapi.com/v1/all/search',
    //         params: { query: Inpval },
    //         headers: {
    //             'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
    //             'X-RapidAPI-Host': 'torrent-search2.p.rapidapi.com'
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data.data);
    //         setallData(response.data.data)
    //         setsearchButton(false)
    //         setShowingresultsFor(Inpval)
    //         setprogressbarvisibility(false)
    //         setshowadvancesearch(true)


    //     }).catch(function (error) {
    //         console.error(error);
    //         FetchData()
    //     });

    // }, [])

    let FetchData = () => {
        if (Inpval === "") {
            return
        }
        setprogressbarvisibility(true)


        const options = {
            method: 'GET',
            url: 'https://torrent-search2.p.rapidapi.com/v1/all/search',
            params: { query: Inpval },
            headers: {
                'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
                'X-RapidAPI-Host': 'torrent-search2.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            settotalResults(response.data.total + " "+" Results Found")
            setallData(response.data.data)
            setsearchButton(false)
            setShowingresultsFor(Inpval)
            setprogressbarvisibility(false)
            setshowadvancesearch(true)
            setDetailesbutton(true)



        }).catch(function (error) {
            console.error(error);
            FetchData()
        });
    }
    let filterArr = []
    let HandleAdvanceSearch = (e) => {
        setadvancesearchinpurval(e)

        filterArr = allData.filter(ele => {
            if (ele.name === undefined) {
                return
            }
            return ele.name.toLowerCase().trim().includes(e)
        })
        setallData(filterArr)


    }
    let handleview = () => {


        setlistToCardchanger(!listToCardchanger)
        setviewchanger(viewchanger ==='Click for detailed View' ? 'Click for List View' :'Click for detailed View')
    }
    let handleEnterDown = (e) => {
        if (e.key === "Enter") {
            FetchData()
        }

        // console.log(e); 

    }

    return (
        <div className='all-cont  my-4 '>
            <div className="center">Get bulk data from 10 + torrents sites with direct download link <strong style={{ color: "red" }} className="mx-3"> Note : You must have Utorent Web installed  <a className='mx-2' target={'_blank'} href="https://www.utorrent.com/">Here</a>else download links won't work </strong></div>
            <hr />
            <div className="center">

                <h3>{ShowingresultsFor}</h3>
            </div>
            {searchButton && <div className="center serial-search my-5">
                <input onKeyDown={(e) => handleEnterDown(e)} value={Inpval} onChange={(e) => setInpval(e.target.value)} placeholder="Enter series/serial name..." className="input" name="text" type="text" />
                <button onClick={FetchData} className='a-button mx-3'> Search</button>
            </div>}


            {showadvancesearch && <div className="advance-search my-4 center">
                <input onChange={(e) => HandleAdvanceSearch(e.target.value)} className='btn btn-outline-primary mx-4' type="text" name="" id="" placeholder='Advance search' />
                <button className='btn btn-success' >Search</button>
            </div>}


            {Detailesbutton && <div  className="center my-5">

                <Button onClick={handleview} className='text-center' variant='contained'>{viewchanger}</Button>
            </div>}

            <div className="  mx-5 container capitalize">
                {totalResults} 
            </div>

            {progressbarvisibility && <ProgressBar />}


            {listToCardchanger && <div className="all-search-results">
                {allData?.map((ele, i) => {



                    <div className="view">
                        <div className="d-flex"><TouchAppIcon />{viewchanger}</div>
                    </div>

                    return <div key={i}>
                        <AllMightyDataCard title={ele.name} size={ele.size} date={ele.date} dld={ele.magnet} uploader={ele.uploader} category={ele.category} img={ele.poster} url={ele.url} />
                    </div>
                })}
            </div>}


            {!listToCardchanger &&<div className="all-search-results-list container">

                {allData?.map((ele, i) => (

                    <div key={i} className='d-flex'>

                        <AllMightyList title={ele.name} size={ele.size} date={ele.date} uploader={ele.uploader} url={ele.magnet} />
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default AllMightySearch