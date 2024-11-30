import { useEffect, useState } from "react";
import "./RandomDog.css";

interface Dog{
    message: string;
    status: string;
}

const RandomDog = () => {
    const[dog, setDog] = useState<Dog | undefined>(undefined);

    useEffect(() => {
        fetchDog();
    }, []);


    const fetchDog = async () => {
        
        try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if(!response.ok) {
            throw new Error("Failed to fetch dog");
        }
        const dog = await response.json();
        setDog(dog);
        } catch (error) {
            console.error(error);
        }
    }

    if(!dog) return <div>Loading...</div>;

    
    return (
        <div>
            <h3>Random dog</h3>
            <img id="dogPic" src={dog.message} alt="dog" />
        </div>
    );
};

export default RandomDog;