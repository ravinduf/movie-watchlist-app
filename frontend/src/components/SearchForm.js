import React, {useState} from 'react'
import axios from 'axios'
import { Form, Col, Button } from 'react-bootstrap'

const SearchForm = () => {

    const [params, setParams] = useState({
        title: '',
        year: ''
    });
    

    return (
        <div>
            <Form className="mt-4 d-flex flex-row justify-content-around" style={{width: "70%"}} onSubmit={handleSubmit}>
                <Form.Control  
                name="title" type="text" 
                placeholder="Title" 
                size="lg"
                style={{width: '40%'}}/>
                
                <Form.Control  
                name="year" type="text" 
                placeholder="Year" 
                size="lg"
                style={{width: '20%'}}/>
                
                <Button type="submit">Submit</Button>
            </Form >
        </div>
    )
}

export default SearchForm
