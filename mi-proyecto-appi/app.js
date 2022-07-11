const tarjetas = document.getElementById('tarjetas');
const url = "https://www.breakingbadapi.com/api/characters"

fetch(url)
    .then((resp) => resp.json())
    .then((data) => printData(data))
    .catch((error) => console.log(error))


const printData = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name
        const occupation = arr[i].occupation
        const img = arr[i].img
        const nickname = arr[i].nickname
        const status = arr[i].status
        str = str + `
        <div class="tarjetas c-4">
        <h3 class="nickname">Nickname: ${nickname}</h3>
        <figure class="img">
        <img src="${img}" alt="${name}" width=200>     
        </figure>
         <h2 class="name">name:${name}</h2>
   
         <p class="occupation">ocupation:${occupation}</p>
         <h4 class="status">Status.${status}</h4>
        
    </div>`
    }
    tarjetas.innerHTML=str;
}


/*  */