// Get id from index file and assign to const rootDiv variable
const rootDiv = document.getElementById("root");

//  Assigning images to const imageArr variable
const imageArr = [
  "luke-skywalker.jpeg",
  "C-3PO..jpeg",
  "R2D2.jpeg",
  "Darth-Vader.jpeg",
  "Leia.jpeg",
  "Owen-Lars.jpeg",
  "Beru_Lars_001.jpeg",
  "R5D4.jpeg",
  "BiggsRebel.jpeg",
  "obiwan.jpeg",
];

//Assigning output to an empty string
let output = "";

// fetch API
fetch("https://swapi.dev/api/people")
  .then((res) => res.json())
  .then((data) => {
    // Loop through
    for (let i = 0; i < data.results.length; i++) {
      output += `
                    
                      <div class="character">
                        <div class="img-box">
                          <img src='images/${imageArr[i]}' class="char-img" />
                        </div
                        <div>
                          <button type="button" class="btn btn-secondary btn-custom" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" 
                            data-bs-content="Top popover"onclick="showDetails('myDiv${i}')">
                            <p>${data.results[i].name}</p>
                          </button>
                          <div style='display:none'  id='myDiv${i}' class ="info">
                            <h4 style='text-align:center'>Gender: ${data.results[i].gender}</h4>
                            <p  style='text-align:center'>Height: ${data.results[i].height}cm</p>
                          </div>
                        </div>
                      </div>
                    
                                 
          `;

        }
        console.log("--------------------");
        console.log(output);

    rootDiv.innerHTML = output;
  });

 

function showDetails(id) {
  const infoDiv = document.getElementById(id);
  if (infoDiv.style.display == "block") {
    infoDiv.style.display = "none";
  } else {
    infoDiv.style.display = "block";
  }
}
