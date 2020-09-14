import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getAllCountries, getCountriesByRegion } from './service';
import CountryList from './components/CountryList';

const App = ({regions}) => {

  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState(false)
  

  useEffect(() => {
    getAllCountries()
      .then(res => {
        setCountries(res.data)
        console.log(res.data);
      })
  }, [])

  return(
    <div>
      <button onClick={() => {
        getCountriesByRegion(regions[0])
          .then(res => setCountries(res.data))
          setRegion(!false)
      }}>africa</button>
      <button onClick={() => {
        getCountriesByRegion(regions[1])
          .then(res => setCountries(res.data))
          setRegion(!false)
      }}>americas</button>
      <button onClick={() => {
        getCountriesByRegion(regions[2])
          .then(res => setCountries(res.data))
          setRegion(!false)
      }}>asia</button>
      <button onClick={() => {
        getCountriesByRegion(regions[3])
          .then(res => setCountries(res.data))
          setRegion(!false)
      }}>europe</button>
      <button onClick={() => {
        getCountriesByRegion(regions[4])
          .then(res => setCountries(res.data))
          setRegion(!false)
      }}>oceania</button>
      <h2>Lista drzava</h2>
      {countries.map( country => <CountryList key={country.alpha3Code} country={country} region={region} />)}
    </div>
  )
}
const regions = ['africa', 'americas', 'asia', 'europe', 'oceania']

ReactDOM.render(
  <React.StrictMode>
    <App regions={regions}/>
  </React.StrictMode>,
  document.getElementById('root')
);
