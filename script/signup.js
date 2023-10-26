const frontend_base_url = "http://127.0.0.1:5500"
const backend_base_url = "http://127.0.0.1:8000"

async function handleSignup() {
    const email = document.getElementById("email").value
    const nickname = document.getElementById("nickname").value
    const username = document.getElementById("username").value
    const password1 = document.getElementById("password").value
    const password2 = document.getElementById("passwordcheck").value

    // 체크
    if (password1 === password2) {
        const response = await fetch(`${backend_base_url}/accounts/register/`, {
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "nickname": nickname,
                "username": username,
                "password1": password1,
                "password2": password2
            })
        }).then((res) => {
            return res.json(); //Promise 반환
        })
            .then((json) => {
                window.location.href = "/email_await.html"

            });
        if (response.status === 200) {
            // 회원가입 성공
            alert("회원가입이 성공적으로 완료되었습니다.");
            window.location.href = "/login.html";
        }

    } else {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
    }
}

