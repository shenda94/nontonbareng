import { useState } from "react";
import TmDB from "../api/Getapitokenv3";

export default () => {
    const [results, setResults] = useState({
        data:null,
        loading:false,
        error:null,
    });

    const carigenre = async () => {
        const loadingx = true;


        setResults({
            data:null,
            loading:loadingx,
            error:null,
        });

        try {
            const response = await TmDB.get("/genre/movie/list?api_key=5712f85d6a6cb83393c72ae1e82f7c61&language=en-US", {
                params: {
                    page: 1,
                    genre_ids : "",
                },
            });

            setResults({
                data:response.data.genres,
                loading:false,
                error:null,
            });

        } catch (error) {
            alert(error);
            setResults({
                data:null,
                loading:false,
                error: "Gagal Fetch data",
            });
        }
    }

    return [results,carigenre];
}