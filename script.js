const jokeContainer = document.querySelector('#joke');
const btn = document.querySelector('#btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";


let getJoke = ()=>{
    jokeContainer.classList.remove("fade");
    fetch(url).then((data)=>{
        return data.json();

    }).then((item)=>{
        console.log(item.joke)
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade")
    })
}

btn.addEventListener("click",getJoke)
getJoke();


// let getJoke = async()=>{
//     try{
//         let response = await fetch(url);
//         let data = await response.json();

//         console.log(data);

//     }catch(error){
//         console.log(error)
//     }

// }
// btn.addEventListener('click',getJoke)
// getJoke();