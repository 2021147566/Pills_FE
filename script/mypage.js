window.onload = () => {
  console.log("hi");
  request();
};

async function request() {
  console.log("hhh");
  const payload = localStorage.getItem("payload");
  console.log(payload);
  const payload_parse = JSON.parse(payload);
  console.log(payload_parse.profile_img);
  const request_user_id = payload_parse.user_id;

  const response = await fetch(
    `http://127.0.0.1:8000/accounts/profile/${request_user_id}/`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    }
  );
  const data = await response.json();
  console.log(data);
  console.log(data.profile_img)
  $('#my_email').append(data.email)
  $('#username').append(data.username)

  $('#nickname').append(data.nickname)
  let rows = data.durgslist
  console.log(rows)
  $('#druglist').empty()
  rows.forEach((a) => {
    let temp_html = ``
    temp_html = `<li>${a}</li>`
    $('#druglist').append(temp_html)
  })




  document.getElementById(
    "my_profile_img"
  ).src = 'http://127.0.0.1:8000' + data.profile_img;


  document.getElementById(
    "nav_profile_img"
  ).src = 'http://127.0.0.1:8000' + data.profile_img;


  document.getElementById("update_username").value = data.username;

  document.getElementById("update_nickname").value = data.nickname;

}
function OpenModal() {
  document.getElementById("myModal").style.display = "block";
}
function CloseModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("update_present_pw").value = "";
  document.getElementById("update_password_").value = "";
  document.getElementById("update_password_check").value = "";
  document.getElementById("pw_update_errors").innerText = "";
  console.log("CloseModal");
}

async function handleUpdatePassword() {
  const payload = localStorage.getItem("payload");
  const payload_parse = JSON.parse(payload);
  const request_user_id = payload_parse.user_id;

  const response = await fetch(
    `http://127.0.0.1:5500/accounts/profile/${request_user_id}/`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        present_pw: document.getElementById("update_present_pw").value,
        password: document.getElementById("update_password_").value,
        password_check: document.getElementById("update_password_check").value,
      }),
    }
  );

  if (response.status == 200) {
    document.getElementById("pw_update_errors").innerText = "비밀번호 수정됨.";
    document.getElementById("pw_update_errors").style.color = "blue";
  } else if (response.status == 403) {
    const errorData = await response.json();
    document.getElementById("pw_update_errors").innerText = errorData.message;
    document.getElementById("pw_update_errors").style.color = "red";
  } else {
    const errorData = await response.json();
    document.getElementById("pw_update_errors").innerText =
      errorData.password[0];
    document.getElementById("pw_update_errors").style.color = "red";
    // console.log(errorData)
  }
}

async function handleUpdateProfile() {
  console.log("update")
  const payload = localStorage.getItem("payload");
  const payload_parse = JSON.parse(payload);
  const request_user_id = payload_parse.user_id;

  const formData = new FormData();

  formData.append("username", document.getElementById("update_username").value);
  formData.append("nickname", document.getElementById("update_nickname").value);

  console.log(document.getElementById("update_profile_img").files[0])

  if (document.getElementById("update_profile_img").files[0]) {
    formData.append(
      "profile_img",
      document.getElementById("update_profile_img").files[0]
    );
  }

  const response = await fetch(
    `http://127.0.0.1:8000/accounts/profile/${request_user_id}/`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      body: formData,
    }
  );

  console.log(response);
  if (response.status == 200) {
    location.reload();
  } else if (response.status == 403) {
    const errorData = await response.json();
    document.getElementById("profile_update_errors").innerText =
      errorData.message;
  } else {
    document.getElementById("profile_update_errors").innerText =
      "회원정보 수정 실패.";
  }
}

function onClickUpload() {
  let myInput = document.getElementById("update_profile_img");
  myInput.click();
}
var loadFile = function (event) {
  var output = document.getElementById("my_profile_img");
  output.style.display = "";
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
  //console.log(document.getElementById('update_profile_img').file[0])
};
