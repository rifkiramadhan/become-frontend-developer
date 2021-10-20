import React from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {

  return (
      <div className="Parentbox">
        <FotoProduk/>
        <ProdukInfo isDiscount="Yes" name="Youdora Dora" category="LEBARAN"/>
        <ReviewItems/>
      </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
        <img src="bwasneaker2.jpg" alt=""/>
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  // eslint-disable-next-line eqeqeq
  if(isDiscount == "Yes") {
    return (
      <p>Diskon {discount}% Off</p>
    );
  }
  // eslint-disable-next-line eqeqeq
  else if(isDiscount == "Coming") {
    return (
      <p>Akan ada diskon ...</p>
    );
  } 
  else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"];
  const listBenefits = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <div className="Cate">{category}</div>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 73.309.399</p>
        <CheckDiscount isDiscount={isDiscount} discount={50}/>
        <p className="Info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus illo eligendi aspernatur esse sint et consequatur possimus beatae quidem, adipisci, quis cumque veniam laudantium! Aut voluptatibus porro iste totam facilis, mollitia obcaecati laborum ducimus et consectetur maxime optio inventore ad minus, illo veniam dolores quasi eaque, assumenda ratione eius dignissimos.
        </p>
        <ul>
          <li>{listBenefits}</li>
        </ul>
        {}
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
 return console.log("Membeli " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
}

export default App;
