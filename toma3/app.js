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
      
    <div class="card">
        <div class="card-image">
            <img src="${img}" alt="${name}" width="150px">
            <span class="card-title">Nickname: ${nickname}</span>
        </div>
        <div class="card-content">
            <p>Name: ${name}</p>
            <span>Ocupation: ${occupation}</span>
            <p>Status: ${status}</p>
        </div>

    </div>     `     
         
    }
    tarjetas.innerHTML=str;
}