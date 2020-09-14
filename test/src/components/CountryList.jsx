import React from 'react'

const CountryList = ({country, region}) => {
    return (
    <div>
        {region ? 
        <p>Zastava države: <img href={country.flag} alt="country-flag"/> || Naziv države: {country.name} || Populacija: {country.population}</p>
        :
        <p>Zastava države: <img href={country.flag} alt="country-flag"/></p>
        }
        <br />
    </div>
    )
}

export default CountryList
