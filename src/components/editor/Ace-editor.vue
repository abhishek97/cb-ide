<template>
  <editor v-model="content" :lang=languageMode theme="chrome"  height="400px" width="100%" ></editor>
</template>

<script>
  import editor from 'vue2-ace-editor'
  import 'brace/mode/c_cpp'
  import 'brace/mode/java'
  import 'brace/mode/python'
  import 'brace/mode/javascript'

  export default {
    name: 'ace-editor',
    components : { editor },
    props: {
      language: {
        default: null
      }
    },
    computed: {
      languageMode () {
        switch(this.language){
          case 'C': return 'c_cpp'
          case 'C++': return 'c_cpp'
          case 'Java': return 'java'
          case 'Python': return 'python'
          case 'Javascript': return 'javascript'
          default : return 'c_cpp'
        }
      }
    },
    data () {
      return {
        content: ''
      }
    }
  }
</script>

