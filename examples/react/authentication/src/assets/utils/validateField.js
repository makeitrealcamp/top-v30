import { validators } from "../validators"

export const validateField = (fieldName, value) => {
  let errorMessage = ''

  const errorActions = {
    firstName: () => !(validators.name.test(value)) && 'El nombre solo puede contener letras',
    lastName: () => !(validators.name.test(value)) && 'El apellido solo puede contener letras',
    email: () => !(validators.email.test(value)) && 'El email no es válido, ejm: jhon@gmail.com',
    password: () => !(validators.password.test(value)) && 'La contraseña debe tener al menos 8 caracteres, una letra y un número'
  }
  errorMessage = errorActions[fieldName]()

  setErrors({
    ...errors,
    [fieldName]: errorMessage
  })

  return errorMessage
}