import React, { useState, useEffect, useContext } from 'react'
import '../All css/movie.css'
import { Button } from '@mui/material'
import axios from 'axios'
import MovieCard from './MovieCard'
import loading from "../Assets/Ajax-Loading/Ajax-Loading.svg"
import ClearIcon from '@mui/icons-material/Clear';
import { Data } from '../App'

const Movie = () => {


    let SendData = useContext(Data)
    // console.log(SendData);
    const [loadingSwitch, setloadingSwitch] = useState(false);
    const [InputVal, setInputVal] = useState('');
    const [MovieData, setMovieData] = useState([]);
    const [searchbuttontext, setsearchbuttontext] = useState('Search Movie');
    const [SearchResults, setSearchResults] = useState('Latest Movies');


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://yts.mx/api/v2/list_movies.json?limit=50',

        };

        axios.request(options).then(function (response) {
            // console.log(response.data.data);
            setMovieData(response.data.data.movies)

        }).catch(function (error) {
            console.error(error);
        });


    }, [])
    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://movies-and-serials-torrent.p.rapidapi.com/movies/latest',
    //         headers: {
    //             'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
    //             'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data.data);
    //         setMovieData(response.data.data.movies)

    //     }).catch(function (error) {
    //         console.error(error);
    //     });


    // }, [])



    let FetchData = async () => {
        const options = {
            method: 'GET',
            url: `https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${InputVal}`,

        };


        if (InputVal === "") {
            setsearchbuttontext("Enter some value")
            setTimeout(() => {
                setsearchbuttontext("Search movie")

            }, 2000);

            // console.log("Empty value");
            return
        }
        setloadingSwitch(true)
        await axios.request(options).then(data => {

            // console.log("hello");
            // console.log(data.data.data);
            setMovieData(data.data.data.movies)
            setloadingSwitch(false)
            SendData.setReceivedData(data.data)
            setSearchResults(`Search results for ${InputVal} `)

        })


    }
    let handleEnterDown = (e) => {
        if (e.key === "Enter") {
            FetchData()
        }

        // console.log(e); 

    }


    return (

        <>

            <div className="loading ">

                {loadingSwitch && <img className='loading-img' style={{ marginTop: "7rem" }} src={loading} alt="" />}
            </div>

            <div className="center my-5">

                <div className="textInputWrapper my-5">



                    <input onKeyDown={(e) => handleEnterDown(e)} onChange={(e) => setInputVal(e.target.value)} type="text" className="textInput" placeholder={searchbuttontext} />
                </div>
                <Button className='mx-3' onClick={FetchData} variant='contained' color='success'>Search</Button>

            </div>
            <div className="center">

                <h2>{SearchResults}</h2>
                <hr />
            </div>
            <div className="movie-container container">


                {MovieData ? MovieData.map(ele => (

                    <MovieCard key={ele.id} id={ele.id} img={ele.large_cover_image} title={ele.title_english} year={ele.year} pg13={ele.mpa_rating} genres={ele.genres} torrent={ele.torrents} rating={ele.rating} />


                ))
                    :
                    <>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>No Movie Found !</strong> Try Anothe search

                            <Button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <ClearIcon onClick={() => { document.querySelector('.alert').style.display = "none" }} />
                            </Button>
                        </div>

                    </>

                }

            </div>
        </>
    )
}

export default Movie