
async function DrugCreate() {
    const input = document.getElementById("upload_file");
    const loadingElement = document.getElementById("load");
    const accessToken = localStorage.getItem("access");
    const storage = JSON.parse(localStorage.getItem("payload"))
    const user_id = storage['user_id']
    console.log(user_id)
    console.log(accessToken)

    if (input) {
        img = input.files[0];
        console.log(img);
        const formData = new FormData();
        formData.append('img', img);
        console.log(formData)

        loadingElement.style.display = 'block';

        const response = await fetch(`http://127.0.0.1:8000/drugs/create/${user_id}`, {
            headers: {
                "Authorization": "Bearer " + accessToken,
            },
            method: 'POST',
            body: formData
        }).then((res) => {
            return res.json(); //Promise 반환
        })
            .then((json) => {
                console.log(json); // 서버에서 주는 json데이터가 출력 됨
                loadingElement.style.display = 'none';
                if (json['message'] == "인식할 수 없습니다. 정보를 직접 입력해주세요") {

                    alert(json['message']);
                    location.href = 'manual.html';
                }
                else {
                    alert(json['message'])
                    location.reload();
                }

            });

    }
    else {
        loadingElement.style.display = 'none';
        alert("사진은 필수 항목입니다.");
        location.reload();
    }

}