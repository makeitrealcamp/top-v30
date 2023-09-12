import React from 'react'
import Image from 'next/image'

const CharacterByIdPage = ({ character }) => {

  return (
    <React.Fragment>
      <h1>Detalle del personaje</h1>
      <div>
        <Image
          layout='responsive'
          src={character.image}
          width={500}
          height={500}
        />
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.gender}</p>
      </div>
    </React.Fragment>
  )
}

export default CharacterByIdPage

export const getServerSideProps = async ({ params }) => {
  
    const responseAPI = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
    const character = await responseAPI.json()

    return {
      props: {
        character
      }
    }
}