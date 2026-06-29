function load_category_fromxml(dataset_path, bodycategory) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var xmlDoc = xhr.responseXML;
            
            if (xmlDoc == null) {
                alert("Lỗi: Không thể parse file XML. Vui lòng kiểm tra cú pháp XML.");
                return;
            }
            
            var tag_categories = xmlDoc.getElementsByTagName("category");
            
            for (var i = 0; i < tag_categories.length; i++) {
                var value_tag_image = tag_categories[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
                var value_tag_name = tag_categories[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                
                var tr = document.createElement("tr");
                
                var td_image = document.createElement("td");
                td_image.innerHTML = "<img src='" + value_tag_image + "' alt='Hình ảnh' width='50' height='50'>";                
                
                var td_name = document.createElement("td");
                td_name.innerHTML = value_tag_name;
                
                tr.appendChild(td_image);
                tr.appendChild(td_name);
                
                bodycategory.appendChild(tr); 
            }
        }
        else if (xhr.readyState == 4 && xhr.status != 200) {
            console.error("Không thể tải file XML. Status: " + xhr.status);
        }
    }
}