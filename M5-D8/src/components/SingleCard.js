import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/bookCard.css";
import React, { useState } from 'react';
import CommentsModal from './CommentsModal';
import { Link } from "react-router-dom"
import Badge from 'react-bootstrap/Badge';

function SingleCard({title, price, asin, img, category}) {

    const [selected, setSelected] = useState (false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

    const toggleSelected = () => setSelected(!selected)
    

    const toggleModal = () => setIsCommentModalOpen(!isCommentModalOpen)

    return (
        <>
            <Card 
            className= {`${selected ? 'border border-danger shadow' : null}`} 
            id='gapGapGap'
            onClick={toggleSelected} style={{ width: '18rem' }}>
                <Card.Img className='object-fit-cover w-100 book-card' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-truncate'>{title}</Card.Title>
                    <Card.Title as='p'>ID: {asin}</Card.Title>
                    <Card.Text as='h6'>{category}</Card.Text>
                    <Badge className='Badge'>${price}</Badge>
                    <Button className='Badge' onClick={toggleModal}>Commenti</Button>
                    <Link to={`/book/${asin}`}>
                        <Button className='Badge'>Dettagli</Button>
                    </Link>
                </Card.Body>
            </Card>
            {isCommentModalOpen && <CommentsModal toggleModal={toggleModal} movieId={asin}/>}
        </>
    );
}

export default SingleCard