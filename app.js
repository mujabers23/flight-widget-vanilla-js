const tableBody = document.getElementById('table-body')

let flights = [
  {
    time: "21:12",
    destination: "Indonesia",
    flight: "ox 208",
    gate: "B 05",
    remarks: "DELAYED"
  },
  {
    time: "22:32",
    destination: "Malaysia",
    flight: "DXD 208",
    gate: "A 23",
    remarks: "ON TIME"
  },
  {
    time: "12:02",
    destination: "Papua",
    flight: "FR 08",
    gate: "C 05",
    remarks: "CANCELLED"
  },
  {
    time: "13:12",
    destination: "CANADA",
    flight: "TR 90",
    gate: "X 09",
    remarks: "DELAYED"
  },
  {
    time: "19:12",
    destination: "TURKY",
    flight: "RY 70",
    gate: "XD 12",
    remarks: "CANCELLED"
  }
]

const destination = ["Indonesia", "Malaysia", "Papua", "CANADA", "TURKY" ]
const remarks = ["DELAYED", "ON TIME", "CANCELLED" ]
let hour = 22

function populataTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr")

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td")
      const word = Array.from(flight[flightDetail])

      for (const [index,letter] of word.entries()) {
        const letterElement = document.createElement('div')

        setTimeout(()=>{
            
        letterElement.classList.add('flip')
        letterElement.textContent = letter
        tableCell.append(letterElement)
        }, 100 * index )

      }

      tableRow.append(tableCell)
    }
    tableBody.append(tableRow)
  }
}

populataTable()


function generateRandomLetter(){
    const numbers = "123456789"
    if(maxNumber){
        const newNumbers = numbers.slice(0,maxNumber)
        return newNumbers.charAt(math.random() * newNumbers.length)
    }
    return numbers.charAt(math.random() * numbers.length)
}

function generateRandomNumber(maxNumber){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(math.random() * alphabet.length)
}

function generateTime(){
    let displayHour = hour
    if (hour < 24){
        hour++
    }
    if(hour >= 24) {
        hour = 1
        displayHour =hour
    }
    if (hour < 10){
        displayHour = "0" + displayHour
    }
    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}


function shuffleUP(){
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() ,
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populataTable()
}

setInterval(shuffleUP, 2000)
