import Song from "../Song"
import { dataSongs } from "./data"
import { useState } from "react"

const ListSongs = () => {
  const [ data, setData ] = useState(dataSongs)

  const handleLike = (id) => {
    const updateData = data.map((item) => {
      return item.id === id ? {...item, like: !item.like} : item
    })

    setData(updateData)
  }

  return (
    <div>
      <h2>Lista de canciones</h2>
      {data.map((item) => {
        return (
          <Song
            key={item.id}     
            id={item.id}
            image={item.cover_url} 
            name={item.name} 
            artist={item.artist}
            album={item.album}
            year={item.year}
            like={item.like}
            genre={item.genre}
            handleLike={handleLike}
          />
        )}
      )}
    </div>
  )
}

export default ListSongs