document.addEventListener('DOMContentLoaded',
  function() {

    let grid = document.querySelector('.pixel-grid')
    let numTiles = 504

    for (let i = 0; i < numTiles; i++) {
      (function() {
        let tile = document.createElement('div')
        tile.style.width = "3.5%"
        tile.style.paddingBottom = "3.5%";

        tile.style.border = "1px solid #a1a1a1"
        tile.style.float = "left"
        grid.appendChild(tile)

        tile.addEventListener('click', function() {
          let brushColor = localStorage.getItem("color");
          tile.style.backgroundColor = brushColor; });
      }())
    }

    let palette = document.querySelector('.palette')
    let numColors = 10
    for (let i = 0; i < numColors; i++) {
      (function() {
        let color = document.createElement('div')
        color.classList.add('palette-box')
        color.style.border = ".25px solid #999999"
        color.style.width = "9%"
        color.style.paddingBottom = "9%"
        color.style.marginRight = "1%"
        color.style.float = "left"
        palette.appendChild(color)
      }())
    }

    let paints = document.querySelectorAll('.palette-box')
    for (let j = 0; j < paints.length; j++) {
      (function() {
        let indicator = document.querySelector('.current-color-box')
        let red = paints[0]
        red.style.backgroundColor = "Red"
        red.addEventListener('click', function() {
          localStorage.setItem('color', 'Red')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let blue = paints[1]
        blue.style.backgroundColor = "Blue"
        blue.addEventListener('click', function() {
          localStorage.setItem('color', 'Blue')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let green = paints[2]
        green.style.backgroundColor = "Green"
        green.addEventListener('click', function() {
          localStorage.setItem('color', 'Green')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let pink = paints[3]
        pink.style.backgroundColor = "Pink"
        pink.addEventListener('click', function() {
          localStorage.setItem('color', 'Pink')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let yellow = paints[4]
        yellow.style.backgroundColor = "Yellow"
        yellow.addEventListener('click', function() {
          localStorage.setItem('color', 'Yellow')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let orange = paints[5]
        orange.style.backgroundColor = "orange"
        orange.addEventListener('click', function() {
          localStorage.setItem('color', 'orange')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let purple = paints[6]
        purple.style.backgroundColor = "purple"
        purple.addEventListener('click', function() {
          localStorage.setItem('color', 'purple')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let black = paints[7]
        black.style.backgroundColor = "black"
        black.addEventListener('click', function() {
          localStorage.setItem('color', 'black')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let white = paints[8]
        white.style.backgroundColor = "white"
        white.addEventListener('click', function() {
          localStorage.setItem('color', 'white')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })

        let magenta = paints[9]
        magenta.style.backgroundColor = "magenta"
        magenta.addEventListener('click', function() {
          localStorage.setItem('color', 'magenta')
          indicator.style.backgroundColor = localStorage.getItem("color")
        })
      }())
    }
  });
