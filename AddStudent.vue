<template>
  <v-app>
    <div class="container">
    <h1 class="subheading darken grey--text">AddStudent</h1>
      <v-form>
        <v-text-field
            label="Firstname"
            filled
            color="purple darken-2"
          ></v-text-field>
        <v-text-field
            label="Lastname"
            filled
            color="purple darken-2"
        ></v-text-field>
        <v-text-field
            label="L# (Student ID)" 
            filled
            color="purple darken-2"
        ></v-text-field>
        <v-text-field
            label="Major"
            filled
            color="purple darken-2"
        ></v-text-field>
        <v-text-field
           label="Classification"
           filled
           color="purple darken-2"
        ></v-text-field>
        <v-text-field
           label="GPA"
           filled
           color="purple darken-2"
        ></v-text-field>
        <v-btn class="white--text" color="purple">Add</v-btn>
      </v-form>
  
    </div>
  </v-app>
</template>

<style scoped>
.container{
  max-width: 1100px;
  margin: auto;
}
