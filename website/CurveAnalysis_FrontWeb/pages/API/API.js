// 自动调用添加内容

var names = ["auto_add_1", "auto_add_2", "auto_add_3", "auto_add_4"];


window.onload = function(){
    loading_md_info();
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

}

function loading_md_info(){
    var xmlhttp = new XMLHttpRequest();

    var body = document.getElementById("displayer");
    var bar = document.getElementById("mySidenav");

    var container;

    for( iter in names ){
        container = document.createElement("div");
        container.setAttribute("id",`${names[iter]}`);
        container.setAttribute("class", "tabcontent");
        container.innerHTML = `<h1>add${iter}</h1><p>${names[iter]}</p>`;
    
        body.appendChild(container);

        container = document.createElement("a");
        container.setAttribute("onclick",`open_doc(event, "${names[iter]}")`);
        // 这里很坑哦，这个地方是对于我们的变量要加一个转字符串，如果用原本的内容，会导致这里传入的是一个完全的
        container.setAttribute("class", "tablinks")
        container.appendChild(document.createTextNode(names[iter]));
    
        bar.appendChild(container);
    }

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
