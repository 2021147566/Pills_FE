// const res = require("express/lib/response")

const frontend_base_url = "http://127.0.0.1:5500"
const backend_base_url = "http://127.0.0.1:8000"

async function handleSignup() {
    const email = document.getElementById("email").value
    const nickname = document.getElementById("nickname").value
    const username = document.getElementById("username").value
    const password1 = document.getElementById("password").value
    const password2 = document.getElementById("passwordcheck").value
    console.log("회원가입 체크")
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
            if (res.status === 400) {
                alert("동일한 유저네임이나 이메일이 존재합니다.");
                window.location.reload();
                return;
            }
            else {
                return res.json(); //Promise 반환
            }
            // return res.json(); //Promise 반환
        })
            .then((json) => {
                console.log(json)
                if (json['detail'] === "확인 이메일을 발송했습니다.") {

                    window.location.href = "/email_await.html"
                }
                //window.location.href = "/email_await.html"
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

