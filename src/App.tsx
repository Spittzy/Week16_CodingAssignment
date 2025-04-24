import Header from './header';
import ItemList from './itemList';
import picture from './assets/practice.png'
import { useState } from 'react';
import { Recipe } from './types';


const TEST_RECIPES: Recipe[] = [
  //   {
  // id: 0,
  //   order: 1,
  //   image: picture,
  //   recipeName: 'Salmon',
  //   ingredients: ['yum', 'more yum'],
  //   instruction: 'The best Instructions'
  // },
  // {
  //   id: 1,
  //   order: 2,
  //   image: picture,
  //   recipeName: 'Salmon',
  //   ingredients: ['yum', 'more yum'],
  //   instruction: 'The best Instructions. The best instructions is always the best instructions. I love these instructions. weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
  // },
  // {
  //   id: 2,
  //   order: 3,
  //   image: picture,
  //   recipeName: 'Salmon',
  //   ingredients: ['yum', 'more yum'],
  //   instruction: 'The best Instructions'
  // },
  // {
  //   id: 3,
  //   order: 4,
  //   image: picture,
  //   recipeName: 'Salmon',
  //   ingredients: ['yum', 'more yum'],
  //   instruction: 'The best Instructions'
  // },
  // {
  //   id: 4,
  //   order: 5,
  //   image: picture,
  //   recipeName: 'Salmon',
  //   ingredients: ['yum', 'more yum'],
  //   instruction: 'The best Instructions'
  // },
  // {
  //   id: 5,
  //   order: 6,
  //   image: picture,
  //   recipeName: 'Salmon',
  //   ingredients: ['yum', 'more yum'],
  //   instruction: 'The best Instructions'
  // }

]

export default function App() {
  const [recipe, setRecipe] = useState<Recipe[]>(TEST_RECIPES)
  const [selectedCardId, setSelectedCardId] = useState(0)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const selectedCard = recipe.find(c => c.id === selectedCardId) || recipe[0]

  const addRecipeCard = () => {

    setIsFormModalOpen(true);
    const newRecipe = {
      id: recipe.length,
      order: recipe.length + 1,
      image: picture,
      recipeName: '',
      ingredients: [''],
      instruction: '',
      mealSelection: ''
    }
    setRecipe([...recipe, newRecipe])
  }

  const deleteRecipeCard = (idToDelete: number) => {
    setRecipe(recipe.filter(c => c.id !== idToDelete))
  }

  const editRecipeCard = (property?: string, newValue?: string, idToEdit?: number) => {
    if (idToEdit === undefined) {
      return
    }
    setRecipe(currentCard => currentCard.map(c => (
      c.id !== idToEdit ? c : {
        ...c,
        [property as string]: newValue
      }
    ))
    )
  }


  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />

      <div className='d-flex justify-content-center align-items-center flex-grow-1 m-5'>
        <button className='btn btn-danger' onClick={addRecipeCard}> Add Recipe</button>
      </div>

      <div className='d-flex flex-grow-1'>
        <ItemList cards={recipe}
          selectedCard={selectedCard}
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          deleteCard={deleteRecipeCard}
          editCard={editRecipeCard}
          isFormModalOpen={isFormModalOpen} // Pass modal state
          setIsFormModalOpen={setIsFormModalOpen} // Pass modal handler
        />
      </div>

    </div >
  )
}