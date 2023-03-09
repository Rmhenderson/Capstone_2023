<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
    <div style="display: flex;">
  <div style="flex: 1; overflow: auto; max-height: 300px;">
    <table>
      <tr v-for="kitchenAssignment in kitchenAssignments" :key="kitchenAssignment.id">
      <td>{{ kitchenAssignment.id }}</td>
      <td>{{ kitchenAssignment.kAName }}</td>
      <td>{{ kitchenAssignment.startTime }}</td>
      <td>{{ kitchenAssignment.endTime }}</td>
      <td>{{ kitchenAssignment.minRoleRequired }}</td>
      <td> 
        <button @click="getAssignment(kitchenAssignment.id, kitchenAssignment.kAName)">Choose Assignment</button>
      </td>
      <td>
        <button @click="deleteAssignment(kitchenAssignment.id)">Delete</button>
      </td>
      </tr>
    </table>
  </div>
  <div style="flex: 1; overflow: auto; max-height: 300px;">

<table>
  <tr v-for="shiftAssignment in shiftAssignments" :key="shiftAssignment.id">
    <td>
      <template v-for="kitchenAssignment in kitchenAssignments">
        <template v-if="kitchenAssignment.id === shiftAssignment.kitchenAssignmentId">
          {{ kitchenAssignment.kAName }}
        </template>
      </template>
    </td>
    <td>{{ shiftAssignment.id }}</td>
    <td>{{ shiftAssignment.neededEmployees }}</td>
    <td>
      <button @click="deleteSAssignment(shiftAssignment.id)">Delete</button>
    </td>
  </tr>
</table>

  </div>
</div>
    <div>
    <form @submit.prevent="createAssignment">
      <label>Name:</label>
      <input type="text" v-model="newAssignment.kAName" /> 
      <br>
      <label>Start Time:</label>
      <input type="time" v-model="newAssignment.startTime" /> 
      <br>
      <label>End Time:</label>
      <input type="time" v-model="newAssignment.endTime" />
      <br>
      <label>Minimum Role Required:</label>
         <select v-model="newAssignment.minRoleRequired">
            <option disabled value="">Select role</option>
            <option value="Kitchen Leader">Kitchen Leader</option>
            <option value="Sous Chef">Sous Chef</option>
            <option value="Line Cook">Line Cook</option>
            <option value="Junior Cook">Junior Cook</option>
            <option value="Dishwasher">Dishwasher</option>
      </select>
<br>
      <button type="submit" :disabled="vAssignment()">Create Kitchen Assignment</button>
    </form>
  </div>

  <div>
    <form @submit.prevent="createShiftAssignment"> 
      <label>Selected Kitchen Assignment here:</label> {{ pickedId }}, {{ pickedName }}
      <br>
      <label># of required Employees: </label>
      <input type="number" v-model="newShiftAssignment.neededEmployees" /> 
      <br>
      <p v-if="errorMessage" style="color: red;">{{errorMessage}}</p>
      <button type="submit" :disabled="!newShiftAssignment.neededEmployees || isNaN(newShiftAssignment.neededEmployees)">Create Shift Assignment</button>
    </form>
  </div>

  </div>
</template>
  <script>

import axios from 'axios';

export default {
   name: 'sendAssignment',
   data() {
      return {
         kitchenAssignments: [],
         shiftAssignments: [],
         pickedId: null,
         kAname: null,
         newAssignment: {
            kAName: '',
            startTime: '',
            endTime: '',
            minRoleRequired: ''
         },
         newShiftAssignment: {
            kitchenAssignmentId: '',
            neededEmployees: ''
         },
      };
   },
   created() {
      this.getAssignments();
      this.getSAssignments();
   },

   // display assignments 

   methods: {
      async getAssignments() {
         const response = await axios.get('/api/assignmentList');
         this.kitchenAssignments = response.data;
      },
      async getSAssignments () {
         const response = await axios.get('/api/sAssignmentList');
         this.shiftAssignments = response.data; 
      },
      getAssignment(id, kAname) {
         this.pickedId = id;
         this.pickedName = kAname;
         this.newShiftAssignment.kitchenAssignmentId = parseInt(this.pickedId, 10);
         console.log("selected id:", id);
      },

      // delete assignments 

      async deleteAssignment(id) {
         try {
            await axios.delete(`/api/deleteAssignment/${id}`);
            this.kitchenAssignments = this.kitchenAssignments.filter(kitchenAssignment => kitchenAssignment.id !== id);
         } catch (error) {
            console.log(error);
         }
      },
      async deleteSAssignment (id) {
         try {
            await axios.delete(`/api/deleteSAssignment/${id}`);
            this.shiftAssignments = this.shiftAssignments.filter(shiftAssignments => shiftAssignments.id !== id);
         } catch (error) {
            console.log(error);
         }
      },

      // create them

      async createAssignment() {
         const response = await axios.post('/api/kitchenAssignments', this.newAssignment);
         console.log(response.data);
         this.getAssignments();
      },
      async createShiftAssignment() {
         if (isNaN(this.newShiftAssignment.neededEmployees)) {
            this.errorMessage = 'Please input a whole number.';
            return;
         }
         const response = await axios.post('/api/addShiftAssignment', this.newShiftAssignment);
         console.log(response.data);
         this.errorMessage = '';
         this.getSAssignments();
      }, 

      // validity checks below. v = validate 
      
      vAssignment() {
      return !this.newAssignment.kAName || !this.newAssignment.startTime || !this.newAssignment.endTime ||
             !this.newAssignment.minRoleRequired || 
             !['Kitchen Leader', 'Sous Chef', 'Line Cook', 'Junior Cook', 'Dishwasher'].includes(this.newAssignment.minRoleRequired);
    }
   }
}
  </script>
  