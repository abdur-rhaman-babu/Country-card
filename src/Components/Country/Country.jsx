/* eslint-disable react/prop-types */

const Country = ({singleCountry}) => {
 
const {name,flags,capital,region,population,coatOfArms} = singleCountry;
// console.log(singleCountry);
const languages= singleCountry.languages;
let lan = []
for (let key in languages){
    lan.push(languages[key])
}

const showMore = ()=>{
    alert('sob kichu thik ache')
}

    return (
        <div className="single-country-card">
            <div className="country-title">
            <h3>{name.common}</h3>
         <div className="coatOfArms">
         <img src={coatOfArms.png} alt="" />
         </div>
            </div>
         <img src={flags.png} alt="This is flags" />
         <p> <span>City:</span> {capital}</p>
         <p> <span>Language:</span> {lan.join(' , ')}</p>
         <p> <span>Region:</span> {region}</p>
         <p> <span>Population:</span> {population}</p>
         <div className="card-btn">
         <button onClick={showMore}>Show More</button>
         </div>
        </div>
    );
};

export default Country;