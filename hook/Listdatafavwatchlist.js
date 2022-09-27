import { useState } from "react";
import TmDB from "../api/Apimerna";
import axios from "axios";

export default () => {
    const [results, setResults] = useState({
        data:null,
        loading:false,
        error:null,
    });

    const getmyfavwatchlist = async (uri) => {
        const loadingx = true;

        setResults({
            data:null,
            loading:loadingx,
            error:null,
        });

        alert(uri);

        try {

            // Make a request for a user with a given ID
axios.get("https://apimoviestest.000webhostapp.com/Apimovies/")
.then(function (response) {
  // handle success
 alert("0"+JSON.stringify(response));
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
              
      axios({
        method: "GET",
        url: "https://apimoviestest.000webhostapp.com/Apimovies/" + uri,
      })
        .then(function (response) {
         //alert("99"+JSON.stringify(response.data));
          //var jsondata = JSON.stringify(response.data);
          setResults({
            data:response.data,
            loading:false,
            error:null,
        });

        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
            
            const response = await TmDB.get("Apimovies/" + uri, {
            }).then(response => {
                //alert(JSON.stringify(response));
                //alert(JSON.stringify(response.data));

                setResults({
                    data:response,
                    loading:false,
                    error:null,
                });
            })
            .catch(error => alert(error));

        } catch (error) {
            alert(error);
            setResults({
                data:null,
                loading:false,
                error: "Gagal Fetch data",
            });
        }
    }

    return [results,getmyfavwatchlist];
}