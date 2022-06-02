import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'

const Product = ({product}) => {
  return (
    <Card className='my-2 p-3 rounded' key={product._id}>
        <Link to={`/product/${product._id}`}>
            <Card.Img className='test' src={product.image} variant='top'/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
            </Link>
            <Rating value={product.rating} text={` ${product.numReviews} reviews`}/> 
            <Card.Text as='h3'  className='my-2'>
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product