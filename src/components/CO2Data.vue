<template>
    <div>
    <!-- Dropdown for operation (greater than, lesser than, equals) -->
    <select v-model="op">
      <option value="gt">Greater than</option>
      <option value="lt">Less than</option>
      <option value="eq">Equals</option>
    </select>

    <!-- Input for value (integer) -->
    <input v-model="value" type="number" placeholder="Enter value" />

    <!-- Fetch Data button -->
    <button @click="fetchData">Fetch Data</button>
      
      <table v-if="pollutionData">
        <thead>
          <tr>
            <th>State</th>
            <th>CO2 Emission Value</th>
            <th>State Population</th>
            <th>State Area</th>
            <th>State Division</th>
            <th>State Region</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(state, index) in pollutionData.state" :key="index">
            <td>{{ state }}</td>
            <td>{{ pollutionData.co2emission[index] }}</td>
            <td>{{ pollutionData.statepopulation[index] }}</td>
            <td>{{ pollutionData.statearea[index] }}</td>
            <td>{{ pollutionData.statedivision[index] }}</td>
            <td>{{ pollutionData.stateregion[index] }}</td>
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
            op: 'gt',   // Default operation: Equals
            value: 0,   // Default value
            pollutionData: null,
        };
    },
    methods: {
      async fetchData() {
        // Ensure value is an integer
        const newValue = parseInt(this.value, 10);
        if (isNaN(newValue)) {
            alert('Please enter a valid integer value');
            return;
        }

        var newOp = "";
        if (this.op === "gt") {
            newOp = "greater";
        } else if (this.op === "lt") {
            newOp = "lesser";
        } else {
            newOp = "equals";
        }
        try {
          const response = await axios.get('http://localhost:8000/co2/' + newOp + '/' + newValue); // Update the URL with your server's actual address
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
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

button:focus {
  outline: none;
}

/* Style for select dropdown */
select {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  margin-right: 15px; /* Space between select and input field */
}

select:focus {
  border-color: #4CAF50;
  background-color: #f0f8f1;
  outline: none;
}

/* Style for number input */
input[type="number"] {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

input[type="number"]:focus {
  border-color: #4CAF50;
  background-color: #f0f8f1;
  outline: none;
}

/* Adjust layout for input fields */
input, select {
  margin-bottom: 20px;
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
  padding: 12px;
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