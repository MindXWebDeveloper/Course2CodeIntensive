import './style.css'
const Hello = () => {
    let isDisplay = true;
    const school = "MindX Technology School";
    const age = 20;
    // mảng này còn có thể là 1 mảng component được
    const listName = ["Alice","John Wick", "Bob", "David"];
    return (
        <>
            {isDisplay && (
                <div className="HellComponent">
                    <h1 style={{color: 'red'}}>Bạn là người {age >= 20 ? "trưởng thành" : "đang lớn"}!</h1>
                    <p>Hello everyone, welcome to {school}</p>
                    {listName.join(', ')}
                </div>
            )}
        </>
    )
}

export default Hello;