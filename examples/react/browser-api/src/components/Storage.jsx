//metodos de localStorage

//localStorage.setItem('armadillo_msgr_mutex', 'obzw8j')
//localStorage.getItem('armadillo_msgr_mutex')
////localStorage.removeItem('armadillo_msgr_mutex')
//localStorage.clear()

//sessionStorage.setItem('armadillo_msgr_mutex', 'obzw8j')
//sessionStorage.getItem('armadillo_msgr_mutex')
////sessionStorage.removeItem('armadillo_msgr_mutex')
//sessionStorage.clear()

const userData = {
  name: "Antonio",
  last_name: "ruiz",
  age: 29
}


const StorageApiExample = () => {
  localStorage.setItem("userData", JSON.stringify(userData))
  const user = JSON.parse(localStorage.getItem("userData"))
  console.log(user)
  return(
    <div>
      <h1>Storage Browser Api</h1>
      <p>{user.name}</p>
      {["Antionio", "oliveros", 29]}
    </div>
  )
}

export default StorageApiExample
