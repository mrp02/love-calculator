function calculateLove() {

    let yourName = document.getElementById('yourName').value
    let partnerName = document.getElementById('partnerName').value



    let lovePercentage = Math.floor(Math.random() * 101);

    let result = yourName + ' and ' + partnerName + "'s love percentage is: " + lovePercentage + "%";

    if (yourName == '' && partnerName == '') {
        putName.style.display = 'block'
        setTimeout(()=>{
            putName.style.display = 'none'
        }, 3000)
    } else if (lovePercentage == 0 || lovePercentage <= 40) {
        console.log('your love is in coma level😰🥶');
        show.innerHTML = "kuku break up with that man"
        document.getElementById('result').innerHTML = result;
    } else if (lovePercentage == 41 || lovePercentage <= 60) {
        console.log('hmmm i warned you enough😒🤐');
        show.innerHTML = 'hmmm i warned you enough😒🤐'
        document.getElementById('result').innerHTML = result;

    } else if (lovePercentage == 61 || lovePercentage <= 70) {
        console.log('dont give up yet you are getting there😎');
        show.innerHTML = 'dont give up yet you are getting there😎'
        document.getElementById('result').innerHTML = result;

    } else if (lovePercentage == 71 || lovePercentage <= 100) {
        console.log('what are you waiting straight to the alter 👨‍👨‍👦‍👦');
        show.innerHTML = 'what are you waiting straight to the alter 👨‍👨‍👦‍👦'
        document.getElementById('result').innerHTML = result;
    }




    document.getElementById("yourName").value = ""
    document.getElementById("partnerName").value = ""


}



