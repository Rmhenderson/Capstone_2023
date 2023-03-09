<template>
   <div class="container">
   <header class="jumbotron">
     <h3>{{content}}</h3>
   </header>

   <div style="display: flex;">
    <div>
      <button @click="toggleTable">Show Unaccepted Users.</button>
      <table v-if="showUsers">
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.accepted }}</td>
          <td>{{ user.requestedUserType }}</td>
          <td> 
            <button :disabled="user.accepted = true" @click="getUser(user.id, user.username)">Select a user to modify.</button>
          </td>
        </tr>
      </table> 
      <table v-else>
        <tr v-for="userUnaccepted in usersUnaccepted" :key="userUnaccepted.id">
         <td> {{ userUnaccepted.id }}</td>
          <td>{{ userUnaccepted.username }}</td>
          <td>{{ userUnaccepted.email }}</td>
          <td>{{ userUnaccepted.accepted }}</td>
          <td>{{ userUnaccepted.requestedUserType }}</td>
          <td> 
            <button @click="getUser(userUnaccepted.id, userUnaccepted.username)">Select a user to modify.</button>
          </td>
        </tr>
      </table> 
    </div>
  </div>

<div>
   <form @submit.prevent="createEmployee"> 
     <label>Selected User:</label> {{ pickedUsername }}
     <br>
     <label>Brigade title: </label>
     <select v-model="newEmployee.employeeBrigadeTitle">
       <option disabled value="">Please select</option>
       <option>Kitchen Leader</option>
       <option>Sous Chef</option>
       <option>Line Cook</option>
       <option>Junior Cook</option>
       <option>Dishwasher</option>
     </select>
     <br>
     <label>Minimum hours: </label>
     <input type="number" v-model="newEmployee.minHours" /> 
     <br>
     <label>~Maximum hours: </label>
     <input type="number" v-model="newEmployee.maxHours" /> 
     <br>
     <button type="submit" :disabled="!newEmployee.employeeBrigadeTitle || !newEmployee.minHours || !newEmployee.maxHours" >Add to Employees</button>
   </form>
 </div>

 <div> 
   <h3>Select role ID:</h3>
  <select v-model="selectedRoleId">
    <option value="2">Admin</option>
    <option value="3">Root</option>
    <option value="4">Employee</option>
    <option value="5">Assistant</option>
  </select>
  <br>
  <button :disabled="!selectedRoleId" @click="updateRoleId">Update role ID.</button>
  </div>
<button @click="acceptUser">Accept this user.</button>
<br>
<button @click="denyUser">Deny this user.</button>
   </div>
 </template>
   <script>
 
import axios from 'axios';

export default {
  name: 'userDisplay',
  data() {
     return {
        users: [],
        employees: [],
        usersUnaccepted: [],
        showUsers: false,
        roles: [],
        userId: null,
        pickedUsername: null,
        selectedRoleId: 1,
        roleIds: [2, 3, 4, 5],
        newEmployee: {
           userId: '',
           employeeBrigadeTitle: '',
           minHours: '',
           maxHours: ''
        }
     };
  },
  created() {
     this.getUsers();
     this.getEmployees(); 
     this.getUnaccepted();
  },
  methods: {

   // grabbing users & employees 

     async getUsers() {
        const response = await axios.get('/api/userList');
        this.users = response.data;
     },
     async getEmployees () {
       const response = await axios.get('/api/employeeList');
       this.employees = response.data
     },

     async getUnaccepted() {
        const response = await axios.get('/api/unacceptedList');
        this.usersUnaccepted = response.data; 
     },

     // toggling the table 

     toggleTable() {
      this.showUsers = !this.showUsers;
    },

     // accept user, deny user, & create employee

     async acceptUser() {
      if(confirm("Are you sure you want to accept this user?")){
          try {
            await axios.post(`/api/userAccept/${this.userId}`);
          } catch (error) {
            console.log(error);
        };
      };
        this.getUsers();
     },
     async denyUser (){
      if(confirm("Are you sure you want to DENY this user?")){
          try { 
            await axios.post(`/api/userDeny/${this.userId}`);
          } catch (error) {
            console.log(error);
        };
     }; 
        this.getUsers();
     },
     getUser(id, username) {
        this.userId = id;
        this.pickedUsername = username; 
        this.newEmployee.userId = parseInt(this.userId, 10);
     },
     async createEmployee() {
      
        if (!this.newEmployee.employeeBrigadeTitle || !this.newEmployee.minHours || !this.newEmployee.maxHours) {
            return alert('Please fill in all the fields!')
      }
        const response = await axios.post('/api/createEmployee', this.newEmployee);
        console.log(response.data);
     },

     // update role id 

     async updateRoleId () {
         try { 
            await axios.post('/api/updateRoleId', {
               selectedRoleId: this.selectedRoleId,
               userId: this.userId
            });  
         } catch (error) {
            console.error(error);
         }
     }
  }
}
   </script>