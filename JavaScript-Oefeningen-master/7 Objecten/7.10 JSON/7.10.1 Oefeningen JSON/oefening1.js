const metingJson = '{"temperatuur": 22.5, "luchtvochtigheid": 45, "tijdstip": "2024-09-05T14:30:00Z"}';
const meting = JSON.parse(metingJson);
const date = new Date(meting.tijdstip);

console.log(`De temperatuur is ${meting.temperatuur}°C, de luchtvochtigheid is ${meting.luchtvochtigheid}%, en de meting is gedaan op ${date.getFullYear()}-${date.getMonth()}-${date.getDate()} om ${date.getHours()}:${date.getMinutes()}.`);
