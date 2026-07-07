function add_node()
{
    var contentInput = document.getElementById("addContent").value;
    var posInput = document.getElementById("addPos").value;

    if (contentInput == "")
    {
        alert("Please enter content to add!");
        document.getElementById("addContent").focus();
        return;
    }

    var ul = document.getElementById("nodeList");
    var li = document.createElement("li");
    li.innerHTML = contentInput;
    var items = ul.getElementsByTagName("li");

    // Dùng parseInt để ép posInput thành số nguyên khi so sánh
    if (posInput == "" || parseInt(posInput) > items.length)
    {
        ul.appendChild(li);
    }
    else
    {
        ul.insertBefore(li, items[parseInt(posInput) - 1]);
    }

    document.getElementById("addContent").value = "";
    document.getElementById("addPos").value = "";
}

function remove_node()
{
    var posInput = document.getElementById("removePos").value;
    var ul = document.getElementById("nodeList");
    var items = ul.getElementsByTagName("li");

    // Ép kiểu số để check điều kiện hợp lệ chính xác 100%
    if (posInput == "" || parseInt(posInput) < 1 || parseInt(posInput) > items.length)
    {
        alert("Invalid position!");
        document.getElementById("removePos").focus();
        return;
    }

    ul.removeChild(items[parseInt(posInput) - 1]);
    
    document.getElementById("removePos").value = "";
}

function modify_node()
{
    var newContent = document.getElementById("modifyContent").value;
    var posInput = document.getElementById("modifyPos").value;
    var ul = document.getElementById("nodeList");
    var items = ul.getElementsByTagName("li");

    if (newContent == "")
    {
        alert("Please enter new content!");
        document.getElementById("modifyContent").focus();
        return;
    }

    if (posInput == "" || parseInt(posInput) < 1 || parseInt(posInput) > items.length)
    {
        alert("Invalid position!");
        document.getElementById("modifyPos").focus();
        return;
    }

    items[parseInt(posInput) - 1].innerHTML = newContent;
    
    document.getElementById("modifyContent").value = "";
    document.getElementById("modifyPos").value = "";
}