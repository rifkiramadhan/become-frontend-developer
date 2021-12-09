import { useEffect, useState } from 'react';
import axios from 'axios';
import GameItem from '../../molecules/GameItem';

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  useEffect(async () => {
    const response = await axios.get('https://bwa-storegg-pro.herokuapp.com/api/v1/players/landingpage');
    // eslint-disable-next-line no-console
    console.log('data: ', response.data);
    setGameList(response.data.data);
  }, []);

  return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
                </h2>
                <div
                  className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                  data-aos="fade-up"
                >
                    {gameList.map((item) => (
                      // eslint-disable-next-line no-underscore-dangle
                      <GameItem key={item._id} title={item.name} category={item.category.name} thumbnail={`https://bwa-storegg-pro.herokuapp.com/uploads/${item.thumbnail}`} />
                    ))}
                </div>
            </div>
        </section>
  );
}
