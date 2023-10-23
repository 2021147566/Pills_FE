let xhttp = new XMLHttpRequest();
xhttp.open("GET", "script/data.json", true);
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let storage = JSON.parse(this.response);
        for (i in storage.items) {
            let newDiv = document.createElement('div');
            newDiv.className = "article";
            let newA = document.createElement('a');
            newA.href = storage.items[i].originallink;
            newA.target = "_blank";
            newA.textContent = storage.items[i].title;
            newDiv.appendChild(newA);
            let newP = document.createElement('p');
            newP.textContent = storage.items[i].description;
            newDiv.appendChild(newP);
            document.querySelector("#article_box").appendChild(newDiv);

        }
    }
};
xhttp.send();