import Candidate from "../Candidate"
import './ListCandidates.scss'

const candidatesArr = [
  "candidate1",
  "candidate2",
  "candidate3",
  "candidate4",
]

const ListCandidates = () => {

  return (
    <div className='candidate-container'>
    {
      candidatesArr.map(item=>{ 
        return (
          <Candidate/>
        )}
      )}
    </div>
  )
}

export default ListCandidates