import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWord } from '../redux/languageSlice';

const VocabularyList = () => {
  const { vocabulary } = useSelector((state) => state.languageLearning);
  const dispatch = useDispatch();

  return (
    <div>
      {vocabulary.map((word) => (
        <div key={word.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{word.word}</h3>
          <p>Definition: {word.definition}</p>
          <p>Example Sentence: {word.exampleSentence}</p>
          <p>Synonyms: {word.synonyms}</p>
          <p>Antonyms: {word.antononyms}</p>
          <button
            onClick={() => dispatch(removeWord(word.id))}
            className="bg-red-500 text-white px-3 py-1 rounded mt-2"
          >
            Remove Word
          </button>
        </div>
      ))}
    </div>
  );
  
};

export default VocabularyList;