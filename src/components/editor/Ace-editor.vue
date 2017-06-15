<template>
  <pre id="editor" @keyup="getDirty()" ></pre>
</template>

<script>
  import ace from 'brace'
  import 'brace/mode/c_cpp'
  import 'brace/mode/java'
  import 'brace/mode/python'
  import 'brace/mode/javascript'
  import samples from '../../assets/js/sample-source'


  export default {
    name: 'ace-editor',
    mounted () {
      this.editor = ace.edit('editor')
      this.editor.getSession().setMode(`ace/mode/${this.languageMode}`);
      this.editor.$blockScrolling = Infinity
      this.editor.setValue(samples[this.language])
      this.editor.on('change', ()=>{
        this.$store.commit('updateCode',this.editor.getValue())
      })
      this.$store.subscribe( (mutation, state) => {
        if(mutation.type=='resetCode')
          this.editor.setValue(this.$store.state.code)
      })
    },
    props: {
      language: {
        default: 'C++'
      }
    },
    data () {
      return {
        isClean: true
      }
    },
    methods: {
      getDirty(){
        this.isClean = false
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
    watch: {
      language(newLang){
        if(this.isClean)
          this.editor.setValue(samples[newLang])
      },
      languageMode(newMode){
        this.editor.getSession().setMode(`ace/mode/${newMode}`);
      }
    }
  }
</script>

<style scoped>
  #editor {
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0px;
    height: 400px;
  }
</style>
