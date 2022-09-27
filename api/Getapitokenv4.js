import axios from "axios";

export default axios.create ({
    baseURL: "https://api.themoviedb.org/4",
    headers: {
        'Content-Type': "application/json;charset=utf-8",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzEyZjg1ZDZhNmNiODMzOTNjNzJhZTFlODJmN2M2MSIsInN1YiI6IjYzMjI5MTRhM2QzNTU3MDA3YzExZmMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XnDh29rbbPWLGEh9Tz1JhmNvcu5mxqafumAI8wODSTw"
    },
});