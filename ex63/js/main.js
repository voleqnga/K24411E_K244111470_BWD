function loadDropdowns()
{
    daySelect = document.getElementById("day");
    monthSelect = document.getElementById("month");
    yearSelect = document.getElementById("year");

    for (var i = 1; i <= 31; i++)
    {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        daySelect.appendChild(opt);
    }

    for (var i = 1; i <= 12; i++)
    {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        monthSelect.appendChild(opt);
    }

    for (var i = 1970; i <= 2026; i++)
    {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        yearSelect.appendChild(opt);
    }
}

function load_initial_data(members, memberBody)
{
    for (var i = 0; i < members.length; i++)
    {
        member = members[i];
        
        tr = document.createElement("tr");

        tr.onmouseover = function() {
            this.style.backgroundColor = "yellow";
        }
        tr.onmouseout = function() {
            this.style.backgroundColor = "white";
        }

        td_name = document.createElement("td");
        td_email = document.createElement("td");
        td_gender = document.createElement("td");
        td_birthday = document.createElement("td");
        td_hobbies = document.createElement("td");
        td_color = document.createElement("td");

        td_name.innerHTML = member.name;
        td_email.innerHTML = member.email;
        td_gender.innerHTML = member.gender;
        td_birthday.innerHTML = member.birthday;
        td_hobbies.innerHTML = member.hobbies;
        td_color.innerHTML = member.color;

        tr.appendChild(td_name);
        tr.appendChild(td_email);
        tr.appendChild(td_gender);
        tr.appendChild(td_birthday);
        tr.appendChild(td_hobbies);
        tr.appendChild(td_color);

        memberBody.appendChild(tr);
    }
}

function process_register()
{
    nameInput = document.getElementById("name").value;
    emailInput = document.getElementById("email").value;

    if (nameInput == "")
    {
        alert("Name cannot be left blank!");
        document.getElementById("name").focus();
        return;
    }

    if (emailInput == "")
    {
        alert("Please enter a valid email address!");
        document.getElementById("email").focus();
        return;
    }

    // Get Gender
    gender = "";
    radios = document.getElementsByName("gender");
    for (var i = 0; i < radios.length; i++)
    {
        if (radios[i].checked)
        {
            gender = radios[i].value;
        }
    }

    // Get Birthday
    day = document.getElementById("day").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;
    birthday = day + "/" + month + "/" + year;

    // Get Hobbies
    hobbies = "";
    checkboxes = document.getElementsByName("hobby");
    for (var i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].checked)
        {
            hobbies = hobbies + checkboxes[i].value + ", ";
        }
    }

    // Get Color
    color = "";
    colors = document.getElementsByName("color");
    for (var i = 0; i < colors.length; i++)
    {
        if (colors[i].checked)
        {
            color = colors[i].value;
        }
    }

    memberBody = document.getElementById("memberBody");
    tr = document.createElement("tr");

    tr.onmouseover = function() {
        this.style.backgroundColor = "yellow";
    }
    tr.onmouseout = function() {
        this.style.backgroundColor = "white";
    }

    td_name = document.createElement("td");
    td_email = document.createElement("td");
    td_gender = document.createElement("td");
    td_birthday = document.createElement("td");
    td_hobbies = document.createElement("td");
    td_color = document.createElement("td");

    td_name.innerHTML = nameInput;
    td_email.innerHTML = emailInput;
    td_gender.innerHTML = gender;
    td_birthday.innerHTML = birthday;
    td_hobbies.innerHTML = hobbies;
    td_color.innerHTML = color;

    tr.appendChild(td_name);
    tr.appendChild(td_email);
    tr.appendChild(td_gender);
    tr.appendChild(td_birthday);
    tr.appendChild(td_hobbies);
    tr.appendChild(td_color);

    memberBody.appendChild(tr);

    process_reset();
}

function process_reset()
{
    document.myform.reset();
    document.getElementById("name").focus();
}