import "./App.css";
import Card from "./assets/components/card/Card";
import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    {
      title: "Tafsiri Hilol",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image:
        "https://lh3.googleusercontent.com/proxy/-BoParTFSqbJxRudspSLJIc6JjvZa2Wv8Q3cGYW6IVHOIGMkTLWK_dAKqJVd3NxSZgUTFXbDp0yxN7vONbgO_tQqmwCnW9iGcg",
    },
    {
      title: "Ijtimoiy Odoblar",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image:
        "https://hilolnashr.uz/image/cache/catalog/MSMY/Ijtimoiy_odoblar-3d-550x550h.jpg",
    },
    {
      title: "Ulamolar Nazdida Vaqtning Qadri",
      author: "Abdulfattoh Abu Gudda",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image:
        "https://assets.asaxiy.uz/product/items/desktop/4c56ff4ce4aaf9573aa5dff913df997a2022061213103157717TBtmuWmIgA.jpg.webp",
    },
    {
      title: "Oltin Silsila",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image:
        "https://olcha.uz/image/700x700/products/2022-02-15/oltin-silsila-saiul-bukhori-tli-tplami-8-zhuz-36862-0.jpeg",
    },
    {
      title: "Ikki Eshik Orasi",
      author: "Abdulla Qodiriy",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image:
        "https://ketmonshop.uz/offer_images/ikki-eshik-orasi-otkir-xoshimov-1613.webp",
    },
    {
      title: "O‘tkan Kunlar",
      author: "Abdulla Qodiriy",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image:
        "https://barakot.uz/image/get-image?imageName=O%27tkan%20kunlar%20(oq)%20(A5,yumshoq).jpg",
    },
    {
      title: "O‘tkan Kunlar",
      author: "Abdulla Qodiriy",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image:
        "https://barakot.uz/image/get-image?imageName=O%27tkan%20kunlar%20(oq)%20(A5,yumshoq).jpg",
    },
    {
      title: "O‘tkan Kunlar",
      author: "Abdulla Qodiriy",
      description:
        "Roman XIX asr voqealarini o‘z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image:
        "https://barakot.uz/image/get-image?imageName=O%27tkan%20kunlar%20(oq)%20(A5,yumshoq).jpg",
    },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    image: "",
    description: "",
  });
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const addBook = (book) => {
    setBooks([...books, book]); // `books` massiviga yangi kitob qo‘shiladi
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Form yuborilishini to‘xtatish (default refresh oldini olish)
    addBook(newBook); // Yangi kitobni qo‘shish funksiyasini chaqirish
    setNewBook({ title: "", author: "", image: "", description: "" }); // Formani tozalash
    setModalOpen(false)
  };




  return (
    <div className="container">
     <div className="box" style={{filter:isModalOpen?"blur(30px)":"blur(0px)"}}>
     <h1>MY Books</h1>
      <button id="btn" onClick={()=> setModalOpen(true)}>
        Add Book
      </button>
      <div className="ota">
        {books.map((e, i) => {
          return <Card key={i} data={e} />;
        })}
      </div>

     </div>
      {isModalOpen && (
        <div className="modal">
          <button className="close-btn" onClick={()=>setModalOpen(false)}>X</button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Name"
              value={newBook.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={newBook.author}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newBook.image}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newBook.description}
              onChange={handleChange}
              required
            />
            <button className="submit-btn" type="submit">Add book</button>{" "}

          </form>
        </div>
      )}
    </div>
  );
}

export default App;
