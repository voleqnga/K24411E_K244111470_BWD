function load_customer_fromjson(dataset_path,customerbody)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            var jsonText = xhr.responseText;
            
            if (jsonText == null)
            {
                alert("Lỗi: Không thể parse file JSON. Vui lòng kiểm tra cú pháp JSON.");
                return;
            }
            var customers=JSON.parse(jsonText)
            alert("thấy"+ customers.length+"nhóm khách hàng")
            for(i=0; i<customers.length;i++)//type of customer
            {
                type_customer=customers[i]//type at position i
                tr_type=document.createElement("tr")
                td_type=document.createElement("td")
                td_type.setAttribute("colspan",4)
                td_type.innerHTML=type_customer.customer_type
                tr_type.appendChild(td_type)
                customerbody.appendChild(tr_type)
                for(j=0; j<type_customer.customers.length;j++)
                {
                    customer=type_customer.customers[j]

                    tr=document.createElement("tr")
                    td_id=document.createElement("td")
                    td_name=document.createElement("td")
                    td_age=document.createElement("td")
                    td_email=document.createElement("td")
                    td_id.innerHTML=customer.ID
                    td_name.innerHTML=customer.Name
                    td_age.innerHTML=customer.Age
                    td_email.innerHTML=customer.Email
                    tr.appendChild(td_id)
                    tr.appendChild(td_name)
                    tr.appendChild(td_age)
                    tr.appendChild(td_email)
                    customerbody.appendChild(tr)


                }

            }
        }
        else
        {
            //handling when data can't be loaded
        }
    }

}