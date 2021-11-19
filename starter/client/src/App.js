import './App.css';
//import axios from axios;
import TaskList from './components/TaskList';
import Header from './components/Header';
function App() {
  return (
    <div class = "h-full items-center flex flex-col p-10 dark:text-white transition-all duration-500">
      <div class = "w-full md:w-2/3 ">
        <Header/>
        <TaskList/>
      </div>
        
     
    </div>
  );
}

export default App;
