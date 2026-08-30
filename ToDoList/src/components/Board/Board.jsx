import TaskList from '../TaskList/TaskList.jsx'
import { taskStatus } from '../../data.js'
import './board.css'
const Board = () => {
  return (
    <>
      <div className="board">
        {taskStatus.map((column) => (
          <TaskList
            key={column.statusId}
            title={column.name}
            statusId={column.statusId}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
