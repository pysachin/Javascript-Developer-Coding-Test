
const btnCallAPI = document.getElementById('callApi');
const divResponse = document.getElementById('divResponse');


function getResponse(){
   
    try {

        const xhl = new XMLHttpRequest();
        xhl.open('GET', ' http://www.example.com/api/get/1', true);

        xhl.onreadystatechange = function () {
           try{ 
                if (this.status === 200 && this.readyState === 4) {
                    const response = JSON.parse(this.responseText);
                    divResponse.innerText = response;
                }
            }catch(e)
            {
                divResponse.innerText = e;
            }
        };
        xhl.onerror = function() { 
            divResponse.innerText = "Network Error !!!";
          };
        xhl.send();
    }
    catch(e){
        divResponse.innerText = e;
    }

}

btnCallAPI.addEventListener('click',getResponse);
