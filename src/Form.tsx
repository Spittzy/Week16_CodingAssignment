
import { ChangeEvent, useState } from "react"
import type { Recipe } from "./types"
import { FormSelect } from "react-bootstrap"

type FormProps = {
    selectedCard: Recipe
    selectedCardId: number
    handleClose: () => void
    editCard: (property: string, name: string, id?: number) => void
}

export default function RecipeForm({ selectedCardId, handleClose, editCard, selectedCard }: FormProps) {

    const [formValues, setFormValues] = useState({
        recipeName: selectedCard?.recipeName || ' ',
        ingredients: Array.isArray(selectedCard?.ingredients)
            ? selectedCard.ingredients.join(", ")
            : selectedCard?.ingredients || "",
        instructions: selectedCard?.instruction || '',
        formSelect: selectedCard?.mealSelection || ''
    })


    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setFormValues({
            ...formValues, [event.target.name]: event.target.value

        })
    console.log(formValues)

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();


        // Update each property individually
        editCard('formSelect', formValues.formSelect, selectedCardId)
        editCard('recipeName', formValues.recipeName, selectedCardId);
        editCard('ingredients', formValues.ingredients, selectedCardId);
        editCard('instruction', formValues.instructions, selectedCardId);

        handleClose();
    };





    return (

        <div className="card-body">
            <h5 className="card-title mb-3">Add your recipe</h5>

            <form className="row g-3">
                <div className="row-sm-2 mb-3">
                    {/* select */}
                    <div className="col-md-5 mb-3">
                        <select className="form-select" aria-label="Default select example" id="formSelect" name="formSelect" onChange={handleChange} value={formValues.formSelect}>
                            <option value='' disabled>Type of meal</option>
                            <option value="1">Breakfast</option>
                            <option value="2">Lunch</option>
                            <option value="3">Dinner</option>
                            <option value="4">Snack</option>
                            <option value="5">Dessert</option>
                            <option value="6">Drink</option>
                            <option value="7">Appetizer</option>
                            <option value="8">Side</option>

                        </select>
                    </div>

                    {/* file */}
                    <div className="col">
                        <div className="mb-6">
                            <input className="form-control" type="file" id="formFile" name="formFile" onChange={handleChange} />
                        </div>
                    </div>
                </div>

                {/* Name */}
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Recipe Name</label>
                    <input type="text" className="form-control" id="inputName" name='recipeName' placeholder='Recipe Name' onChange={handleChange} value={formValues.recipeName} />
                </div>

                {/* Ingredients */}
                <div className="col-md-6">
                    <label htmlFor="inputIngredients" className="form-label">Ingredients</label>
                    <input type="text" className="form-control" id="inputIngredients" name='ingredients' placeholder='Put a comma after each ingredient' onChange={handleChange} value={formValues.ingredients} />
                </div>

                {/* Instructions */}
                <div className="col-12">
                    <label htmlFor="instructions" className="form-label">Instructions</label>
                    <textarea className="form-control" id="instructions" name="instructions" placeholder='Instructions' onChange={handleChange} value={formValues.instructions}></textarea>
                </div>


                {/* button */}
                <div className="col-12 text-end">
                    <button type='button' className="btn btn-secondary me-2" onClick={handleClose}>Cancel</button>
                    <button type="submit" className="btn btn-danger" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>

    )
}