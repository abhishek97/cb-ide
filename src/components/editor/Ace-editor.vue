<template>
  <pre id="editor" @change="codeChange()"></pre>
</template>

<script>
  import ace from 'brace'
  import 'brace/mode/c_cpp'
  import 'brace/mode/java'
  import 'brace/mode/python'
  import 'brace/mode/javascript'

  export default {
    name: 'ace-editor',
    mounted () {
      this.editor = ace.edit('editor')
      this.editor.getSession().setMode(`ace/mode/${this.languageMode}`);

      this.editor.on('change', ()=>{
        this.$store.commit('updateCode',this.editor.getValue())
      })

    },
    props: {
      language: {
        default: 'C++'
      }
    },
    methods: {
      codeChange () {
        console.log('change');
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
