fetch ("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
.then(response => response.json()) 
.then(paintings => {
  const tableElement = document.getElementById("paintings")
  paintings.forEach(p => {
    const row  = document.createElement("tr")

    const tdName = document.createElement("td")
    tdName.textContent = p.name
    row.appendChild(tdName)

    const tdYear = document.createElement("td")
    tdYear.textContent = p.year
    row.appendChild(tdYear)

    const tdArtist = document.createElement("td")
    tdArtist.textContent = p.artist
    row.appendChild(tdArtist)

    tableElement.appendChild(row)
  })
})

.catch (err => {
  console.error(err.message)
})