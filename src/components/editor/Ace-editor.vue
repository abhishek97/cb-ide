<template>
  <pre id="editor"></pre>
</template>

<script>
  import '../../assets/js/ace'
  export default {
    name: 'ace-editor',
    mounted () {
      const editor = ace.edit('editor')
      editor.setTheme('ace/theme/dawn')
      editor.getSession().setMode('ace/mode/c_cpp')
      editor.$blockScrolling = Infinity
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
