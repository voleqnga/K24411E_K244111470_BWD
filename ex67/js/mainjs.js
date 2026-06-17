/**
 * students_xml_text list of customer (XML -> customer.js)
 * bodystudent ->tbody 
 * @param {*} students_xml_text 
 * @param {*} bodystudent
 */
function load_students(students_xml_text,bodystudent)
{
    var parser = new DOMParser(); 
    var xmlDoc = parser.parseFromString(students_xml_text,"text/xml"); 
    //đọc toàn bộ thẻ customers
    tag_students=xmlDoc.getElementsByTagName("student")
    for (i = 0; i < tag_students.length; i++)
    {
        value_tag_id=tag_students[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
        value_tag_name=tag_students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
        value_tag_bday=tag_students[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue
        value_tag_gender=tag_students[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue
        tr=document.createElement("tr")
        td_id=document.createElement("td")
        td_id.innerHTML=value_tag_id
        td_name=document.createElement("td")
        td_name.innerHTML=value_tag_name
        td_bday=document.createElement("td")
        td_bday.innerHTML=value_tag_bday       
        td_gender=document.createElement("td")
        td_gender.innerHTML=value_tag_gender
        tr.appendChild(td_id)
        tr.appendChild(td_name)
        tr.appendChild(td_bday)
        tr.appendChild(td_gender)
        
        tr.onclick = function() {
                document.getElementById("detail").style.display = "table";
                document.getElementById("detid").textContent = this.cells[0].textContent;
                document.getElementById("detname").textContent = this.cells[1].textContent;
                document.getElementById("detbday").textContent = this.cells[2].textContent;
                document.getElementById("detgender").textContent = this.cells[3].textContent;
            };
        bodystudent.appendChild(tr)
    }
}