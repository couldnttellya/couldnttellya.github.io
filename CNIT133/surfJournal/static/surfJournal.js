$(function (){

    fetch('https://www.ndbc.noaa.gov/data/realtime2/46237.txt', "no-cors")
    .then(response => response.text())
    .then(text => {
      const rows = text.trim().split('\n');
      const data = rows.slice(1).map(row => {
        const columns = row.split('\t');
        return {
          date: columns[0],
          time: columns[1],
          waveHeight: parseFloat(columns[5]),
          wavePeriod: parseFloat(columns[6]),
          windDirection: parseFloat(columns[13]),
          windSpeed: parseFloat(columns[14])
          // Add more properties as needed
        };
      });
      console.log(data);
      // Do something with the data array
    })
    .catch(error => console.error(error));

});