const years = [1983,1990,2010,2007,1978,2000];
// old fashion
/*const filterYears = years.filter(function(year){
    return year >= 2000;
});*/

// new fashion
/*const filterYears = years.filter((year) => {
    console.log(year);
    return year >= 2000;
});*/

// si une seule ligne
/*const filterYears = years.filter((year) =>  (year >= 2000 || year <= 1983));

console.log(filterYears);*/

const funcWithoutContext = () => {
    console.log('no context ' + this);
}

function anonymous(){    
    this.any = 1;
    console.log('this.any ' + this.any)
    setTimeout(function(){
        console.log(this);
        console.log(`this inside timeout ${this}`);
        console.log(`this.any inside timeout ${this.any}`);
    })
}

funcWithoutContext();
anonymous();