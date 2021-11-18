import logo from './logo.svg';
import './App.css';
//import axios from axios;
import TaskList from './components/TaskList';
import Header from './components/Header';
function App() {
  return (
    <div class = "h-auto items-center flex flex-col">
      <div class = "w-2/3">
        <Header/>
        <TaskList/>
      </div>
        
     
    </div>
  );
}

export default App;
