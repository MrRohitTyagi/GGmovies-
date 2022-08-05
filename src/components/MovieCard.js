import React, { useContext } from 'react'
import '../All css/Moviecard.css'
import ImbdLogo from '../Assets/logos/imdb-logo-transparent.png'
import StarLogo from '../Assets/logos/star.ico'
import { Link } from 'react-router-dom'
import { receivedID } from '../App'

const MovieCard = (props) => {
    let recid = useContext(receivedID)

    let { img, title, year, pg13, genres, id, rating } = props

    let redirectUser = (funcid) => {
        // console.log(funcid);

        localStorage.setItem('id',funcid)
        recid.setID(funcid)

    }
    return (

        <Link onClick={() => redirectUser(id)} style={{ textDecoration: "none", color: "white" }} to={'/moviewatch'} >

            <div onClick={redirectUser} className='card-cont my-4 d-flex'>


                <div className="left-image ">
                    <img src={img} height={'300px'} width={'200px'} alt='' />
                </div>



                <div className="right-content">
                    <h5>{title}</h5>
                    <div className="my-2 ">

                        <span>{year}</span> <span className='mx-3'>{pg13}</span>
                    </div>
                    <div className='my-2 opacity'>

                        {genres?.map(ele => {
                            return ele + "/ "
                        })}
                    </div>

                    <img src={ImbdLogo} alt="" height={'20px'} width={'50px'} /> <span className='mx-4'>{rating} <img className='mx-1' src={StarLogo} alt="" height={'20px'} width={'20px'} /></span>

                    <div className='my-4'><span style={{ fontFamily: "monospace" }}>Available in :</span>

                        <div className="quality">
                            <span className='quality-type'>4K</span>
                            <span className='quality-type'>2160p</span>
                            <span className='quality-type'>1080p</span>
                            <span className='quality-type'>720p</span>
                        </div>


                    </div>

                </div>

            </div>
        </Link>
    )
}

export default MovieCard