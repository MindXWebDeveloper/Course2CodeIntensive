import './style.css';

const Card = (props) => {
    let {name = "MindX School", age = 18} = props
    return (
        <div className="card">
            <div className="name">Name: {name}</div>
            <div className="age">Age: {age}</div>
        </div>
    )
}

export default Card;