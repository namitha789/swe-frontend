<template>
  <h1>Environment Data Using Ontologies - Team 16</h1>

  <nav>
    <RouterLink to="/all-data">Show All Data</RouterLink>
    <RouterLink to="/pm25">Person Days Exceeding PM2.5 Standard Value</RouterLink>
    <RouterLink to="/ozone">Days Exceeding Ozone Pollutant Standard Value</RouterLink>
    <RouterLink to="/pollutants">Total Water Pollutants In Pounds</RouterLink>
    <RouterLink to="/co2">CO2 Emission Value</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f4f8;
  color: #333;
  padding: 20px;
}

h1 {
  color: #4CAF50;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

strong {
  font-weight: bold;
  color: #555;
}

nav {
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #ffffff;
  background-color: #4CAF50;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #45a049;
}

main {
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>