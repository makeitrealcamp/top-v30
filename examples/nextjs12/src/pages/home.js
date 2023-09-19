import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Image from "next/image"


const HomePage = ({ data }) => {
const { name, description, image } = data
const { data: { attributes } } = image

  return (
    <>
      <h1>{ name }</h1>
      <h2>{ description }</h2>
      <Image
        src={ `http://localhost:1337${attributes.url}` }
        width={ attributes.width }
        height={ attributes.height }
      />
    </>
  )
}

export default HomePage

export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query homePageQuery{
        homePage {
          data {
            attributes {
              name
              description
              image {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `
  })

  return {
    props: {
      data: data.homePage.data.attributes
    }
  }
  
}