import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} />
            <div>
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
