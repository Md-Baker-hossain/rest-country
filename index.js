 
 


const loadData =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data)=> displayCountry(data))
     
}

  const displayCountry =(country)=>{
        
        const countrysHtml = country.map(country => getHtnl(country))
        
          document.getElementById("container").innerHTML = countrysHtml.join(" ");
        }; 
      
        
  
  


loadData();


// destructure---
const getHtnl = ({name,flags}) =>{
  
 return `
 <div class="country">
 <img src="${ flags.png}"/>
 <h2>${name.common} </h2>
 </div>
 `
 
}

// option -1
// const getHtnl = country =>{
//    const {name,flags} = country;
//   return `
//   <div class="country">
//   <img src="${ flags.png}"/>
//   <h2>${name.common} </h2>
//   </div>
//   `
  
// }



//  original one
// const getHtnl = country =>{
//   // console.log(country.flags.png)
//   return `
//   <div class="country">
//   <img src="${country.flags.png}"/>
//   <h2>${country.name.common} </h2>
//   </div>
//   `
  
// }