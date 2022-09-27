import { useState } from "react";
import TmDB from "../api/Getapitokenv3";

export default () => {
    const [results, setResults] = useState({
        datacast:null,
        loading:true,
        error:null,
    });


    const Castmovies = async (movieid) => {
        const loadingx = true;

        setResults({
            datacast:null,
            loading:loadingx,
            error:null,
        });

        try {
            const response = await TmDB.get("/movie/"+ movieid +"/credits?api_key=5712f85d6a6cb83393c72ae1e82f7c61&language=en-US", {
            }).then(response => {

                //alert(JSON.stringify(response.data.cast));

                setResults({
                    datacast:response.data.cast,
                    loading:false,
                    error:null,
                });
            })
            .catch(error => setResults({
                datacast:null,
                loading:false,
                error: "Gagal Fetch data",
            }));

        } catch (error) {
            alert(error);
            setResults({
                datacast:null,
                loading:false,
                error: "Gagal Fetch data",
            });
        }
    }

    return [results,Castmovies];
}