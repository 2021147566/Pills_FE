function gsorting_box() {

    const sorting_box = document.querySelector('#gsorting');
    if (sorting_box.style["boxShadow"] != 'none'){
        sorting_box.style["boxShadow"] = 'none';
    }
    else {
        sorting_box.style["boxShadow"] = '0 0 10px #e6e6e6';
    }


};

function ysorting_box(){
    const sorting_box = document.querySelector('#ysorting');
    if (sorting_box.style["boxShadow"] != 'none'){
        sorting_box.style["boxShadow"] = 'none';
    }
    else {
        sorting_box.style["boxShadow"] = '0 0 10px #e6e6e6';
    }
};
function jsorting_box(){
    const sorting_box = document.querySelector('#jsorting');
    if (sorting_box.style["boxShadow"] != 'none'){
        sorting_box.style["boxShadow"] = 'none';
    }
    else {
        sorting_box.style["boxShadow"] = '0 0 10px #e6e6e6';
    }
};
function zsorting_box(){
    const sorting_box = document.querySelector('#zsorting');
    if (sorting_box.style["boxShadow"] != 'none'){
        sorting_box.style["boxShadow"] = 'none';
    }
    else {
        sorting_box.style["boxShadow"] = '0 0 10px #e6e6e6';
    }
};
function minus_box(){
    const sorting_box = document.querySelector('#minus');
    if (sorting_box.style["boxShadow"] != 'none'){
        sorting_box.style["boxShadow"] = 'none';
    }
    else {
        sorting_box.style["boxShadow"] = '0 0 10px #e6e6e6';
    }
};
function plus_box(){
    const sorting_box = document.querySelector('#plus');
    if (sorting_box.style["boxShadow"] != 'none'){
        sorting_box.style["boxShadow"] = 'none';
    }
    else {
        sorting_box.style["boxShadow"] = '0 0 10px #e6e6e6';
    }
};
function none_box(){
    const sorting_box = document.querySelector('#none');
    if (sorting_box.style["boxShadow"] != 'none'){
        sorting_box.style["boxShadow"] = 'none';
    }
    else {
        sorting_box.style["boxShadow"] = '0 0 10px #e6e6e6';
    }
};
function guitar_box(){
    const sorting_box = document.querySelector('#guitar');
    if (sorting_box.style["boxShadow"] != 'none'){
        sorting_box.style["boxShadow"] = 'none';
    }
    else {
        sorting_box.style["boxShadow"] = '0 0 10px #e6e6e6';
    }
};

const backgroundColorPicker = document.getElementById('backgroundColorPicker');
const content = document.getElementById('content');

backgroundColorPicker.addEventListener('input', () => {
    const selectedColor = backgroundColorPicker.value;
    content.style.backgroundColor = selectedColor;
    console.log(selectedColor);
});



function onClickUpload() {
    let myInput = document.getElementById('upload_file')
    myInput.click()
}
var loadFile = function (event) {
    var output = document.getElementById('register_pill_img')
    output.style.display = ''
    output.src = URL.createObjectURL(event.target.files[0])
    output.onload = function () {
        URL.revokeObjectURL(output.src)
    }
}