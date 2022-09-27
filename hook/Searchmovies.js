import { useState } from "react";
import TmDB from "../api/Getapitokenv4";

export default () => {
    const [results, setResults] = useState({
        data:null,
        loading:false,
        error:null,
    });

    const searchmovies = async (search) => {
        const loadingx = true;
       
        const searchx = search;

        setResults({
            data:null,
            loading:loadingx,
            error:null,
        });

        try {
            const response = await TmDB.get("/search/movie?api_key=5712f85d6a6cb83393c72ae1e82f7c61&query=" + searchx, {
            }).then(response => {

                //alert(response.data.results);

                setResults({
                    data:response.data.results,
                    loading:false,
                    error:null,
                });
            })
            .catch(error => console.log(error));

        } catch (error) {
            alert(error);
            setResults({
                data:null,
                loading:false,
                error: "Gagal Fetch data",
            });
        }
    }

    return [results,searchmovies];
}