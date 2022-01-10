import { useState, useEffect } from "react";
import cardsData from "fakeApi/cards.json";

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-4  container mx-auto ">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-14 rounded-lg shadow-md flex flex-col items-center text-center ">
            <img
              alt=""
              className="h-[150px] w-[150px] mb-6 "
              src={card.image}
            />
            <h6 className="font-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
}
