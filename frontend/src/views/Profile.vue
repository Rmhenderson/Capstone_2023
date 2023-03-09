<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> | <strong>{{ employee.employeeId }}</strong> | <strong>{{  employee.employeeBrigadeTitle }}</strong>Profile
      </h3>
    </header>
    <p>
      <strong>Id...:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>

<div>
<form @submit.prevent="addTime">
    <label>Input week day:</label>
    <select v-model="newUnavailableTime.weekDay">
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
    </select>
    <br>
    <label>Start Time:</label>
    <input type="time" v-model="newUnavailableTime.startTime" /> 
    <br>
    <label>End Time:</label>
    <input type="time" v-model="newUnavailableTime.endTime" />
    <br>
    <label>Reason (below 100 words):</label>
    <input type="text" v-model="newUnavailableTime.reason" />
    <br>
    <button type="submit" :disabled="!isValidReason || !vUnavailableTime">Submit unavailable time.</button>
</form>
</div>

<div>
<table v-if="viewTimes">
      <tr v-for="unavailableTime in unavailableTimes" :key="unavailableTime.employeeId">
        <td>{{ unavailableTime.employeeId }}</td>
        <td>{{ unavailableTime.weekDay }}</td>
        <td>{{ unavailableTime.accepted }}</td>
        <td>{{ unavailableTime.requestedUserType }}</td>
        <td>        
          <button @click="deleteTime(unavailableTime.employeeId)">Delete Time</button>
        </td>
        </tr>
  </table> 
</div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() { 
    return {
      employeeId: null,
      unavailableTimes: [],
      employee: {
        employeeId: '',
        employeeBrigadeTitle: '',
        minHours: '',
        maxHours: '',
        userId: ''
      },
      newUnavailableTime: {
        employeeId: '',
        weekDay: '',
        startTime: '',
        endTime: '',
        reason: ''
      }
    }
  },
  created () { 
    this.getEmployeeId();
    this.viewTimes();
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  methods: {

    // get employeeId & add time & view times

    async getEmployeeId() {
      const response = await axios.get(`/api/getEmployeeId/${this.currentUser.id}`);
      this.employee = response.data.employee;
     },

     async addTime () {
      this.newUnavailableTime.employeeId = this.employee.employeeId;
      const response = await axios.post('/api/addNewTime', this.newUnavailableTime);
      console.log(response.data);
      this.viewTimes ();
     }, 

     async viewTimes () {
      const response = await axios.get(`/api/unavailableTimes/${this.employeeId}`);
      this.unavailableTimes = response.data.unavailableTime;
     },

     async deleteTime (employeeId) {
      try {
            await axios.delete(`/api/deleteTime/${employeeId}`);
            this.unavailableTimes = this.unavailableTimes.filter(unavailableTimes => unavailableTimes.employeeId !== employeeId);
         } catch (error) {
            console.log(error);
         }
         this.viewTimes ();
      },
     
     // validation options below 

     vUnavailableTime () {
      return this.newUnavailableTime.startTime && this.newUnavailableTime.endTime && this.newUnavailableTime.reason;
     },
     isValidReason () {
      return this.newUnavailableTime.reason.length <= 100;
     }
  } // view unavailable times 
  // remove those if needed 
  // are you options to remove them 

};
</script>

