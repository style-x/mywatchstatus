
document.querySelector('#submit').addEventListener('click', submit);
const button = document.querySelector('#button');

let myLibrary = [];


function getData() {
  if(localStorage.mvb) {
      let data = localStorage.getItem('mvb');
      myLibrary = JSON.parse(data);
      build();
  };
};


function submit(event) { 
  event.preventDefault();
  putNewDataInStorage();
  modal.close(); 
};


function putNewDataInStorage() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pdate = document.getElementById('pdate').value;
  let pages = document.getElementById('pages').value;
  let isRead = document.getElementById('isRead').checked;
  var newData = {
    title: title,
    author: author,
    publishing_date: pdate,
    nbr_of_pages: pages,
    read_status: isRead?true:false,
    insertion_date: new Date()
  };
  myLibrary.push(newData);
  localStorage.setItem(`mvb`, JSON.stringify(myLibrary));
  build();
};