var globalXmlDoc = null; 

window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "employee.xml", true);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            globalXmlDoc = xhr.responseXML;
            if (globalXmlDoc == null) {
                alert("Lỗi đọc file XML");
                return;
            }
            populateDropdown(); 
        }
    }
};

function populateDropdown() {
    var select = document.getElementById("titleSelect");
    var employees = globalXmlDoc.getElementsByTagName("employee");
    var uniqueTitles = []; // Mảng chứa các Title không trùng lặp

    for (var i = 0; i < employees.length; i++) {
        // Dùng getAttribute vì title nằm trong thẻ <employee title="...">
        var title = employees[i].getAttribute("title");
        
        if (!uniqueTitles.includes(title)) {
            uniqueTitles.push(title);
        }
    }

    for (var j = 0; j < uniqueTitles.length; j++) {
        var option = document.createElement("option");
        option.value = uniqueTitles[j];
        option.text = uniqueTitles[j];
        select.appendChild(option);
    }
}

function filterEmployees() {
    var selectedTitle = document.getElementById("titleSelect").value;
    var tbody = document.getElementById("employeeBody");
    var table = document.getElementById("employeeTable");

    tbody.innerHTML = "";

    if (selectedTitle === "") {
        table.style.display = "none";
        return;
    }

    table.style.display = "table";
    var employees = globalXmlDoc.getElementsByTagName("employee");

    for (var i = 0; i < employees.length; i++) {
        var title = employees[i].getAttribute("title");

        if (title === selectedTitle) {
            var id = employees[i].getAttribute("id");
            var name = employees[i].getElementsByTagName("name")[0].textContent;
            var phone = employees[i].getElementsByTagName("phone")[0].textContent;

            var tr = document.createElement("tr");

            var td_id = document.createElement("td");
            td_id.textContent = id;
            
            var td_name = document.createElement("td");
            td_name.textContent = name;
            
            var td_phone = document.createElement("td");
            td_phone.textContent = phone;

            tr.appendChild(td_id);
            tr.appendChild(td_name);
            tr.appendChild(td_phone);

            tbody.appendChild(tr);
        }
    }
}