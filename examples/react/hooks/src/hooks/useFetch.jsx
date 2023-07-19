const useFetch = (url) => {
  useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            handleChange(json)
        }
    )
}, [])

}

export default useFetch;