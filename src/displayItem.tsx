// import ItemCard from "./itemCard"
// }
import type { Recipe } from "./types"
import { useState, useEffect } from "react"

type DisplayItemProps = {
    card: Recipe
    isSelected: boolean



}
export default function DisplayItem({ card, isSelected }: DisplayItemProps) {
    const [isExpanded, setIsExpanded] = useState(false) //state variable for displaying

    //ensure ingredientsArray is always an array
    const ingredientsArray = Array.isArray(card.ingredients)
        ? card.ingredients.map((item) => item.trim())
        : card.ingredients
            ? card.ingredients.split(",").map((item) => item.trim())
            : [];


    useEffect(() => {
        setIsExpanded(isSelected);
    }
        , [isSelected]) //useEffect to update isExpanded when isSelected changes

    return (
        isExpanded ? (
            <div className="collapse collapse-horizontal mt-3 show w-100" id="collapseWidthExample">
                <div className="card card-body bg-warning-subtle gap-2">
                    <div className="row">
                        <div className="col">
                            <h3> {card.recipeName}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-2">
                            <ul className="list-group list-group-flush ms-3">
                                {/* map ingredients into a list */}
                                {ingredientsArray.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {card.instruction}
                        </div>
                    </div>
                </div>
            </div>
        ) : null

    )
}