import './App.css';
import NavBar from './components/navbar'
import VideoContainer from './components/video_container'
import LinkFile from './components/companyLink'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <VideoContainer />
      <LinkFile />
    </Router>
    </>
  );
}

export default App;
