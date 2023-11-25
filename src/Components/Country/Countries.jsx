
import { useEffect, useState } from 'react';
import './Country.css'
import Country from './country';

const Countries = () => {
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    }, []);
    // console.log(country);

// console.log(lan);
    return (
        <div className='country-content'>
            {
                country.map((singleCountry)=>  <Country key={singleCountry.cca2}  singleCountry = {singleCountry}/>)
            }
           
        </div>
    );
};

export default Countries;