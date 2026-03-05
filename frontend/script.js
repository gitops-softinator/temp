function getMessage() {

fetch("/api/message")
.then(res => res.json())
.then(data => {
    document.getElementById("result").innerText = data.message;
})
.catch(err => console.error(err));

}