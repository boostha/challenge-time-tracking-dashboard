const importedData = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const cardInfo = document.querySelectorAll('.ind-card-info')
const selectInfo = document.querySelectorAll('.select-info-item')
const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')

for (let i = 0; i < cardInfo.length; i++) {
  cardInfo[i].innerHTML = `
  <svg class="dots" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
  <h3>${importedData[i].title}</h3>
  <div class="ind-card-progress">
    <h1>${importedData[i].timeframes.daily.current}hrs</h1>
    <p>Last Week: ${importedData[i].timeframes.daily.previous}hrs</p>
  </div>
`
}

selectInfo.forEach(function(item) {
  item.addEventListener('click', function() {
    selectInfo.forEach(function(item) {
      item.classList.remove('active')
    })

    this.classList.add('active')
  })
})

daily.addEventListener('click', () => {
  for (let i = 0; i < cardInfo.length; i++) {
    cardInfo[i].innerHTML = `
    <svg class="dots" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
    <h3>${importedData[i].title}</h3>
    <div class="ind-card-progress">
      <h1>${importedData[i].timeframes.daily.current}hrs</h1>
      <p>Last Week: ${importedData[i].timeframes.daily.previous}hrs</p>
    </div>
  `
  }
})

weekly.addEventListener('click', () => {
  for (let i = 0; i < cardInfo.length; i++) {
    cardInfo[i].innerHTML = `
    <svg class="dots" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
    <h3>${importedData[i].title}</h3>
    <div class="ind-card-progress">
      <h1>${importedData[i].timeframes.weekly.current}hrs</h1>
      <p>Last Week: ${importedData[i].timeframes.weekly.previous}hrs</p>
    </div>
  `
  }
})

monthly.addEventListener('click', () => {
  for (let i = 0; i < cardInfo.length; i++) {
    cardInfo[i].innerHTML = `
    <svg class="dots" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
    <h3>${importedData[i].title}</h3>
    <div class="ind-card-progress">
      <h1>${importedData[i].timeframes.monthly.current}hrs</h1>
      <p>Last Week: ${importedData[i].timeframes.monthly.previous}hrs</p>
    </div>
  `
  }
})

