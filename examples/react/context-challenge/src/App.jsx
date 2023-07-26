import './App.scss';
import CandidateVotes from './components/CandidateVotes';
import Filter from './components/Filter';
import ListCandidates from './components/ListCandidates';
import TotalVotes from './components/TotalVotes';

const App = () => (
  <main className="main">
    <h2>Voting App</h2>
    <ListCandidates />
    <div className="content-container">
      <Filter />
      <div className="report-container">
        <TotalVotes />
        <CandidateVotes />
      </div>
    </div>
  </main>
);

export default App;
