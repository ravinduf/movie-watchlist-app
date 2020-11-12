import React, {useState} from 'react'
import axios from 'axios'

const SearchForm = () => {

    const [params, setParams] = useState({
        title: '',
        year: ''
    });


    return (
        <div>
            <Form className="mb-4">
                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Title</Form.Label>
                        <Form.Control  
                        name="title" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Year</Form.Label>
                        <Form.Control  
                        name="year" type="text" />
                    </Form.Group>

                </Form.Row>
            </Form >
        </div>
    )
}

export default SearchForm
