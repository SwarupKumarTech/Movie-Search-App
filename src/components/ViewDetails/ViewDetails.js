import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ViewDetails.css'
function ViewDetails() {
    const {imdbID} = useParams()
    const [data, setData] = useState()
    useEffect (  () =>{
        const getData = async () =>{
                try{
                    let apiPath = `https://www.omdbapi.com/?apikey=a4eed4d5&i=${imdbID}`
                    console.log(apiPath);
                    let apiResponse = await axios.get(apiPath)
                    console.log(apiResponse);
                    setData(apiResponse.data)
                } catch (err){
                    setData(null)
                    alert("unable to process request")
                }
        }
        getData()
    },[])
    return ( 
        <div className="container mb-5 bg-dark bg-gradient text-white mt-4 border border-dark rounded">
            <div className="row text-light ">
            {
                data != null &&
                <div className="row ">
                    <div className="col-md-4">
                        <img src={data.Poster} className="img-fluid rounded shadow mt-4" />
                    </div>
                    <div className="col-md-8 mt-4">
                         <h2>{data.Title} - {data.Year}</h2>
                         <p>{data.Plot}</p>
                         <p><strong>Genre: </strong>{data.Genre}</p>
                         <p><strong>Writer: </strong>{data.Writer}</p>
                         <p><strong>Actors: </strong>{data.Actors}</p>
                         <p><strong>Awards: </strong>{data.Awards}</p>
                         <p><strong>IMDB Rating: </strong>{data.imdbRating}</p>
                    </div>
                </div>
            }
        </div>
        </div>
    )
}
export default ViewDetails;