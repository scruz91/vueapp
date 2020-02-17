<template>
    <form class='form'>
        <h1>{{title}}</h1>
        <h4>{{message}}</h4>
        <input @input="handleInput($event.target.value)" name='input' type='text' placeholder='input'/>
        <input v-model='title' name='vmodel' type='text' placeholder='vmodel'/>
                
        <input v-for='(field) in form.fields'
          :key='`field.${field.key}`'
          :type='field.type'
          :placeholder='field.placeholder'
          v-model='form.input[field.key]'
        />
        <button v-on:click.prevent=setTitulo()> Cambiar Titulo </button>

        <base-button v-on:click.native.prevent="save()" :text=title />
        <boton-qlo />
        <latabla :name=title :city=title :email=title />
    </form>    
</template>

<script>
  import BaseButton from './components/base-button.vue'
  import LaTabla from './components/table-elo.vue'

  export default {
      name: 'App',
      components: { LaTabla, BaseButton },
      data(){
          return {
            subTitle: 'Information',
            form:{              
              input:{ name: null, email: null,city: null },
              fields:[
                { key:'name', type: 'text', placeholder: 'Your name' },
                { key:'city', type: 'text', placeholder: 'City location' },
                { key:'email', type: 'text', placeholder: 'Your email' }
              ]
            }                  
          }
      },
      methods:{
        save(){
          console.log(this.form.input)
        },
        //onFormChange(updatedForm, oldForm){    

          //console.log({updatedForm, oldForm})          
        //},
        setTitulo(){
          this.$store.commit('setTitle', this.$store.state.input)
        },
        handleInput(value){
          //alert(value)
          this.$store.state.input = value;
        }
        
      },
      computed: {
        capitalizeTitle(){
          return this.$store.getters.title.charAt(0).toUpperCase() + this.$store.getters.title.slice(1)
        },
        message(){
          return this.$store.getters.message;
        },
        title:{
          get(){
            return this.$store.getters.title
          },
          set(newTitle){
            this.$store.commit('setTitle', newTitle)
          }
        }
      }
      
  }
</script>