// 自动调用添加内容

var xmlhttp = new XMLHttpRequest();

window.onload = function(){
    loading_md_info();
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

}

function loading_md_info(){

    var body = document.getElementById("displayer");
    var bar = document.getElementById("mySidenav");

    var container;

    container = document.createElement("div");
    container.setAttribute("id","auto_add");
    container.setAttribute("class", "tabcontent");
    xmlhttp.open("get", )

    body.appendChild(container);

    container = document.createElement("a");
    container.setAttribute("onclick","open_doc(event, 'auto_add')");
    container.appendChild(document.createTextNode("auto"));

    bar.appendChild(container);
}


function open_doc(evt, info) {
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
