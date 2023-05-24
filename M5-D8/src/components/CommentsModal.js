import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/commentsModal.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from "react";
import RatingSystem from "./RatingSystem";
import useFetch from "../hooks/useFetch";
import FadeLoader from "react-spinners/FadeLoader";
import { commentsLoad, commentsError, arrayOfComments, commentsLoading} from "../states/commentsState"
import { useDispatch, useSelector } from "react-redux";
import { getCommentFromBook } from "../states/commentsState";
import AddComment from "./AddComment";


const CommentsModal = ({toggleModal, movieId}) => {

    //let {data, loading, error} = useFetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`)

    const dispatch = useDispatch()
    let loading = useSelector(commentsLoading)
    let error = useSelector(commentsError)
    let data = useSelector(arrayOfComments)
    

    useEffect(() => {
        dispatch(getCommentFromBook(movieId))
    }, [dispatch])

    return (
        <div
            className="modal show commentsModal"
            style={{ display: 'block'}}
            >
            <Modal.Dialog centered scrollable size='lg' backdrop='static'>
                
                <Modal.Title className="comm">Commenti: </Modal.Title>

                <Modal.Body>
                <ListGroup>
                    {loading && !error && <FadeLoader color="#36d7b7"/>}
                    {!loading && !error && data && data.map((comment, index) => {
                        return (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div>
                                        {comment.comment}
                                    </div>
                                    <div>
                                        Relativo al libro: { comment.elementId}
                                    </div>
                                </div>
                                <RatingSystem stars={comment.rate}/>
                            </ListGroup.Item>
                        )
                    })}
                    
                </ListGroup>
                </Modal.Body>

                <AddComment/>

                <Modal.Footer>
                <Button onClick={toggleModal} variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
    </div>
    )
}

export default CommentsModal