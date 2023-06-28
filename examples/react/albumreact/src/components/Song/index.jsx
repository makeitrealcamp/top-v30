import './Song.scss';

const Song = ({ 
  id,
  image,
  name,
  artist,
  album,
  year,
  like,
  genre,
  handleLike
 }) => {

  return(
    <section className="album">
      <img
        className="album__img"
        src={image}
        alt={`${album} Album`}
        aria-label="Album Image"
      />
      <section className="album__info">
        <section className="artist__info">
          <h2 className="artist__name">
            {artist}
          </h2>
          <p className="artist__album">
            {album}
          </p>
        </section>
        <section className="song__info">
          <h3 className="song__name">
            {name}
          </h3>
          <p className="song__year">
            (
            {year}
            )
          </p>
        </section>
        <section className="album__bottom">
          <div className="album__genre">
            {genre}
          </div>
          <div className="album__like">
            <button onClick={() => handleLike(id)}>
              {like ? 'No me gusta' : 'Me gusta!'}
            </button>
            <i className={`fa-heart `} />
          </div>
        </section>
      </section>
    </section>
  )
}

export default Song