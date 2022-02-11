function increment() {
    document.getElementById('demoInput').stepUp();
    calculateTip();
}
function decrement() {
    document.getElementById('demoInput').stepDown();
    calculateTip();
}

function increment1() {
    document.getElementById('demoInput1').stepUp();
    calculateTip();
}
function decrement1() {
    document.getElementById('demoInput1').stepDown();
    calculateTip();
}

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);


function calculateTip() {
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("demoInput1").value;
    let noOfPeople = document.getElementById("demoInput").value;

    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}
calculateTip();