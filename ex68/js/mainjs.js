function load_cd_fromxml(dataset_path,bodycd)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            //handling when loading data successfully
            //var xmlDoc = parser.parseFromString(xhr.responseXML,"text/xml"); 
            var xmlDoc = xhr.responseXML;
            
            if (xmlDoc == null)
            {
                alert("Lỗi: Không thể parse file XML. Vui lòng kiểm tra cú pháp XML.");
                return;
            }
            tag_cds=xmlDoc.getElementsByTagName("CD")
            for (i = 0; i < tag_cds.length; i++)
            {
                value_tag_title=tag_cds[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
                value_tag_artist=tag_cds[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue
                value_tag_country=tag_cds[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue
                value_tag_company=tag_cds[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue
                value_tag_price=tag_cds[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue
                value_tag_year=tag_cds[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue

                td_title = document.createElement("td");
                td_title.innerHTML = value_tag_title;
                td_artist = document.createElement("td");
                td_artist.innerHTML = value_tag_artist;
                td_country = document.createElement("td");
                td_country.innerHTML = value_tag_country;
                td_company = document.createElement("td");
                td_company.innerHTML = value_tag_company;
                td_price = document.createElement("td");
                td_price.innerHTML = value_tag_price;
                td_year = document.createElement("td");
                td_year.innerHTML = value_tag_year;
    
                tr.appendChild(td_title);
                tr.appendChild(td_artist);
                tr.appendChild(td_country);
                tr.appendChild(td_company);
                tr.appendChild(td_price);
                tr.appendChild(td_year);
                
                bodycd.appendChild(tr);
            }
        }
        else
        {
            //handling when data can't be loaded
        }
    }

}