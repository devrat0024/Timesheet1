const tableBodyTrs = document
  .querySelector(".tableBody")
  .querySelectorAll(".tr");
// console.log(tableBodyTrs);
function createForm() {
    let form = document.createElement("form");
    form.innerHTML = `
      <th>  <input type="text" class="orange"  placeholder="Enter day" /></th>
      <td>
        <input type="time" id="start-work" class="blue"/>
      </td>
      <td>
        <input type="time" id="start-break" class="green" />
      </td>
      <td>
        <input type="time" id="end-break" class="green"/>
      </td>
      <td>
        <input type="time" id="end-work" class="blue"/>
      </td>
    
      <td>
        <input  class="workedHours purple" value="00:00" disabled />
      </td>
      <td>
        <button class="btn" type="submit">add</button>
      </td>
      `;
    
    return form;
    }
    (async () => {
        // …
        tableBodyTrs.forEach((tr) => {
          // console.log(tr);
      
          tr.appendChild(createForm());
        });
        //   console.log(tableBodyTrs);
      })();

      const forms = document.querySelectorAll("form");

      forms.forEach((form) => {
        // console.log(form[0].value);
      
        // const day = e.target.children[0].value;
        form.onsubmit = (e) => {
          e.preventDefault();
          
      
      
          // TODO: 4.1.1 Validate form submission
      
      
      
          //TODO: [ ] 5. Calculate the daily hours worked
      
      
      
          // todo: [ ] 6.Calculate total amount of worked hours
      
        };
      });
      const day = e.target.children[0].value;
//console.log(day);
const startWork = e.target.children[1].value;
const startBreak = e.target.children[2].value;
const endBreak = e.target.children[3].value;
const endWork = e.target.children[4].value;
let worked = e.target.children[5];
let submitBtn = e.target.children[6];

// Validation

        //validateSubmission(day,startWork, endWork, submitBtn);


 // Calc the daily hours worked 
        worked.value = calcDailyWorkedHours(startWork,startBreak,endBreak,endWork);      
        
        
        //calc Total hours worked 
        calculateTotalWorkedHours();
     
//todo: Create Validation Function 

function validateSubmission(day, startWork, endWork, submitBtn)
{

    if ( day === "" || startWork === "" || endWork === ""){
        alert("Complete work day, start and end work hours" );
    } else {
        submitBtn.classList.add("btn-green");
        submitBtn.innerHTML ="&#10004";
        return true;
    }
}


//todo: Create function calcDailyWorkedHours

function calcDailyWorkedHours( startWork, endWork, startBreak, endBreak){
    startWork = startWork.split(":"); 
    endWork = endWork.split(":");
    startBreak = startBreak.split(":");
    endBreak = endBreak.split(":");
   //Work time
    const startWorkDate = new Date(0, 0, 0, startWork[0], startWork[1], 0);
    const endWorkDate = new Date(0, 0, 0, endWork[0], endWork[1], 0);
    const diffWork = endWorkDate.getTime() - startWorkDate.getTime();
    
   //Break time
   const startBreakDate = new Date(0, 0, 0, startBreak[0], startBreak[1], 0);
   const endBreakDate =new Date(0, 0, 0, endWork[0], endWork[1], 0);
   const diffBreak = endBreakDate.getTime() - startBreakDate.getTime();
 
  let diffFinal= (isNaN(diffWork) ? 0 : diffWork) -(isNaN(diffBreak) ? 0 : diffBreak);

let hours = Math.floor(diffFinal / 1000 / 60  / 60);
diffFinal -= hours * 1000 * 60 * 60;
const minutes = Math.floor(diffFinal / 1000 / 60);

    //console.log(diffFinal);
return (hours < 0 ? "0" : "")+ hours + ":" +(minutes < 9 ? "0":"") + minutes;
}

// todo:create a function to calculateTotalWorkedHours

function calculateTotalWorkedHours(){
const allWorkedHours = document.querySelectorAll(".WorkedHours");


let arrayOfWorkedHours = Array.from (allWorkedHours);

let newWorkedHours = arrayOfWorkedHours.map*((WorkedHours) =>WorkedHours.value);
console.log(newWorkedHours);
let arr = [];
arr.push(newWorkedHours);
console.log(arr);

let convertedHours= newWorkedHours.map(el=>{
    const [hours,minutes]=el.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
});
console.log(convertedHours);

let calculateTotalHoursWorked = convertedHours.reduce((partialSum,a) => parseInt(partialSum + a),0);

document.getElementById("totalWorkedHours").value = minutesToHoursAndMinutes(calculateTotalHoursWorked);

}
function minutesToHoursAndMinutes(minutes){
const hours = Math.floor(minutes / 60);
const mins =minutes % 60 ;
return (hours+"").padStart(2,"0")+":"+(mins+"").padStart(2,"0");
}























