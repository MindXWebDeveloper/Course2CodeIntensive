import './App.css'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import { taskStatus } from './data.js'

function App() {
  return (
    <div className="app-shell">
      <Header />

      <div className="board">
        {taskStatus.map((column) => (
          <TaskList
            key={column.statusId}
            title={column.name}
            statusId={column.statusId}
          />
        ))}
      </div>
    </div>
  )
}

export default App
