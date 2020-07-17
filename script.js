function alertHello(){
  var checkbox = document.getElementById("lname");
  if(checkbox.checked)
  {
    alert("I'm checked.");
  }
  else
  {
    alert("I'm sad.");
  }
}

$(document).ready(()=>
{
  var checkbox = document.getElementById("lname");
  checkbox.addEventListener('change', ()=>
  {
    if(checkbox.checked)
    {
      alert('Yay.');
    }
    else(checkbox.checked)
    {
      alert('Awww...');
    }
  });
});
