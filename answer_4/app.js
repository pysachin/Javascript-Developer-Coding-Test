
const btnSubmit = document.getElementById('submit');
const txtFirstname = document.getElementById('firstname');
const chkCheckme = document.getElementById('checkme');

btnSubmit.addEventListener('click',(e)=>{

    if(txtFirstname.value.length <= 0){
        e.preventDefault();
        alert("Kindly Add First Name");
    }
    else if(!chkCheckme.checked){
        e.preventDefault();
        alert("Kindly Click On Checkme");
    }
});

