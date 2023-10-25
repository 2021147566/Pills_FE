
async function DrugCreate() {
    const input = document.getElementById("upload_file")
    if (input) {
        img = input.files[0]
        console.log(img.name)
        const formData = new FormData();
        formData.append('img', img);

        const response = await fetch('http://127.0.0.1:8000/drugs/create/', {
            // headers: {
            //     'content-type': 'application/json',
            // },
            method: 'POST',
            body: formData
        }).then((res) => {
            return res.json(); //Promise 반환
        })
            .then((json) => {
                console.log(json); // 서버에서 주는 json데이터가 출력 됨
                if (json['message'] == "인식할 수 없습니다. 정보를 직접 입력해주세요") {
                    console.log('이동')
                    alert(json['message'])
                    location.href = 'manual.html'
                }
                else {
                    location.reload()
                }
            });

    }
    else {
        alert("사진은 필수 항목입니다.")
        location.reload()
    }

}