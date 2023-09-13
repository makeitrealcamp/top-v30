import React from "react"
import { gql, useQuery } from "@apollo/client"
import CharacterCard from '../components/CharacterCard'

const GET_CHARACTERS = gql`
  query AllCharacters{
    characters {
      results {
        id
        name
        status
        image
        species
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`


const HomePage = (props) => {
  const { data, loading, error } = useQuery(GET_CHARACTERS)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>

  return(
    <div>
      <h1>Home Page</h1>
      <div className="parent">
        {data.characters.results.map((character) => {
            return (
              <CharacterCard key={character.id} character={character} />
            )}
        )}
      </div>
    </div>
  )
}

export default HomePage
