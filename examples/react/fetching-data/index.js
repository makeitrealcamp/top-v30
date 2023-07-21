import fetch from 'node-fetch';

async function getAllEpisodes() {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  return data.results;
}

async function getCharacterInfo(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function main() {
  const episodes = await getAllEpisodes();
  // const characters = episodes.map(episode => {
  //   return episode.characters.slice(0, 10)
  // })


  // otra forma 
  // const episodes = episodes.reduce((acc, item)=> {
  //   return [...acc, ...item.characters.slice(0, 10)]
  // }, [])

  // const charactersData = new Set()
  // characters.forEach(character => {
  //   charactersData.add(getCharacterInfo(character))
  // });

  // const result = await Promise.all(characters)

  
  const characters = new Set()
  episodes.forEach(episode => {
    episode.characters.slice(0, 10).forEach(character => {
      characters.add(getCharacterInfo(character))
    })
  });
  const result = await Promise.all(characters)
  const data = episodes.map((episode) => {
    return {
      title: `${episode.name} - ${episode.episode}`,
      air_date: `${episode.air_date}`,
      characters: episode.characters.slice(0, 10).map((url)=> {
        const { name, species } = result.find((item) => item.url === url)
        return {
          name, species
        }
      })
    }
  })

  console.log(data[0])


  
}

main()