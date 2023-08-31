import { FC, ReactNode, SyntheticEvent } from 'react'

type ButtonProps = {
  children: ReactNode
}

const CustomButton: FC<ButtonProps> = ({ children }) => {

  const handleClick = (e: SyntheticEvent) => {
    console.log(e.target)
  }

  return (
    <button
      onClick={handleClick}
    >
      { children }
    </button>
  )
}

export default CustomButton