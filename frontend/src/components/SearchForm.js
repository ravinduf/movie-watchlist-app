import React, {useState} from 'react'
import axios from 'axios'
import { Form, Col, Button } from 'react-bootstrap'

const SearchForm = () => {

    const [params, setParams] = useState({
        title: '',
        year: ''
    });
    
    const handleChange = (e) => {
        setParams(params => (
            {...params, [e.target.name]: e.target.value}
        ))
        console.log(params)
    }

    return (
        <div>
            <Form className="mt-4 d-flex flex-row justify-content-around" style={{width: "70%"}} >
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
        </div>
    )
}

export default SearchForm
