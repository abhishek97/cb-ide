<template>
  <div class="col-md-8 colw90">
    <div class="hovercard" id="fs_control">
      <div class="panel panel-default"
           style="margin-bottom: 0px; border-radius:0px; border-bottom-width:0px;   ">
        <div class="headPanel panel-heading" style=" border-bottom-width:0px; ">
          <!-- Single button -->
          <editor-dropdown :options=languages :selected.sync=currentLanguage ></editor-dropdown>
          <div class="btn-group">
            <button type="button" id="settingButton" class="btn hovercard-light btn-sm btn-filled">
              Setting <span class="fa fa-cog"></span>
            </button>
          </div>
          <div class="btn-group" @click="customInputToggle()" >
            <button type="button" id="custInp" class="btn hovercard-light btn-sm btn-filled">
              Custom Input
            </button>
          </div>

          <ul class="list-inline panel-actions">
            <li><a href="#" id="panel-fullscreen" role="button" title="Enter Full Screen Mode"><i
              id="toggleBtn" class="glyphicon glyphicon-resize-full"></i></a></li>
          </ul>
        </div>
      </div>
      <ace-editor :language=currentLanguage :content.sync=code ></ace-editor>
    </div>
    <p class="autoSaveText">Auto Saved!</p>
  </div>
</template>

<script>
  import AceEditor from './Ace-editor.vue'
  import editorDropdown from './editor-dropdown.vue'
  export default {
    name: 'editor-buttons',
    components: { AceEditor, editorDropdown },
    data () {
      return {
        currentLanguage: 'C++',
        languages: ['C', 'C++', 'Java', 'Python', 'Javascript']
      }
    },
    methods: {
      customInputToggle () {
        this.$emit('customInput')
      }
    }
  }
</script>
