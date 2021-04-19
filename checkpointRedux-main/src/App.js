import './App.css';
import AddTodo from './components/AddTask/AddTask';
import TaskList from './components/taskList/TaskList';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TaskList/>
    </div>
  );
}

export default App;
