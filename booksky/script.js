var addbtn=document.getElementById('add-button');
var overlay=document.getElementById('overlay');
var poppup=document.getElementById('poppup-box');
var booktitle=document.getElementById('book-title');
var bookauthor=document.getElementById('book-author');
var description=document.getElementById('desc');
var addbook=document.getElementById('add-book');
var canbook=document.getElementById('cancel-book');
var container=document.getElementById('container');





addbtn.addEventListener('click',function(){
    overlay.style.display='block';
    poppup.style.display='block';
})
addbook.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute("id","book-con")
    div.innerHTML=`
                  <h1>${booktitle.value}</h1>
                  <h2>${bookauthor.value}</h2>
                  <p>${description.value}</p>
                  <button onclick='deleteitem(event)'>Delete</button>`;
 container.append(div);    
    overlay.style.display='none';
    poppup.style.display='none';   
             

})
function deleteitem(event){
    event.target.parentElement.remove()

}



canbook.addEventListener('click',function(event){
    event.preventDefault()
    overlay.style.display='none';
    poppup.style.display='none';
})
