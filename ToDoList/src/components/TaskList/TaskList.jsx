import './TaskList.css'
import TaskCard from '../TaskCard/TaskCard'
import {tasks} from '../../data.js'


const TaskList = (props) => {
    let {statusId, title} = props  
    let count = tasks.filter(item => item.statusId === statusId).length;
    const cards = tasks.filter(item => item.statusId === statusId) || []

    return (
        <div className='task-list'>
            <div className="header">
                <div className='title'>
                    <div className='label'>{title}</div>
                    <div className='count'>{count}</div>
                </div>
                <div className="action">
                    <button type="button">+</button>
                    <button type="button" className="more"><span>⋯</span></button>
                </div>
            </div>

            <div className="task-list__cards">
                {cards.map((card, index) => (
                    <TaskCard key={`${title}-${index}`} {...card} />
                ))}
            </div>
        </div>
    );
}

export default TaskList;