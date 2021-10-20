import React from 'react';
import './App.css';

function Reviews() {
  // Mempersiapkan data dummy JSON
  const users = [
    {
      "id": 1,
      "name": "Masayoshi",
      "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
      "photo": "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 2,
      "name": "Shayna",
      "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
      "photo": "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 3,
      "name": "Alqowy",
      "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
      "photo": "https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];
  const listReview = users.map((itemReview) =>
    <div className="Item">
      <img src={itemReview.photo} alt=""/>
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
   </div>
  );
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Reviews;
