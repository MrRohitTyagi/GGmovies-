import React, { useContext } from 'react'
import '../All css/suggestion.css'
import ImbdLogo from '../Assets/logos/imdb-logo-transparent.png'
import { receivedID } from '../App'
import { Link } from 'react-router-dom'

const Suggestion = (props) => {
    let recId = useContext(receivedID)

    // console.log(recId.ID);
    // console.log(localStorage.getItem('id'));



    const { img, title, rating, MovieID } = props


    let ManageID = (id) => {

        recId.setID(id)
        localStorage.setItem('id',id)

    }

    return (
        <Link className='no-styles ' to={'/moviewatch'} href='/moviewatch'>

            <div onClick={() => ManageID(MovieID)} className='suggestion-box mx-3'>
                <div className="float-ing-logo-imdb">
                    <img src={ImbdLogo} alt="" height={"30px"} width={'50px'} />
                    <span className='fs-5 mx-3'>{rating}</span>
                </div>

                <img className='suggestion-img' src={img} alt="" />
                <div className="suggestion-title text-center fs-5 my-3">
                    {title}
                </div>




            </div>
        </Link>
    )
}

export default Suggestion