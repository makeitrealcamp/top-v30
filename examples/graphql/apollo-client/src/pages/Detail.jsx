import React from "react"
import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"

import CharacterCard from "../components/CharacterCard"

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id){
      id
      name
      image
      status
      species
      origin {
        name
      }
      location {
        name
      }
    }
  }
`

const DetailPage = () => { 
  const { id } = useParams()

  const options = {
    variables: {id}  
  }

  const { data, loading, error } = useQuery(GET_CHARACTER, options)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>

  return(
    <div>
      <h1>Detail Page</h1>
      { data && (
        <div>
          <CharacterCard character={data.character} />
        </div>
      )}
    </div>
  )
}

export default DetailPage
