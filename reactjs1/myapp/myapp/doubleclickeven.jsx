function Test(){
    function displayInfo(){
        alert("This is Event concept in Reactjs application")
    }
    return(
        <div>
            <button onDoubleClick={displayInfo}>Click me</button>
        </div>
    )
}
export default Test;