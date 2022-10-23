// 自动调用添加内容

var names = ["auto_add_1", "auto_add_2", "auto_add_3", "auto_add_4"];


window.onload = function(){
    loading_md_names();

    document.getElementById("side_nav_details").addEventListener("click",proxy_for_loading_md);

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("Quick_Start").click();
}

function loading_md_names(){
    var bar = document.getElementById("side_nav_details");
    for(iter in names){
        container = document.createElement("a");
        // container.setAttribute("onclick",`open_doc(event, "${names[iter]}")`);
        // 这里很坑哦，这个地方是对于我们的变量要加一个转字符串，如果用原本的内容，会导致这里传入的是一个完全的
        container.appendChild(document.createTextNode(names[iter]));
    
        bar.appendChild(container);
    }
}

function proxy_for_loading_md(e){
    console.log(e.target.innerHTML);
    document.getElementById("overview").innerHTML = `<h1>${e.target.innerHTML}</h1>`;
}