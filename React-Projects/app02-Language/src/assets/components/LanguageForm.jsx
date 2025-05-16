import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord, removeWord } from '../redux/languageSlice';

const VocabularyForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    word: '',
    definition: '',
    exampleSentence: '',
    synonyms: '',
    antonyms: '',
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWord(form));
    setForm({
      word: '',
      definition: '',
      exampleSentence: '',
      synonyms: '',
      antonyms: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        name="word"
        placeholder="Word"
        value={form.word}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <input
        name="definition"
        placeholder="Definition"
        value={form.definition}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <input
        name="exampleSentence"
        placeholder="Example Sentence"
        value={form.exampleSentence}
        onChange={handleChange}
        className="block w-full mb-2 border p-2"
      />
      <input
        name="synonyms"
        placeholder="Synonyms"
        value={form.synonyms}
        onChange={handleChange}
        className="block w-full mb-2 border p-2"
      />
      <input
        name="antononyms"
        placeholder="Antonyms"
        value={form.antononyms}
        onChange={handleChange}
        className="block w-full mb-2 border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Word
      </button>
    </form>
  );
};

export default VocabularyForm;