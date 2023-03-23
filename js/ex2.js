const displayInfo = (userid) => {
  const userID = document.getElementById ("userid").value 
  const output = document.getElementById("output")
  output.innerHTML = " "

  fetch(`https://api.github.com/users/${userID}`)
  .then(response => response.json())
  .then (user => {
    const pElement = document.createElement("p")
    const imgElement = document.createElement("img")
    imgElement.src = user.avatar_url
    pElement.appendChild (imgElement)
    output.appendChild(pElement)

    const tbElement = document.createElement("table")
    const rowElement  = document.createElement("tr")
    const titleElement = document.createElement("td")
    titleElement.textContent = "Name"
    rowElement.appendChild (titleElement)
    const valueElement = document.createElement("td")
    valueElement.textContent = user.name
    rowElement.appendChild (valueElement)

    rowElement = document.createElement("tr")
    titleElement = document.createElement("td")
    valueElement = document.createElement("td")
    titleElement.textContent = "Blog"
    rowElement.appendChild(titleElement)

    const link = document.createElement('a')
    link.href = user.blog
    link.textContent = user.blog
    valueElement.appendChild(link)
    rowElement.appendChild(valueElement)
    tbElement.appendChild(rowElement)

    rowElement = document.createElement("tr")
    titleElement = document.createElement("td")
    valueElement = document.createElement("td")
    titleElement.textContent = "Created"
    rowElement.appendChild (titleElement)
    valueElement.textContent = user.created_at
    rowElement.appendChild (valueElement)
    tbElement.appendChild(rowElement)

    output.appendChild(tableElement)
  })
}

document.getElementById("lookup").addEventListener("click", displayInfo)