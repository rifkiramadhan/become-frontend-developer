import logo from './logo.svg';
import './App.css';

function Appx() {


  return (
      <div className="Parentbox">
        
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

function ProdukInfo() {
  const category = "HOLIDAY";
  return (
    <div>
      <div className="Deskripsi">
        <div className="Cate">{category}</div>
        <h1 className="Title">Pinky Swag</h1>
        <p className="Price">IDR 73.309.399</p>
        <div className="Info">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam culpa iste molestias rem magni nihil dolore at expedita voluptas eum corrupti aspernatur autem, obcaecati architecto maiores earum tenetur id in assumenda! Quaerat sequi, tempore vitae eligendi amet ea in dolorum eaque iure reiciendis distinctio illo at reprehenderit fugit tempora. Esse tempore est blanditiis eius repudiandae consectetur velit aut atque consequuntur eveniet maiores sed id corporis veritatis quisquam amet ipsa, illum aspernatur minima nemo a delectus quidem ratione! Tempora corporis vero necessitatibus sapiente facere rem harum dolore deleniti quas! Officia illum odio, ducimus nesciunt earum esse! Beatae numquam deserunt fugit facilis.
        </div>
      </div>
    </div>
  );
}

export default Appx;
