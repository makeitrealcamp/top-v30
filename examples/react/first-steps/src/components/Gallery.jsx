import { sculptureList } from './data.js';
import { useState } from 'react';

function Gallery() {
  //let _index = 0;
  const [index, setIndex] = useState(0)

  function handleClick() {
    //_index = _index + 1;
    setIndex(index + 1)
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
