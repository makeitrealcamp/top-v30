import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [ name, setName ] = useState('')

  const handleChange = (valueName) => {
    setName(valueName)
  }

  const dataProvider = {
    name,
    handleChange
  }

  return(
    <FormContext.Provider
      value={dataProvider}
    >
      {children}
    </FormContext.Provider>
  )
}