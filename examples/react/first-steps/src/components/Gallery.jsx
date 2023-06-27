import { sculptureList } from './data.js';

function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  const sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleClick}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name} </i>
        por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </div>
  );
}

export default Gallery;
