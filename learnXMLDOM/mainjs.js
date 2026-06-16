function load_customer_fromxml(dataset_path,bodycustomer)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            //handling when loading data successfully
            //khi vào đây tức là đã về local --> dùng DOM bài trước
            //var xmlDoc = parser.parseFromString(xhr.responseXML,"text/xml"); 
            var xmlDoc = xhr.responseXML;
            
            if (xmlDoc == null)
            {
                alert("Lỗi: Không thể parse file XML. Vui lòng kiểm tra cú pháp XML.");
                return;
            }
            tag_customers=xmlDoc.getElementsByTagName("customer")
            for (i = 0; i < tag_customers.length; i++)
            {
                value_tag_id=tag_customers[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
                value_tag_name=tag_customers[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
                value_tag_age=tag_customers[i].getElementsByTagName("age")[0].childNodes[0].nodeValue
                value_tag_city=tag_customers[i].getElementsByTagName("city")[0].childNodes[0].nodeValue
                tr=document.createElement("tr")
                td_id=document.createElement("td")
                td_id.innerHTML=value_tag_id
                td_name=document.createElement("td")
                td_name.innerHTML=value_tag_name
                td_age=document.createElement("td")
                td_age.innerHTML=value_tag_age;       
                td_city=document.createElement("td")
                td_city.innerHTML=value_tag_city
                tr.appendChild(td_id)
                tr.appendChild(td_name)
                tr.appendChild(td_age)
                tr.appendChild(td_city)
                bodycustomer.appendChild(tr)
            }
        }
        else
        {
            //handling when data can't be loaded
        }
    }

}