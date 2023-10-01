let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', addCourse);

function addCourse(event){
     
 let currentBtn = event.currentTarget;
 let currentBtnInput = currentBtn.previousElementSibling
 let currentCourse = currentBtnInput.value

 if(parentLi.children[0].className =="Msg"){ //li er child nai and jodi class name pawa jay tahole class remove korbe..
     parentLi.children[0].remove();
 }

 let newLi = document.createElement('li');
 //newLi.classList.add('list-group-item');
 newLi.className = "list-group-item d-flex justify content center"
 newLi.innerHTML  = `<h4 class="flex-grow-1">${currentCourse}</h4>
 <button class="btn btn-warning mx-3" onclick="editCourse(this)">Edit</button>
 <button class="btn btn-danger" onclick="removeCourse(this)">Remove</button>`

 let parentList = document.getElementById("parentLi");
 parentList.appendChild(newLi);



}

function removeCourse(currentElement){
 currentElement.parentElement.remove();

 let parentList = document.getElementById("parentLi");
 if(parentList.children.length <= 0){
    let newMsg = document.createElement("h4")
        newMsg.classList.add("Msg")
        newMsg.textContent = "No Course. Add course to continue"
        parentList.appendChild(newMsg);
 }
 
 
}

function editCourse(currentElement){
 if(currentElement.textContent == "Done"){
     currentElement.textContent = "Edit";
    
     let currentChapterName = currentElement.previousElementSibling.value
     let currHeading = document.createElement("h4");
     currHeading.className = "flex-grow-1"; //called the inner html by class.
     currHeading.textContent = currentChapterName;
     currentElement.parentElement.replaceChild(currHeading, currentElement.previousElementSibling)

 }
 else{
 currentElement.textContent = "Done";

 let currentChapterName = currentElement.previousElementSibling.textContent
 let currInput = document.createElement("input");
 currInput.type = "text";
 currInput.className = "form-control";
 currInput.placeholder = "Course name";
 currInput.value = currentChapterName; //input type a value hoy text a hoy textcontent

 currentElement.parentElement.replaceChild(currInput, currentElement.previousElementSibling); //(new item, olditem)
 }

}