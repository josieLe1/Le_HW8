document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()
  const form = new FormData(e.target)

  const tableElement = document.createElement("table")
  const rowElement = document.createElement("tr")
  const keyElement = document.createElement("th")
  const valueElement = document.createElement("th")

  keyElement.textContent = "Key"
  valueElement.textContent = "Value"
  rowElement.appendChild(keyElement)
  rowElement.appendChild(valueElement)
  tableElement.appendChild(rowElement)

  form.forEach((val, key) => {
    const rowElement = document.createElement("tr");
    const tdKeyElement = document.createElement("td");
    tdKeyElement.textContent = key;
    const tdValElement = document.createElement("td");
    tdValElement.textContent = val;
    rowElement.appendChild(tdKeyElement);
    rowElement.appendChild(tdValElement);
    tableElement.appendChild(rowElement);
  });

  const output1 = document.getElementById("output")
  output1.innerHTML = " "
  const header2 = document.createElement("h2")
  header2.textContent = "Form Data Entered"
  output1.appendChild(header2)
  output1.appendChild(tableElement)
})


