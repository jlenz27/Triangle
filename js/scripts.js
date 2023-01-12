//UI logic

function getTriangleValue(){
    const length1 = document.getElementById("input1").value;
    const length2 = document.getElementById("input2").value;
    const length3 = document.getElementById("input3").value;


}

function setFormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
      event.preventDefault();
      getTriangleValue();
      
    });
  }


window.onload = function() {

    setFormSubmissionEventHandler();

  };

