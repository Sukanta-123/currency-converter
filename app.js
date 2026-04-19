const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
const dropDowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector('form  button')

let i = 0;
for (let select of dropDowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "BDT") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  const currCode = element.value;
  const coutryCode = countryList[currCode];
  const newSrc = `https://flagsapi.com/${coutryCode}/flat/64.png`;
  const img = element.parentElement.querySelector('img')
  img.src = newSrc 
};

btn.addEventListener("click",(evt)=>{
  evt.preventDefault()
  let amount = document.querySelector('.amount input')
  let amountVal = amount.value
  console.log(amountVal);
  
})