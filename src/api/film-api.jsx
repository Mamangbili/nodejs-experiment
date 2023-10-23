import {useEffect} from "react"
import {useState} from "react"

const useFilm = (judul) => {
    const [dataMakanan, setDataMakanan] = useState([])
    const url = 'https://api.themoviedb.org/3/search/movie?query=me&include_adult=false&language=en-US&page=1'
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjNkYmFjNDgzYmE0YTExZmI0ZTZmMjNmMzBkY2UyMCIsInN1YiI6IjY1MzUxNTk3YzhhNWFjMDExY2YwMmJiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrTGq-amxgs5LS0kF8a9OmCSVdn58rxOdHUHRP8nFv4'
        }
    };


    useEffect(() => {

        fetch(url, options).then(response => response.json()).then(response => {
            console.group();
            console.log(response);
            console.groupEnd();
        }).catch(err => console.error(err));

    }, [])

    return dataMakanan
}


export default useFilm;
