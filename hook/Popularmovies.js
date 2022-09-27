import { useState } from "react";
import TmDB from "../api/Getapitokenv3";

export default () => {
    const [results, setResults] = useState({
        data:null,
        loading:false,
        error:null,
    });


    const Popularmovies = async (uri) => {
        const loadingx = true;

        setResults({
            data:null,
            loading:loadingx,
            error:null,
        });

        try {
            const response = await TmDB.get("/movie/"+ uri +"?api_key=5712f85d6a6cb83393c72ae1e82f7c61", {
            }).then(response => {

                setResults({
                    data:response.data.results,
                    loading:false,
                    error:null,
                });
            })
            .catch(error => setResults({
                data:null,
                loading:false,
                error: "Gagal Fetch data",
            }));

        } catch (error) {
            alert(error);
            setResults({
                data:null,
                loading:false,
                error: "Gagal Fetch data",
            });
        }
    }

    return [results,Popularmovies];
}