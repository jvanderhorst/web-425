let city: string = 'Goldsboro';
let state: string = 'North Carolina';

// where I am from function
function myHome(city: string, state: string): string {
    return 'I am from ' + city + ', ' + state;
}

console.log(myHome(city, state));