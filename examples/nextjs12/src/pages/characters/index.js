import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles  from './character.module.css'

const CharactersPage = ({ characters }) => {

  return (
    <>
      <div className={styles.characters_content}>
        <h1
          className={styles.characters_title}
        >Personajes</h1>
        <div>
          {characters.map(character => {
            return (
              <Link
                href={`/characters/${character.id}`}
              >
                <div 
                  
                  >
                  <h2>{character.name}</h2>
                  <Image 
                    layout='responsive'
                    src={character.image} 
                    alt={`imagen del personaje ${character.name}`} 
                    width={800}
                    height={800}
                    />
                </div>
              </Link>
            )}
            )}
        </div>
      </div>
    </>
  )
}

export default CharactersPage

export const getServerSideProps = async () => {

  const responseAPI = await fetch('https://rickandmortyapi.com/api/character')
  const characters = await responseAPI.json()


  return{
    props: {
      characters: characters.results
    }
  }
}