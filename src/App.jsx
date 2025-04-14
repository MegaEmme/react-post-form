import { useState } from 'react';
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  function handleFormData(element) {
    setFormData((formData) => ({
      ...formData,
      [element.target.name]: element.target.value,
    }))
  }

  return (
    <>
      <h1>React Post Form</h1>
      <label htmlFor="">Inserisci autore</label>
      <input type="text"
        name="author"
        value={formData.author}
        onChange={handleFormData}
        placeholder='Inserisci autore' />
      <hr />
      <label htmlFor="">Inserisci titolo post</label>
      <input type="text"
        name="title"
        value={formData.title}
        onChange={handleFormData}
        placeholder='Inserisci titolo' />
      <hr />
      <label htmlFor="">Inserisci testo del post</label>
      <input type="text"
        name="body"
        value={formData.body}
        onChange={handleFormData}
        placeholder='Inserisci contenuto' />
      {console.log(formData)}
    </>
  )
}

export default App
