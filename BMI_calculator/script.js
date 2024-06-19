const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', (e) => {
    const heightInput = parseFloat(document.getElementById('heightInput').value)

    const weightInput = parseFloat(document.getElementById('weightInput').value)
    console.log(heightInput)
    console.log(weightInput)

    const bmi = ((weightInput / heightInput) * 100).toFixed(2)

    document.querySelector('#outputBMI').innerHTML = `BMI: <span>${bmi}</span> kg/cm<sup>2</sup>`

    if (bmi < 18.5) {
        const catInfo = document.getElementById('userCategory')
        catInfo.innerHTML = `Your category: <br><span>Underweight</span>`
        console.log(catInfo)

        catInfo.style.borderColor = 'blue'
    } else if (18.5 < bmi && bmi < 24.9 || bmi == 18.5 || bmi == 24.9) {
        const catInfo = document.getElementById('userCategory')
        catInfo.innerHTML = `Your category: <br><span>Healthy weight</span>`
        console.log(catInfo)

        catInfo.style.borderColor = 'green'
    } else if (25 < bmi && bmi < 29.9 || bmi == 25 || bmi == 29.9) {
        const catInfo = document.getElementById('userCategory')
        catInfo.innerHTML = `Your category: <br><span>Overweight</span>`
        console.log(catInfo)

        catInfo.style.borderColor = 'yellow'
    } else if (bmi > 30 || bmi == 30) {
        const catInfo = document.getElementById('userCategory')
        catInfo.innerHTML = `Your category: <br><span>Obese</span>`
        console.log(catInfo)

        catInfo.style.borderColor = 'red'
    } else {
        alert("Something went wrong")
    }


})