let my_city = {
    name: `Edmonton`,
    population: 100000,
    is_capital: true,
    communities: [],
    comms: [
        {
            name: `jatt`,
            population: 1000
        },

        {
            name: `pandit`,
            population: 400
        },

        {
            name: `jain`,
            population: 555
        },

        {
            name: `rajput`,
            population: 20
        },

        {
            name: `saini`,
            population: 1500
        }

    ]
}
if(my_city[`is_capital`] === true){
    console.log(`City is ${my_city[`name`]} and the population is ${my_city[`population`]}`);
} else {
    console.log(`Not important`);
}
my_city[`communities`].push(`sikh`,`hindu`,`christian`,`budh`,`muslim`);
console.log(my_city[`communities`]);
let counter = 0;
while(counter < my_city[`communities`].length){
    console.log(my_city[`communities`][counter]);
    counter ++ ;
}
let comms_counter = 0;
while(comms_counter < my_city[`comms`].length){
    if(my_city[`comms`][comms_counter][`population`] >= 100){
        console.log(my_city[`comms`][comms_counter][`name`]);
    } 
    comms_counter ++ ;
}
