import React, {useState} from 'react'
import axios from 'axios'
import { Form, Button, Container} from 'react-bootstrap'
import SingleMovieInfo from './SingleMovieInfo'

const SearchForm = () => {

    const [params, setParams] = useState({
        title: '',
        year: ''
    });

   
    const [movie, setMovie] = useState([]);
    const [status, setStatus] = useState({
        loading: true,
        msg: 'Enter title and year correctly'
    });
    
    const handleChange = (e) => {
        setParams(params => (
            {...params, [e.target.name]: e.target.value}
        ))
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        try{
            const tempInfo = await axios.get(`${process.env.REACT_APP_MOVIES_API_URL}t=${params.title}&y=${params.year}&type=movie`)
            setMovie(tempInfo.data)

            tempInfo.data.Response === 'True'? 
                    setStatus(status => ({...status, loading: false})) : 
                    setStatus(status => ({...status, msg: 'incorrect title'}))
        }
        catch(err){
            console.log(err)
        }

    }
    
    const formStatus = (
        <Container className="mt-4" style={{width: '90%', color: 'white'}}>
            <h1>{status.msg}</h1>
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
                
                <Button type="submit" className="btn-secondary">Find Movie</Button>
            </Form >

            {status.loading ?  formStatus : <SingleMovieInfo movie={movie} /> }
            
        </div>
    )
}

export default SearchForm
