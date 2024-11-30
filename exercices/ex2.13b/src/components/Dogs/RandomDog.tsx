import { useEffect, useState } from "react";
import "./RandomDog.css";

interface Dog{
    message: string;
    status: string;
}

const RandomDog = () => {
    const[dog, setDog] = useState<Dog | undefined>(undefined);

    const fetchDogImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            setDog({
            message : data.message ?? "No image found",
            status : data.status ?? "error",
            });
          });
    }

    useEffect(() => {
        fetchDogImage();
    }, []);

    if(!dog) return <div>Loading...</div>;

    return (
        <div>
            <h3>Random dog</h3>
            <img id="dogPic" src={dog.message} alt="dog" />
        </div>
    );
};

export default RandomDog;