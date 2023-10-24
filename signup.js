const frontend_base_url = "http://127.0.0.1:5500"
const backend_base_url = "http://127.0.0.1:8000"

async function handleSignup() {
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
    const passwordcheck = document.getElementById("passwordcheck").value

    // 체크
    if (password===passwordcheck) {
        const response = await fetch(`${backend_base_url}/accounts/signup/`, {
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "username": name,
                "nickname": name,
                "password": password
            })
        })
        if (response.status === 201) {
            // 회원가입 성공
            alert("회원가입이 성공적으로 완료되었습니다.");
            window.location.href = "/login.html";
        }

    } else {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
    }
}

