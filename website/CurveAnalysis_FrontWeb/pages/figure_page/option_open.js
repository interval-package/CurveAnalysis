
var func_names = ["Case1", "Case2", "Case3"]


window.onload = function(){
    // var
    loading_ops();
    document.getElementById("default_open").click();
}


function loading_ops(){
    var body = document.getElementById("left_bar_ops");
    for(iter in func_names){
        var temp = document.createElement("button");
        temp.setAttribute("class", "tablinks");
        temp.innerHTML = func_names[iter];
        temp.addEventListener("click", open_doc);
        // temp.click();
        body.appendChild(temp);
    }

    document.getElementById("default_open").addEventListener("click", open_doc);
    // body.addEventListener("click", open_doc)
}


function open_doc(evt) {
    var info = evt.currentTarget.innerHTML;
    // console.log(info);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}