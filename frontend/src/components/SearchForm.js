import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Form, Button, Container} from 'react-bootstrap'
import SingleMovieInfo from './SingleMovieInfo'

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
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        try{
            const tempInfo = await axios.get(`${process.env.REACT_APP_MOVIES_API_URL}t=${params.title}&y=${params.year}`)
            setMovie(tempInfo.data)

            setLoading(() => (
                tempInfo.data.Response === 'True' ? false : true 
            ))

        }
        catch(err){
            console.log(err)
        }

    }

    const IncorrectMovieInfo = (
        <Container className="mt-4" style={{width: '90%', color: 'white'}}>
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

            {loading ?  IncorrectMovieInfo : <SingleMovieInfo movie={movie} /> }
            
        </div>
    )
}

export default SearchForm
