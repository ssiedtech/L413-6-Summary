import React, {useState} from 'react';
import FlashCard from './FlashCard';
import SampleFlashCards from './FlashCardData';

export default function FlashCardList() {

    const [flashcards, setFlashcards] = useState(SampleFlashCards);

    return (
        <div className="card-column-flex">
        <h1>Key Terms</h1>
        <h2>Click to see Definitions</h2>
        <div className="card-row-flex">
            {flashcards.map(flashcards => {
                return <FlashCard flashcard={flashcards} key={flashcards.id} />
            })}
        </div>
        </div>
        



    )
}
