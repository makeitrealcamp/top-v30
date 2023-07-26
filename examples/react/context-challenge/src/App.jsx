import './App.scss'
import ListCandidates from './components/ListCandidates'
import Filter from './components/Filter'
import TotalVotes from './components/TotalVotes'
import IndividualVotes from './components/IndividualVotes'

function App() {
  return (
    <>
      <div className='title'>
        <h1>Ejerce tu derecho al voto</h1>
      </div>
      <div className="App">
        <ListCandidates />
          <div className='main'>
            <Filter />
            <div className="second-main">
              <TotalVotes />
              <IndividualVotes />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
