const frontend_base_url = "http://127.0.0.1:5500"
const backend_base_url = "http://127.0.0.1:8000"

async function handleLogin() {
    try {
        console.log("로긴연결");
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email, password);
        const response = await fetch(`${backend_base_url}/accounts/login/`, {
        headers: {
            "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password
        }),
    });
    if (!response.ok) {
        throw new Error(
            `Server returned an error ${response.status}: ${response.statustext}`
        );
    }
    const response_json = await response.json();
    console.log(response_json);

    localStorage.setItem("access", response_json.access);
    localStorage.setItem("refresh", response_json.refresh);
    const base64Url = response_json.access.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(atob(base64).split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    localStorage.setItem("payload", jsonPayload);
    alert("환영합니다.");
    window.location.replace(`${frontend_base_url}/main.html`);
    } 
    catch (error) {
        console.error("Error during login:", error.message);
        alert("회원정보가 일치하지 않습니다")
    }
    handleMock();
}

async function handleMock() {
    try {
    const response = await fetch(`${backend_base_url}/accounts/mocks/`, {
        headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
        },
        method: "GET",
    });
    console.log(response);
    if (!response.ok) {
        throw new Error(
        `Server returned an error with ${response.status} : ${response.statusText}`
        );
      //  Error 객체는 표준내장객체로  인자로 문자열 : 메세지를 주게되면 message라는 속성에 할당되어서
    }
    } 
    catch (error) {
        console.error("Error during Tokenpassing:", error.message);
    // 여기서 참조된 error에 message속성에 위에 값이 할당되게되서 가져오는것.
    }
}

function handleLogout() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("payload")
    window.location.replace(`${frontend_base_url}/main.html`)
}

function checkLogin() {
    const payload = localStorage.getItem("payload")
    if (payload) {
        window.location.replace(`${frontend_base_url}/main.html`)
    }
}