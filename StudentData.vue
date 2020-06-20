<template>
  <div class="dashboard">
    <h1 class="subheading darken grey--text">StudentData</h1>

    <v-container class="my-5">
      
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Firstname</div>
            <div>{{ project.Firstname }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Lastname</div>
            <div>{{ project.Lastname }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">StudentID:</div>
            <div>{{ project.StudentID }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Major</div>
            <div>{{ project.Major }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Classification</div>
            <div>{{ project.Classification }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">GPA</div>
            <div>{{ project.GPA }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { Firstname: 'Trent', Lastname: 'Murad', StudentID: 'L#7893933', Major: 'CIS', Classification: 'Junior',GPA:'3.7'},
        { Firstname: 'Ali', Lastname: 'Phifer', StudentID: 'L#4523611', Major: 'Nursing', Classification: 'Senior',GPA:'1.8'},
        { Firstname: 'Kimberly', Lastname: 'Saskia', StudentID: 'L#2564653', Major: 'Biology', Classification: 'Freshman',GPA:'4.0'},
        { Firstname: 'Claire', Lastname: 'Lenoir', StudentID: 'L#9674245', Major: 'Mathematics', Classification: 'Sophmore',GPA:'3.2'},
      ]
    }
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
</style>