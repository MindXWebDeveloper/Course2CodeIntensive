import './TaskCard.css'
import editIcon from '../../assets/circum_edit.svg'
import paperclipIcon from '../../assets/Icon__Paperclip.svg'
import clockIcon from '../../assets/Icon__Clock.png'
import flagGreen from '../../assets/Icon__Flag_Green.svg'
import flagYellow from '../../assets/Icon__Flag_Yellow.svg'
import flagRed from '../../assets/Icon__Flag_Read.svg'
import {users} from '../../data.js'
const flagMap = {
  1: flagGreen,
  2: flagYellow,
  3: flagRed,
}

const TaskCard = (props) => {
  let {title, description, deadline, flagId, assignedTo} = props
  let assignedName = users.find(item => item.userId === assignedTo).name
  return (
    <article className="task-card">
      <div className="task-card__header">
        <h3 className="task-card__title">{title}</h3>
        <img className="task-card__edit" src={editIcon} alt="Edit task" />
      </div>

      <p className="task-card__description">{description}</p>

      <div className="task-card__tag">{assignedName}</div>

      <div className="task-card__footer">
        <div className="task-card__meta task-card__meta--left">
          <img src={paperclipIcon} alt="Attachments" className="task-card__icon" />
        </div>

        <div className="task-card__meta task-card__meta--right">
          <span className="task-card__flag-wrap">
            <img src={flagMap[flagId] || flagGreen} alt="Flag" className="task-card__flag" />
          </span>
          <img src={clockIcon} alt="Flag" className="task-card__clock" />
          <span className="task-card__date">{deadline.toLocaleDateString("en-US", {month: "short",day: "numeric",})}</span>
        </div>
      </div>
    </article>
  )
}

export default TaskCard
