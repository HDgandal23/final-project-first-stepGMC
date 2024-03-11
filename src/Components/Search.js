import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search({value, loading, handalSearch, onChange}) {
  return (
    <div className='search'>
        <Form onSubmit={handalSearch} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search recipe"
              className="me-2"
              aria-label="Search"
              value={value}
              loading={loading}

              onChange ={onChange}
            />
            <input disabled={loading || !value} type='submit' className='btn'  value='search'/>
        </Form>
    </div>
  )
}

export default Search