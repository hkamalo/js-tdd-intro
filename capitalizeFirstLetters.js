

//WRITE THE CODE HERE 

const capitalizeFirstLetters = (chain) =>{

    let chainResult = '';

  for (let i = 0; i < chain.length; i++){

    if((i === 0) || (chain[i-1] === ' ')) { 
        chainResult += chain[i].toUpperCase();
    } else {
        chainResult += chain[i]
    }
    }
    return chainResult
};

module.exports = capitalizeFirstLetters;