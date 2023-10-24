# ML Project- F.E
## - Html

### ✔ login.html
로그인 페이지
* login 버튼(id="login_btn") onclick = 로그인 function 구현 필요 
### ✔ signup.html
회원가입 페이지
* signup 버튼(id="signup_btn") onclick = 회원가입 및 DB User 모델 저장 function 구현 필요 
### ✔ base.html
Navigation Bar
* {& extends 'base.html' &}
* 장고 template 적용 시 login/signup.html 제외 적용 필요
### ✔ main.html
메인페이지 - 약 관련 youtube 영상 / 관련 기사 검색 결과 print
* youtube 영상 업로드 안되면 youtube.script 참조
### ✔ create.html
사진 업로드 및 약 촬영 가이드
### ✔ manual.html
인식 불가 시 이동할 약 등록 요청 사이트
* 제형, 분할선 모양 클릭 시 box shadow 적용
* color palette- 콘솔에 컬러 코드 기록, color picker 기능 가능

### ✔ my_page.html
## - /script
### ✔ article.js
data.json 파싱 후 main.html에 작성
### ✔ article.py
data.json 생성 코드(Naver News Search API 사용)
### ✔ data.json
Naver Search API 검색 결과
* query='medicine'
  - '약' -> Encoding 에러 발생: 해결!
  - '약' -> 한국어 잇슈,,,약이 들어간 모든 기사 추출,,,(ex. YTN 매각 최종 낙찰자에 유진그룹…인수가 약 3200억원 😓😓😓😓)
### ✔ manual_click.js
manual html 전체 함수
* 이미지 업로드 함수 onClickUpload
* 컬러 팔레트 스포이드 함수 backgroundColorPicker.addEventListener
* 나머지 - 박스 및 이미지 선택 시 box Shadow(네온 효과) 적용 함수
### ✔ youtube.js
youtube iframe 생성 script
* **유튜브 영상 미생성시 console 확인 - 유튜브 오류 발생: api 키 할당량 초과일 확률 高**
   - 여분 API 키 js 내 포함
   - url: "https:~~ &type=video&key=" + API키 추가할 것
### ✔ camera.js
실시간 camera 촬영 함수 작성
* 추후 project 디벨롭 시 실시간 이미지 인식에 필요
## - /img
### ✔ camera.png
main.html의 촬영 버튼(create.html 링크)
### ✔ click.cur
짱 구 체 고 - 클릭할 div위 hover 시 커서 모양(**style{cursor: url(img/click.cur), auto**})
### ✔ cursor.cur
짱 구 체 고 - 평상시 div 커서 모양
### ✔ images.jpg
create.html 사진 업로드 전 default img
### ✔ pill_sample
create.html 가이드 사진
### ✔ pill.png
**사이트 로고**
### ✔ profile.jpg
Navigation 바 프로필 이미지 - my_page.html 링크
