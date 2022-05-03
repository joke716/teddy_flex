import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Card, Button, Row, Col} from "react-bootstrap";

const App = () => {

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        try {

            const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")

            console.log(result.data.results)
            setMovies(result.data.results)

        } catch (err) {

        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    // 화면에 보여지는 부분
    return (
        <Container className={"mt-3 mb-5"}>
            <br />
            <Row>
                {movies.map(movie => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.overview.slice(0, 75)} ...
                                </Card.Text>
                                <Card.Text>
                                    평점: {movie.vote_average}
                                </Card.Text>
                                <Button variant="secondary">자세히 보기</Button>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                ))}
                <button onClick={() => getMovies()}>
                    버튼
                </button>
            </Row>
        </Container>
    );
};

export default App;