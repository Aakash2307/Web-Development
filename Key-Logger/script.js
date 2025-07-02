const LogDiv = document.getElementById("log");
const StateDiv = document.getElementById("state");
const StartButton = document.getElementById("start");
const StopButton = document.getElementById("stop");




StartButton.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown )
    document.addEventListener("keyup", handleup )
    StartButton.disabled = true;
    StopButton.disabled = false;


});


StopButton.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown )
    document.removeEventListener("keyup", handleup )
    LogDiv.textContent = "";
    StateDiv.textContent = " ";
    StartButton.disabled = false;
    StopButton.disabled = true;


})


function handleDown(e) {
    LogDiv.textContent = `Key ${e.key} is pressed`;
    StateDiv.textContent = "Key is pressed";
}


function handleup(e) {
    LogDiv.textContent = `Key ${e.key} is released`;        
    StateDiv.textContent = "Key is released";
}