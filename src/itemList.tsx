import ItemCard from './itemCard'
import type { Recipe } from "./types"
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import RecipeForm from './Form';





type ItemListProps = {
    isFormModalOpen: boolean
    setIsFormModalOpen: (newValue: boolean) => void
    cards: Array<Recipe>
    selectedCardId: number
    selectedCard: Recipe
    setSelectedCardId: (newValue: number) => void
    deleteCard: (id: number) => void
    editCard: (property?: string, name?: string, id?: number) => void


}

export default function ItemList({ cards, selectedCardId, setSelectedCardId, deleteCard, editCard, selectedCard, setIsFormModalOpen, isFormModalOpen }: ItemListProps) {
    const [isExpanded, setIsExpanded] = useState(false) //state variable


    const handleClose = () => setIsFormModalOpen(false)

    const handleCardClick = (id: number) => {

        setIsExpanded(!isExpanded)
        setSelectedCardId(id)
    }

    // const handleCardClick = (id: number) => {
    //     setSelectedCard(id)
    return (
        <>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    {/* <ItemCard image={picture} recipeName={enteredName} onClick={function (): void {
                    throw new Error('Function not implemented.'); */}

                    {cards.map(c => <ItemCard setIsFormModalOpen={setIsFormModalOpen} key={c.id} cards={c} onSelected={handleCardClick} isSelected={c.id === selectedCardId} deleteCard={deleteCard} />)}

                </div>
            </div>

            <Modal show={isFormModalOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Recipe Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RecipeForm editCard={editCard} selectedCardId={selectedCardId} handleClose={handleClose} selectedCard={selectedCard} />
                </Modal.Body>

            </Modal>
        </>
    )
}