async function loginUser() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("username", data.name);
        localStorage.setItem("role", data.role);

        if (data.role === "donor") {
            window.location.href = "donor.html";
        } else if (data.role === "ngo") {
            window.location.href = "ngo.html";
        } else if (data.role === "rider") {
            window.location.href = "rider.html";
        }

    } else {
        alert(data.detail);
    }
}
let selectedRole = "donor";

function selectRole(role, element) {
    selectedRole = role;

    document.querySelectorAll(".role-card").forEach(card => {
        card.classList.remove("active");
    });

    element.classList.add("active");
}
function payNow(){
    let amount = document.getElementById("customAmount").value;

    if(amount === ""){
        alert("Please select amount");
        return;
    }

    document.getElementById("successScreen").style.display = "flex";
}

function goHome(){
    window.location.href = "donor-home.html";
}