import React, {useState} from 'react'
import axios from 'axios'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'

const SearchForm = () => {

    const [params, setParams] = useState({
        title: '',
        year: ''
    });

   
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const handleChange = (e) => {
        setParams(params => (
            {...params, [e.target.name]: e.target.value}
        ))
        console.log(params)
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const tempInfo = await axios.get(`${process.env.REACT_APP_MOVIES_API_URL}t=${params.title}&y=${params.year}`)
        setMovie(tempInfo.data)
        setLoading(false)
        console.log(movie)
       
    }

    
    const movieInfo = (
        <Container className="m-4">
            <Row >
                <Col><img src={movie.Poster} alt="Not Found" /></Col>
                <Col>
                <h2 className="display-4">{movie.Title}</h2>
                <h4 className="display-5">{movie.Plot}</h4>
                </Col>
            </Row>
        </Container>
    )

    const movieInfoNotFound = (
        <Container className="mt-4">
            <h1>Enter the title and the year correctly</h1>
        </Container>
    )

      

    return (
        <div>
            <Form className="mt-4 d-flex flex-row justify-content-around" style={{width: "70%"}} onSubmit={handleSubmitForm}>
                <Form.Control  
                name="title" type="text" 
                placeholder="Title" 
                size="lg"
                onChange={handleChange}
                style={{width: '40%'}}/>
                
                <Form.Control  
                name="year" type="text" 
                placeholder="Year" 
                size="lg"
                onChange={handleChange}
                style={{width: '20%'}}/>
                
                <Button type="submit">Submit</Button>
            </Form >

            {loading ? movieInfoNotFound : movieInfo}

        </div>
    )
}

export default SearchForm
