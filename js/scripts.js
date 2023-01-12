//UI logic

function hideResults() {
    document.getElementById("equilateral").setAttribute("class", "hidden");
    document.getElementById("isosceles").setAttribute("class", "hidden");
    document.getElementById("equilateral").setAttribute("class", "hidden");
}


window.onload = function() {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const firstLength = parseInt(document.querySelector("input#input1").value);
        const secondLength = parseInt(document.querySelector("input#input2").value);
        const thirdLength = parseInt(document.querySelector("input#input3").value);

        if(firstLength === secondLength && firstLength === thirdLength){
            document.getElementById("equilateral").removeAttribute("class");

        }else if(firstLength === secondLength || firstLength === thirdLength || secondLength === thirdLength){
            document.getElementById("isosceles").removeAttribute("class");

        }else{
            document.getElementById("scalene").removeAttribute("class");

        }

        

  };

};
