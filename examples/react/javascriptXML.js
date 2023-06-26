// % conceptos de react -> jsx, componentes, estados, props y eventos
// SPA -> single page application
// JSX -> javascript xml

// Reglas de JSX
// 1. Toda etiqueta debe cerrarse <img></img> ó <img/>
// 2. Los componentes deben devolver un solo elemento <></>, <Fragment></Fragment>
// 3. Las etiquetas class y for se escriben className y htmlFor
// 4. Los estilos se escriben en camelCase className, htmlFor, onClick
// 5. Los componentes deben empezar con mayuscula
// 6. El if se escribe en ternario -> condicion ? true : false
// 7. No podemos usar for o while
const Component = () => {
  const name = 'Jhon Doe'
  const elements = [
    {
      id: 1,
      name: 'Jhon Doe'
    },
    {
      id: 2,
      name: 'Jhon Doe'
    },
    {
      id: 3,
      name: 'Jhon Doe'
    },
  ]

  return (
    <>
      <div className='product-card' htmlFor='input'>
        {true ? (
          <div>Clase JSX 1</div>
        ) : (
          <div>Clase JSX 2</div>
        )}
      </div>
      <div>
        { elements.map((element) => {
          return (
            <div>
              <h1>{ element.name }</h1>
            </div>
          )}
        )}
      </div>
      <p>{ name }</p>
    </>
  )
}


const MyPage = () => {

  return (
    <>
      <h1>My Page</h1>
      <Component />
    </>
  )
}

// js vanilla
const div = document.createElement("div")
div.className = 'product-card'