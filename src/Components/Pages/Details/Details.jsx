import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../../apiConfig/apiRequest";
import { DetailsInfo, DetailsPoster } from "../../index";
import s from "./Details.module.scss";

function Details() {
    const [movie, setMovie] = useState({ genres: [] });
    const { id } = useParams();

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const data = await getMovieDetails(id);
                setMovie(data);
            } catch (error) {
                console.error(error);
                setMovie({ genres: [] });
            }
        }
        fetchMovieDetails();
    }, [id]);

    return (
        <div className={s.details}>
            <DetailsPoster data={movie} />
            <DetailsInfo data={movie} />
        </div>
    );
}

export default Details;
