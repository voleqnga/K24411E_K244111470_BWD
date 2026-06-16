function load_products(products,productbody)
{
    for (var i=0; i<products.length; i++)
            {
                product=products[i];
                productID=product.id;
                productName=product.name;
                //create tr element 
                tr=document.createElement("tr");
                // create 3 td (s)
                td_id=document.createElement("td");
                td_name=document.createElement("td");
                td_img=document.createElement("td");
                //create img element
                img=document.createElement("img");
                img.setAttribute("src","images/remove.png");
                img.width=20;
                img.setAttribute("onclick", "delete_product(this)");
                //assign value for td(s)
                td_id.innerHTML=productID
                td_name.innerHTML=productName
                td_img.appendChild(img);
                //append td(s) into tr:
                tr.appendChild(td_id)
                tr.appendChild(td_name)
                tr.appendChild(td_img)
                //append tr into productbody
                productbody.appendChild(tr)
            }
}
function delete_product(img_element)
{
    if(confirm("Are you sure to delete this product?"))
    {
        img_element.parentElement.parentElement.remove();
    }
}