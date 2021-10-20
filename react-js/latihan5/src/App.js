import logo from './logo.svg';
import './App.css';

function Appx() {

  const category = "HOLIDAY";
  const price = 74000000;

  return (
      <div class="Parentbox">
        <div class="Foto">
          <img src="bwasneaker2.jpg" alt=""/>
        </div>
        <div class="Deskripsi">
          <div class="Cate">{category}</div>
          <h1 class="Title">Pinky Swag</h1>
          <p class="Price">IDR {price}</p>
          <div class="Info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam culpa iste molestias rem magni nihil dolore at expedita voluptas eum corrupti aspernatur autem, obcaecati architecto maiores earum tenetur id in assumenda! Quaerat sequi, tempore vitae eligendi amet ea in dolorum eaque iure reiciendis distinctio illo at reprehenderit fugit tempora. Esse tempore est blanditiis eius repudiandae consectetur velit aut atque consequuntur eveniet maiores sed id corporis veritatis quisquam amet ipsa, illum aspernatur minima nemo a delectus quidem ratione! Tempora corporis vero necessitatibus sapiente facere rem harum dolore deleniti quas! Officia illum odio, ducimus nesciunt earum esse! Beatae numquam deserunt fugit facilis.
          </div>
        </div>
      </div>
  );
}

export default Appx;
