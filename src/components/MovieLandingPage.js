import '../All css/landingpagecont.css'
import React, { useContext, useEffect, useState, } from 'react'
import { receivedID } from '../App'
import ImbdLogo from '../Assets/logos/imdb-logo-transparent.png'
import StarLogo from '../Assets/logos/star.ico'
import { Button } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import DownloadIcon from '@mui/icons-material/Download';
import Download from './Download'
import Suggestion from './Suggestion'
import loadinggif  from "../Assets/Ajax-Loading/Ajax-Loading.svg"

import axios from 'axios'




const MovieLandingPage = () => {


const [Loading,setLoading] = useState(false);
  
  const [MovieData, setMovieData] = useState([]);
  const [suggestionsMovieData,setsuggestionsMovieData] = useState([]);
  let RecID = useContext(receivedID)
  const images = [
    `${MovieData.large_cover_image}`,
    `${MovieData.large_screenshot_image1}`,
    `${MovieData.medium_screenshot_image2}`,
    `${MovieData.large_screenshot_image3}`,
    `${MovieData.medium_cover_image}`,
    `${MovieData.medium_screenshot_image1}`,
    `${MovieData.large_screenshot_image2}`,
    `${MovieData.medium_screenshot_image3}`,

  ];



  useEffect(() => {
    // eslint-disable-next-line
    if (RecID.ID !== undefined) {
      localStorage.setItem('id', RecID.ID)
    }
    const options = {
      method: 'GET',
      url: `https://movies-and-serials-torrent.p.rapidapi.com/movies/detail/${localStorage.getItem('id')}`,
      headers: {
        'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
        'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {


      console.log(response.data);
      setMovieData(response.data.data.movie)

      setLoading(true)

      handlesuggestions()


    }).catch(function (error) {
      // console.error(error);
    });


// eslint-disable-next-line
  }, [])

  
let handlesuggestions = ()=>{

  const options = {
    method: 'GET',
    url: `https://movies-and-serials-torrent.p.rapidapi.com/movies/suggestion/${localStorage.getItem('id')}`,
    headers: {
      'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1',
      'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    // console.log(response.data.data.movies);
    setsuggestionsMovieData(response.data.data.movies)
  }).catch(function (error) {
    console.error(error);
  });

}

  let handleDownload = () => {
    
    
  //  document.querySelector('.landing-page-cont').style.opacity="50%"
   document.querySelector('.landing-page-cont').style.filter ="blur(10px)"

   document.querySelector('.dowbload-cont').style.display = "flex" 
  }

 

  return (

    Loading ?<>
    <div className="dowbload-cont">
            <Download torrents={MovieData.torrents}/>
          </div>



      <div className='landing-page-cont  pt-5'  >

        <div className="content ">

        

          <div className="upper-cont mb-5">


            <div className="left-cont mx-5">

              <img src={MovieData.large_cover_image} alt="" height={'500px'} width={'400px'} />

            </div>



            <div className="right-cont">

              <h2 className=''>{MovieData.title_english}</h2>

              <div className="my-4 ">

                <span>{MovieData.year}</span> <span className='mx-3'>{MovieData.mpa_rating}</span>
              </div>
              <div className='my-4 goner opacity'>

                {MovieData.genres?.map(ele => {
                  return ele + "/ "
                })}
              </div>

              <img  alt=""  src={ImbdLogo} height={'20px'} width={'50px'} /> <span className='mx-4'>{MovieData.rating} <img className='mx-1' src={StarLogo} alt="" height={'20px'} width={'20px'} /></span>

              <div className='my-4'><span style={{ fontFamily: "monospace" }}>Available in :</span>

                <div className="quality1 my-4">


                  {MovieData.torrents?.map((ele, i) => {
                    return <span key={i} className='quality-type'>{ele.quality}</span>
                  })}
                </div>

                <Button className='my-4 mx-2' variant='contained' target={'_blank'} href={`https://www.youtube.com/watch?v=${MovieData.yt_trailer_code}`} color='secondary'> {<YouTubeIcon className='mx-2' />}Watch Trailer</Button>
                <Button className='my-4 mx-2' variant='contained' onClick={handleDownload} color='success'> {<DownloadIcon className='mx-2' />}Download</Button>
                  <h5>
                    <strong className='mx-2'>

                    {<DownloadIcon/>}{MovieData.download_count}
                    </strong>
                    Downloades !</h5>

              </div>


            </div>




          </div>

           


          <div className="lower-cont container my-5">
            <div className="center">

              <h3>ScreenShots</h3>
            </div>
            <div className="slide-container my-5">
              {
                images.map((ele, i) => {
                  return <img  alt="Image Not Available"  key={i} className='slider-per0img mx-2 my-2' src={ele} height={'500px'} width={'auto'} />
                })
              }
            </div>

          </div>



          <div className="third-container mb-5 container">

            <div className="left-cont para mx-5" >
              <h3  className='my-3'>Description</h3>
              <p>{MovieData.description_full}</p>
            </div>


            <div className="right-cont1 mx-5">

              <h4 className=''>Top Cast</h4>

              <div className="member mt-4">

                {MovieData.cast?.map((ele, i) => {


                  return (<div key={i} className='per-cast my-2'><img  alt=""  className='cast-pic mx-3' src={ele.url_small_image} /><span className='opacity'> <span className='fade1'>{ele.name}</span>  as <span className='bold'> {ele.character_name}</span></span></div>)

                })}
              </div>

            </div>
          </div>


{/* suggestions */}

                <h2 className="center">Related Movies</h2>
          <div className="suggestions mb-5 my-4">
              {suggestionsMovieData?.map((ele,i)=>{
                return<div key={i}>
                

                 <Suggestion  MovieID={ele.id} title={ele.title_english} img={ele.medium_cover_image} rating={ele.rating} />
                
                 </div>
              })}
            </div>



        </div>
      </div>





    </>: <div className="center py-5"><img className='my-5' src={loadinggif} alt="Loading..." /></div>


  )
}

export default MovieLandingPage