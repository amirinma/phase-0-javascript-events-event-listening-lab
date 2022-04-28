function addingEventListener() {
    function clickFu(){
        alert("I was clicked")
    }
    const input = document.getElementById("input")
    input.addEventListener("click", clickFu)
}
