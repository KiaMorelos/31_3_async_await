const numbersApiUrl = "http://numbersapi.com/";
const favorite = 7;
const $factList = $(`#facts`);


async function favNumFact(){
    const res = await $.getJSON(`${numbersApiUrl}${favorite}?json`)
        console.log(res)
}

favNumFact()


  //2 

  async function numFacts(){
    const numbers = [23, 1, 4, 51342];
    const res = await $.getJSON(`${numbersApiUrl}${numbers}?json`)
    console.log(res);   
  }

  numFacts()

  //3
async function fourFacts(){
    const four = await Promise.all([
        $.getJSON(`${numbersApiUrl}${favorite}?json`),
        $.getJSON(`${numbersApiUrl}${favorite}?json`),
        $.getJSON(`${numbersApiUrl}${favorite}?json`),
        $.getJSON(`${numbersApiUrl}${favorite}?json`),
    ])
    
    for(let fact of four){

        $factList.append(`<li>${fact.text}</li>`)

    }
}

fourFacts();