function load_product_data(dataset,tbl_product)
{
    for(var i=0; i<dataset.length; i++)
    {
        tbl_product.innerHTML+=
        "<tr>" +
        "<td>" + dataset[i].id+ "</td>" +
        "<td>" + dataset[i].name+ "</td>" +
        "<td>" + dataset[i].price+ "</td>" +
        "<td><img src='product_html_dom\images\remove.png' onclick='delete_product(this)'></td>"+
        "</tr>";

    }
}
function delete_product(img_element)
{
    if(confirm("Are you sure to delete this product?"))
    {
    img_element.parentElement.parentElement.remove();
    }
}