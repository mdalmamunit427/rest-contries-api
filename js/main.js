const loadAllCountry = async() => {
    const URL = `https://restcountries.com/v3.1/all`;
    const res = await fetch(URL);
    const data = await res.json();
    displayAllCountries(data.slice(0,9));
};

const displayAllCountries = (countries) =>{
    // console.log(countries);
    const countryContainer = document.getElementById('show-all-country');
    countryContainer.innerHTML='';
    document.getElementById('input-field').value='';
    countries.forEach(country => {
        // console.log(country);
        const divElement = document.createElement('div');
        divElement.classList.add('col');
        divElement.innerHTML = `
            <div class="card h-100">
                <img src="${country.flags.png}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="contryDetails('${country.cca2}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#countryModal">
                    Show Details
                    </button>
                </div>
            </div>
        `;
        countryContainer.appendChild(divElement);
    });
};

const contryDetails = async(countryID) =>{
    // console.log(countryID);
    const URL = `https://restcountries.com/v3.1/alpha/${countryID}`;
    console.log(URL);
    const res = await fetch(URL);
    const data = await res.json();
    showSingleCountry(data[0]);
}

const showSingleCountry = (country) =>{
    let currencies = [];
    for(let i in country.currencies){
        currencies.push(i);
    };

    // console.log(currencies);
    console.log(country);
    const modalTitle = document.getElementById('countryModalLabel');
    modalTitle.innerHTML = `${country.name.common}`;

    document.getElementById('modal-content').innerText = `Name: ${country.name.common}
    Population: ${country.population}
    Currency: ${currencies.map(a => a)}`;
}

// const filterCountry = async() =>{
//     const URL = `https://restcountries.com/v3.1/all`;
//     const res = await fetch(URL);
//     const data = await res.json();
//     displayAllCountries(data);
// }

// show country by region

// const countryByRegion =async() =>{
//     // const URL = `https://restcountries.com/v3.1/region/europe`;
//     // const res = await fetch(URL);
//     // const data = await res.json();
//     // countryAfrica(data);
// };

const countryAfrica = async() =>{
    const URL = `https://restcountries.com/v3.1/region/africa`;
    const res = await fetch(URL);
    const data = await res.json();
    displayAllCountries(data);
    document.getElementById('filterText').innerText = 'Africa';
};
const countryAmerica = async() =>{
    document.getElementById('filterText').innerText = '';
    const URL = `https://restcountries.com/v3.1/region/americas`;
    const res = await fetch(URL);
    const data = await res.json();
    displayAllCountries(data);
    document.getElementById('filterText').innerText = 'America';
};
const countryAsia = async() =>{
    const URL = `https://restcountries.com/v3.1/region/asia`;
    const res = await fetch(URL);
    const data = await res.json();
    displayAllCountries(data);
    document.getElementById('filterText').innerText = 'Asia';
};
const countryEurope = async() =>{
    const URL = `https://restcountries.com/v3.1/region/europe`;
    const res = await fetch(URL);
    const data = await res.json();
    displayAllCountries(data);
    document.getElementById('filterText').innerText = 'Europe';
};
const countryOceania = async() =>{
    const URL = `https://restcountries.com/v3.1/region/oceania`;
    const res = await fetch(URL);
    const data = await res.json();
    displayAllCountries(data);
    document.getElementById('filterText').innerText = 'Oceania';
};


const searchCountry =  () =>{
    const inputField = document.getElementById('input-field').value;
    console.log(inputField);
    const countryName = inputField || united;
    const URL = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => displayAllCountries(data));

};


loadAllCountry();