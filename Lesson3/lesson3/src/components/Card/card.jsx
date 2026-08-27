import './style.css'

const Card = (props) => {
    let {name, className, note} = props
    return(
        <div className='card'>
            <div className='name'>Tôi tên: {name}</div>
            <div className='age'>Học lớp: {className}</div>
            <div className='age'>{note}</div>
        </div>
    )
}

export default Card;