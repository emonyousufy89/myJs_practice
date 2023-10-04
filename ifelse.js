// if the hour is between 6 to 12 pass good morning
// id the hour is between 12 to 4 pass good afternoon
// if the hour is between 4 to 7 pass good evening
// rest good night

let hour = 13;

if (hour >= 6 && hour<=12){
    console.log('good morning');
}

else if (hour>=12 && hour<=16){
    console.log('good afternoon');
}
else if (hour>=16 && hour<=19){
    console.log('good evening');
}
else{
    console.log('good night');
}