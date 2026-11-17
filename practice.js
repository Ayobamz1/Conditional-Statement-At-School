function check() {
    // alert('working')
    let birthYear = document.getElementById('input').value
    let displayArea = document.getElementById('display')
    
    
    if(birthYear == ''){
        alert('input should not be empty')
    }
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    let age = currentYear - Number(birthYear)
    if (age >= 18) {
        displayArea.innerHTML = `<p>Vote Dey Go</p>`
    }else if(age < 18){
        displayArea.innerHTML = `<p>Grow Up Fast you have ${18-age} more years to vote<p>`
    }
}