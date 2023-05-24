import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import SingleCard from './SingleCard';
//import data from '../data/scifi.json';
import MyBadge from '../components/MyBadge';
import SearchBar from "./SearchBar";
import FadeLoader from "react-spinners/FadeLoader";

const Main = () => {

    //const getProductData = async () => {
      //  try {
        //    const data = await fetch('https://dummyjson.com/products');
          //  return await data.json();
        //} catch (error) {
          //  if (error) throw new Error ('Qualcosa è andato storto...')
        //}
    //}
    //useEffect(() => {
      //  getProductData().then(res => console.log(res));
    //}, []);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [books, setBooks] = useState([])
    const [renderBooks, setRenderBooks] = useState([])

    const getBooks = async() => {
        //inizio caricamento
        setLoading(true) 
        try {
            const data= await fetch('https://epibooks.onrender.com/')
            const response = await data.json()
            setBooks(response)
            setRenderBooks(response)
            //fine caricamento
            setLoading(false)
        } catch (error) {
            if (error) {
                setError ('Ops... errore!')
            }
        }
    }

    useEffect(() => {
        getBooks();
    }, [])

    return (
        <>
            <Container>
            {error && <h1 className="text-danger">{error}</h1>}
            {loading && !error && <FadeLoader color="#36d7b7"/>}
            {!loading && !error &&
            <div>
                <SearchBar books={books} setBooks={setBooks} setRenderBooks={setRenderBooks} />
                <MyBadge text="New books!" color="primary" />
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col sm={12} className="d-flex flex-wrap justify-content-center">
                        {renderBooks && renderBooks.map((item) => {
                            return (
                                <SingleCard
                                key={item.asin}
                                    title={item.title}
                                    img={item.img}
                                    asin={item.asin}
                                    price={item.price}
                                    category={item.category}
                                />
                            )
                        })}
                        </Col>
                    </Row>
                </Container>
            </div>
            }
            </Container>
        </>
    )
}

export default Main