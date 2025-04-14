import { useState } from 'react';
import axios from 'axios';

const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false
};

function App() {

  const [formData, setFormData] = useState(initialFormData);

  const endpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  function fetchPost() {
    axios.post(endpoint, formData)
      .then(res => {
        setFormData(res.data)
      })
      .catch(err => console.log(err))
  }

  function handleFormData(element) {
    const value =
      element.target.type === "checkbox" ?
        element.target.checked : element.target.value;

    setFormData((formData) => ({
      ...formData,
      [element.target.name]: value,
    }));
  };

  function handleSubmit(element) {
    element.preventDefault();
    fetchPost();
    setFormData(initialFormData);
  }

  return (
    <>
      <h1>React Post Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Inserisci autore</label>
        <br />
        <input type="text"
          name="author"
          value={formData.author}
          onChange={handleFormData}
          placeholder='Inserisci autore' />
        <hr />
        <label htmlFor="title">Inserisci titolo post</label>
        <br />
        <input type="text"
          name="title"
          value={formData.title}
          onChange={handleFormData}
          placeholder='Inserisci titolo' />
        <hr />
        <label htmlFor="body">Inserisci testo del post</label>
        <br />
        <input type="text"
          name="body"
          value={formData.body}
          onChange={handleFormData}
          placeholder='Inserisci contenuto' />
        <hr />
        <label htmlFor="public">Post privato</label>
        <br />
        <input type="checkbox"
          name="public"
          checked={formData.public}
          onChange={handleFormData}
          id="public" />
        <hr />
        <button>Invio</button>
        {console.log(formData)}
      </form>
    </>
  )
}

export default App
