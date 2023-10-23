import {useState} from "react";
import ListPoint from "./list-point";
import InputTodo from "./input-todo";
import useFilm from "../api/film-api";

const ListBoard = () => {
    const [listTodo, setListTodo] = useState([]);
    // const [movies, setMovies] = useFilm('me')
    // console.log(movies)

    const handleOnClick = (todo) => {
        setListTodo((previous) => [
            ...previous,
            todo
        ]);
    };
    return (
        <>
            <div style={box}>
                {
                listTodo.map((todo, index) => {
                    return <ListPoint no={
                            index + 1
                        }
                        toDo={todo}
                        key={index}/>;
                })
            }

                <InputTodo onClick={handleOnClick}/>
            </div>
        </>
    );
};
const box = {
    backgroundColor: "gray",
    width: "300px",
    height: "300px"
};

export default ListBoard;
