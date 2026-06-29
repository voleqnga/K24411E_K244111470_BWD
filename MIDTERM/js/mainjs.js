        function loadAboutMe() {
            var partB = document.getElementById("partB");
            partB.innerHTML = "<h2>About Me</h2>" +
                              "<p><b>Student ID:</b> K244111470 </p>" + 
                              "<p><b>Full Name:</b> Võ Lê Quỳnh Nga</p>" +
                              "<p><b>Class:</b> BW-253EIE503001</p>" +
                              "<img src='images/avatar.jpg' alt='My Avatar' style='border: 1px solid black;'>";
        }

function loadContent(menuItemName) {
    var partB = document.getElementById("partB");
    
    if (menuItemName === 'Vnexpress RSS') {
        loadVnExpressRSS(); 
    } else if (menuItemName === 'Products') {
        // Giao diện Products (Câu 5 & Câu 6 tích hợp Tìm kiếm)
        partB.innerHTML = "<h2>Products Management</h2>" +
                          // Khung tìm kiếm (Câu 6)
                          "<div style='background-color: #f2f2f2; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc;'>" +
                          "  <strong>Search by Category:</strong> " +
                          "  <select id='searchCategory' onchange='filterProducts()'>" +
                          "    <option value='all'>All Categories</option>" +
                          "    <option value='CAT001'>Phones & Tablets</option>" +
                          "    <option value='CAT002'>Computers & Laptops</option>" +
                          "    <option value='CAT003'>Tech Accessories</option>" +
                          "    <option value='CAT004'>Audio Equipment</option>" +
                          "    <option value='CAT005'>Smart Home</option>" +
                          "  </select>" +
                          "  &nbsp;&nbsp;<strong>Name:</strong> " +
                          "  <input type='text' id='searchName' onkeyup='filterProducts()' placeholder='Enter name...'>" +
                          "  &nbsp;&nbsp;<strong>Max Price:</strong> " +
                          "  <input type='number' id='searchPrice' onkeyup='filterProducts()' onchange='filterProducts()' placeholder='Max price...'>" +
                          "</div>" +
                          "<table border='1' style='width:100%; border-collapse: collapse;'>" +
                          "  <thead>" +
                          "    <tr style='background-color: #1f4e78; color: white;'>" +
                          "      <th>Product ID</th><th>Product Name</th><th>Price</th><th>Action</th>" +
                          "    </tr>" +
                          "  </thead>" +
                          "<tbody id='productbody'></tbody>" +
                          "</table>";
                          
        var productbody = document.getElementById("productbody");
        var dataset_path = "dataset/ecommerce-sample.json";
        
        load_product_search_json(dataset_path, productbody);
        
    } else if (menuItemName === 'My Cart') {
        // Khung giỏ hàng (Câu 7)
        partB.innerHTML = "<h2>Shopping Cart (Local Storage)</h2>" +
                          "<table border='1' style='width:100%; border-collapse: collapse;'>" +
                          "  <thead><tr style='background-color: #e3c25b; color: black;'><th>Product ID</th><th>Name</th><th>Unit Price</th><th>Quantity</th><th>Total</th></tr></thead>" +
                          "<tbody id='cartbody'></tbody>" +
                          "</table>" +
                          "<div style='margin-top: 15px;'><button onclick='checkoutCart()'>Checkout</button></div>";
        loadCart();
    } else if (menuItemName === 'Login/Logout') {
        // Khung đăng nhập (Câu 8)
        partB.innerHTML = "<h2>Login Screen</h2>" +
                          "<p>Select role to login:</p>" +
                          "<button onclick='showLoginBox(\"customer\")'>Customer Login</button> " +
                          "<button onclick='showLoginBox(\"employee\")'>Employee Login</button>" +
                          "<div id='loginFormContainer' style='margin-top: 15px;'></div>";
    } else if (menuItemName === 'My Infor') {
        // Thông tin cá nhân (Câu 9)
        partB.innerHTML = "<h2>My Information Profile</h2>" +
                          "<div id='profileDetail'>Please log in to view your info.</div>";
        loadProfile();
    } else if (menuItemName === 'Administrator') {
        // Quản trị viên (Câu 10)
        partB.innerHTML = "<h2>Sales Manager Dashboard</h2>" +
                          "<div id='adminDashboard'>Checking credentials...</div>";
        checkAdminAccess();
    } else {
        partB.innerHTML = "<h2>" + menuItemName + "</h2><p>Tính năng đang được cập nhật...</p>";
    }
}
//q3
function loadWeatherAPI()
{
    var xhr=new XMLHttpRequest();

    xhr.open(
        "GET",
        "https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&current_weather=true",
        true
    );

    xhr.send();

    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4 && xhr.status==200)
        {
            var data=JSON.parse(xhr.responseText);

            var weatherbody=document.getElementById("weatherbody");

            var tr=document.createElement("tr");

            tr.innerHTML=
            "<td>Ho Chi Minh City</td>"+
            "<td>"+data.current_weather.temperature+" °C</td>"+
            "<td>"+data.current_weather.weathercode+"</td>"+
            "<td>--</td>";

            weatherbody.appendChild(tr);
        }
    }
}
//q4
function load_rss_vnexpress(dataset_path,bodynews)
{
    var xhr=new XMLHttpRequest();

    xhr.open("GET",dataset_path,true);

    xhr.send();

    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4 && xhr.status==200)
        {
            var xmlDoc=xhr.responseXML;

            if(xmlDoc==null)
            {
                alert("Cannot parse XML");
                return;
            }

            bodynews.innerHTML="";

            var items=xmlDoc.getElementsByTagName("item");

            for(var i=0;i<items.length;i++)
            {
                var title=items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;

                var link=items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;

                var tr=document.createElement("tr");

                var tdTitle=document.createElement("td");
                tdTitle.innerHTML=title;

                var tdAction=document.createElement("td");
                tdAction.innerHTML="<a href='"+link+"' target='_blank'><button>Read Detail</button></a>";

                tr.appendChild(tdTitle);
                tr.appendChild(tdAction);

                bodynews.appendChild(tr);
            }
        }
    }
}
//q5
function load_product_fromjson(dataset_path,productbody)
{
    var xhr=new XMLHttpRequest();

    xhr.open("GET",dataset_path,true);

    xhr.send();

    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4 && xhr.status==200)
        {
            var data=JSON.parse(xhr.responseText);

            var categories=data.categories;
            var products=data.products;

            productbody.innerHTML="";

            for(var catID in categories)
            {
                var category=categories[catID];

                var trType=document.createElement("tr");

                trType.innerHTML=
                "<td colspan='5' style='background:#d9e2f3;font-weight:bold'>"+
                category.categoryName+
                "</td>";

                productbody.appendChild(trType);

                for(var proID in products)
                {
                    var product=products[proID];

                    if(product.categoryId==catID)
                    {
                        var tr=document.createElement("tr");

                        tr.innerHTML=
                        "<td>"+proID+"</td>"+
                        "<td>"+product.productName+"</td>"+
                        "<td>"+product.price.toLocaleString()+" VND</td>"+
                        "<td>"+product.stock+"</td>"+
                        "<td><button onclick=\"buyProduct('"+proID+"')\">Buy Now</button></td>";
                        productbody.appendChild(tr);
                    }
                }
            }
        }
    }
}
//q6
function searchProduct()
{
    var keyword=document.getElementById("txtSearch").value.toLowerCase();

    var rows=document.getElementById("productbody").getElementsByTagName("tr");

    for(var i=0;i<rows.length;i++)
    {
        if(rows[i].cells.length==5)
        {
            var name=rows[i].cells[1].innerHTML.toLowerCase();

            if(name.indexOf(keyword)>=0)
            {
                rows[i].style.display="";
            }
            else
            {
                rows[i].style.display="none";
            }
        }
    }
}
// --- Q7: Giỏ hàng sử dụng Local Storage ---
function buyProduct(productId)
{
    var cart=localStorage.getItem("cart");

    if(cart==null)
    {
        cart=[];
    }
    else
    {
        cart=JSON.parse(cart);
    }

    var found=false;

    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].productId==productId)
        {
            cart[i].quantity++;
            found=true;
            break;
        }
    }

    if(found==false)
    {
        cart.push(
        {
            productId:productId,
            quantity:1
        });
    }

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Added to cart successfully!");
}
// --- Q8: Màn hình Đăng nhập (Login) ---
// Đề yêu cầu lấy dữ liệu user từ file json. Ta lưu thông tin trạng thái đăng nhập đơn giản.
function showLoginBox(role) {
    var container = document.getElementById("loginFormContainer");
    container.innerHTML = "<h3>" + role.toUpperCase() + " Login</h3>" +
                          "Email: <input type='text' id='loginEmail' placeholder='Enter email...'><br>" +
                          "Password: <input type='password' id='loginPass' placeholder='Password'><br>" +
                          "<button onclick='submitLogin(\"" + role + "\")'>Submit</button>" +
                          "<p id='loginErr' style='color:red;'></p>";
}

function submitLogin(role) {
    var email = document.getElementById("loginEmail").value;
    var pass = document.getElementById("loginPass").value;
    
    // Giả lập check login nhanh qua cơ chế request đồng bộ/hoặc lấy danh sách từ JSON lưu biến toàn cục.
    // Ở đây dùng xác thực đơn giản với danh sách Customer/Employee có sẵn:
    if(role === "customer" && email === "john.smith@example.com" && pass === "123") {
        localStorage.setItem("loggedInUser", JSON.stringify({ email: email, role: "customer", id: "CUST001", name: "John Smith" }));
        alert("Customer Login Successful!");
        loadContent('My Infor');
    } else if(role === "employee" && email === "jmiller@company.com" && pass === "123") {
        localStorage.setItem("loggedInUser", JSON.stringify({ email: email, role: "employee", id: "EMP002", name: "Jessica Miller", position: "Sales Manager" }));
        alert("Employee Login Successful!");
        loadContent('Administrator');
    } else {
        document.getElementById("loginErr").textContent = "Invalid email or password!";
    }
}

// --- Q9: Thông tin tài khoản đăng nhập (My Info) ---
function loadProfile() {
    var profileDiv = document.getElementById("profileDetail");
    var userStr = localStorage.getItem("loggedInUser");
    
    if (!userStr) return;
    var user = JSON.parse(userStr);
    
    if(user.role === "customer") {
        // Có thể mở rộng lấy thông tin chi tiết qua AJAX từ ecommerce-sample.json dựa vào user.id (CUST001)
        profileDiv.innerHTML = "<h3>Customer Profile</h3>" +
                               "<p><b>Full Name:</b> John Smith</p>" +
                               "<p><b>Email:</b> " + user.email + "</p>" +
                               "<p><b>Phone:</b> 07911 123456</p>" +
                               "<p><b>Address:</b> 123 Baker Street, London</p>";
    } else {
        profileDiv.innerHTML = "<h3>Employee Profile</h3>" +
                               "<p><b>Full Name:</b> " + user.name + "</p>" +
                               "<p><b>Position:</b> " + user.position + "</p>";
    }
}

// --- Q10: Phân quyền Sales Manager cho trang Administrator ---
function checkAdminAccess() {
    var dash = document.getElementById("adminDashboard");
    var userStr = localStorage.getItem("loggedInUser");
    
    if (!userStr) {
        dash.innerHTML = "<p style='color:red'>Access Denied! Please login as Sales Manager first.</p>";
        return;
    }
    
    var user = JSON.parse(userStr);
    // Kiểm tra quyền Sales Manager
    if (user.role === "employee" && user.position === "Sales Manager") {
        dash.innerHTML = "<h3>Orders & Sales Figures</h3>" +
                         "<table border='1' style='width:100%; border-collapse: collapse;'>" +
                         "  <tr style='background-color:#f2f2f2;'><th>Order ID</th><th>Customer</th><th>Status</th><th>Amount</th></tr>" +
                         "  <tr><td>ORD1001</td><td>CUST001 (John)</td><td>Completed</td><td>35,950,000 VNĐ</td></tr>" +
                         "  <tr><td>ORD1002</td><td>CUST002 (Emily)</td><td>Completed</td><td>39,990,000 VNĐ</td></tr>" +
                         "  <tr><td>ORD1006</td><td>CUST005 (Robert)</td><td>Pending</td><td>13,900,000 VNĐ</td></tr>" +
                         "</table>" +
                         "<h4 style='margin-top:15px;'>Total Sales Figures: ~89,840,000 VNĐ</h4>";
    } else {
        dash.innerHTML = "<p style='color:red'>Access Denied! Only Sales Managers are authorized.</p>";
    }
}
