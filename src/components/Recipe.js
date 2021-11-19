import { useState } from "react";
import Ingredients from "./Ingredients";

const Recipe = ({ recipes }) => {

    const { label, image, ingredients } = recipes.recipe;
    const [show, setSHow] = useState(false);

    const handleShow = () => {
        setSHow(!show);
    }

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <button onClick={handleShow}>Ingredients</button>
            {show && <Ingredients ingredients={ingredients} />}
        </div>
    );
}
 
export default Recipe;