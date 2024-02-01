import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BirthdayList } from './BirthdayListProj/BirthdayList';
import { QuestionAnswer } from './QuestionAnswerProj/QuestionAnswer';

function App() {
  return (
    <Router>

   <Routes>
    <Route path='/BirthdayProject' element={<BirthdayList></BirthdayList>}/>
    <Route path='/QuestionAnswer' element={<QuestionAnswer></QuestionAnswer>}/>

   </Routes>
   </Router>

  );
}

export default App;
