notifications = function() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            msg = xhr.responseText
            document.getElementById("notice").innerHTML = msg;
        }
    }
    xhr.open("GET", "/sender/notification");
    xhr.send();
}
setInterval(notifications, 5000)
