import { useState } from "react";
import TmDB from "../api/Getapitokenv3";

export default () => {
    const [results, setResults] = useState({
        data:null,
        loading:true,
        error:null,
    });


    const Getdetailmovies = async (movieid) => {
        const loadingx = true;

        setResults({
            data:null,
            loading:loadingx,
            error:null,
        });

        try {
            const response = await TmDB.get("/movie/"+ movieid +"?api_key=5712f85d6a6cb83393c72ae1e82f7c61&language=en-US", {
            }).then(response => {

               // alert(JSON.stringify(response.data));

                setResults({
                    data:response.data,
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

    return [results,Getdetailmovies];
}