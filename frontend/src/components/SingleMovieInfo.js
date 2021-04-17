import React, {useState} from 'react'
import { Container , Row, Col , Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import authHeader from '../utils/authheader';

const SingleMovieInfo = ({movie}) => {
   
    const [postStatus, setPostStatus] = useState(false)

    const handleClick = async () => {
        let form_data = new FormData();

        form_data.append('name', movie.Title)
        form_data.append('year_released', movie.Year)
        form_data.append('poster', movie.Poster)

        try{
            const data = await axios.post(`${process.env.REACT_APP_API_URL}/api/movielist/add-movie/`, form_data, {
                headers: {
                    'content-type': 'multipart/form-data',
                    "Authorization": authHeader()
                }
            })
            console.log(data)
            if (data.status === 201) {
               setPostStatus(true)
            }
        }
        catch(err){
            console.log(err)
        }
        
    }

    const handleRedirect = () => {
        if (postStatus) {
            return (<Redirect to="/"/>)
        }
        return null
    }

    return (
        <Container className="m-4" style={{width: '90%', color: 'white'}}>
            <Row >
                <Col><img src={movie.Poster} alt="Not Found" /></Col>
                <Col>
                    <h2 className="display-4">{movie.Title}</h2>
                    <h4 className="display-5">{movie.Plot}</h4>
                    <br/>
                    <h3 className="display-5">Ratings : </h3>
                    {movie.Ratings.map((rating,index) => (
                        <h4 key={index} style={{paddingLeft: '40px'}} className="display-5">{rating.Source}: &nbsp;{rating.Value}</h4>
                    ))}
                    <h4>Year: &nbsp; {movie.Year}</h4>
                    <h4>Genre: &nbsp; {movie.Genre}</h4>
                    <h4>Director: &nbsp; {movie.Director} </h4>
                    <h4>Writer: &nbsp; {movie.Writer}</h4>
                    <h4>Actors: &nbsp; {movie.Actors}</h4>
                    <h4>Runtime: &nbsp; {movie.Runtime}</h4>
                    <br/>
                    <Button onClick={handleClick} >Add Movie</Button>
                    {handleRedirect()}
                </Col>
            </Row>
        </Container>
    )
}

export default SingleMovieInfo
