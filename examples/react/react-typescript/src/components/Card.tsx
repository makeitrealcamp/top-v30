import { FC } from 'react'

type CardProps = {
  /* Title */
  title: string
  /* Description */
  description: string
  /* Price */
  price: number
}


const Card: FC<CardProps> = ({ title, description, price }) => {

  return(
    <div>
      <h1>{ title }</h1>
      <p>{ description }</p>
      <p>{ price }</p>
    </div>
  )
}

export default Card