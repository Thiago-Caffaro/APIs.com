const voltarBtn = document.querySelector('.voltarBnt');
const upperTxt = document.getElementById('upper');
const infoBtn = document.getElementById('infoBtn');
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');


if (voltarBtn){
  voltarBtn.addEventListener('click', () => {
  window.location.assign("../../index.html");
  });
}
let clique = false;
infoBtn.addEventListener('click', () => {
  if (clique == false){
    clique = true;
    upperTxt.id = 'down';
    txt1.classList.add('hide');
    txt2.classList.remove('hide');
  }else if(clique == true){
    clique = false;
    upperTxt.id = 'upper'
    txt1.classList.remove('hide');
    txt2.classList.add('hide');
  }
});

var paragraph = document.querySelector('.hideVis');

infoBtn.addEventListener('mouseover', function() {
    paragraph.classList.remove('hideVis');
});
infoBtn.addEventListener('mouseout', function() {
  paragraph.classList.add('hideVis');
});