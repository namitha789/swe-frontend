<template>
  <div>
    <button @click="fetchData">Fetch Data</button>

    <!-- <div v-if="pollutionData">
      <h3>PollutionData Received:</h3>
      <pre>{{ pollutionData }}</pre>
    </div> -->
    
    <table v-if="pollutionData">
      <thead>
        <tr>
          <th>State</th>
          <th>PM 2.5 Value</th>
          <th>Ozone Value</th>
          <th>Pollutant Value</th>
          <th>CO2 Emission</th>
          <th>State Population</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(state, index) in pollutionData.state" :key="index">
          <td>{{ state }}</td>
          <td>{{ pollutionData.pm25value[index] }}</td>
          <td>{{ pollutionData.ozonevalue[index] }}</td>
          <td>{{ pollutionData.pollutantvalue[index] }}</td>
          <td>{{ pollutionData.co2emission[index] }}</td>
          <td>{{ pollutionData.statepopulation[index] }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pollutionData: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:8000/full-data'); // Update the URL with your server's actual address
        this.pollutionData = response.data;
        console.log('Data received:', this.pollutionData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Basic layout adjustments */
div {
  font-family: 'Arial', sans-serif;
  margin: 20px;
  padding: 20px;
  background-color: #f4f7fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Style the Fetch Data button */
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

/* Table Styling */
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: #2c3e50;
  color: white;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  font-weight: bold;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #dfe6e9;
}

/* Section for Pollution Data header */
h3 {
  color: #34495e;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>

