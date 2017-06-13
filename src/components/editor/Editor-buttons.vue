<template>
  <div class="col-md-8 colw90">
    <div class="hovercard" id="fs_control">
      <div class="panel panel-default"
           style="margin-bottom: 0px; border-radius:0px; border-bottom-width:0px;   ">
        <div class="headPanel panel-heading" style=" border-bottom-width:0px; ">
          <!-- Single button -->
          <div class="btn-group">
            <button id="panelLang" type="button" class="btn hovercard-light btn-sm btn-filled"
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
              Language <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="lang" id="c" href="#">C</a></li>
              <li><a class="lang" id="cpp" href="#">C++</a></li>
              <li><a class="lang" id="java" href="#">Java</a></li>
              <li><a class="lang" id="py2" href="#">Python</a></li>
              <li><a class="lang" id="js" href="#">Javascript</a></li>
            </ul>
          </div>
          <div class="btn-group">
            <button type="button" id="settingButton" class="btn hovercard-light btn-sm btn-filled"
                    onclick="toggleSetting();">
              Setting <span class="fa fa-cog"></span>
            </button>
          </div>
          <div class="btn-group">
            <button type="button" id="custInp" class="btn hovercard-light btn-sm btn-filled"
                    onclick="toggleCustInp();">Custom Input
            </button>
          </div>

          <ul class="list-inline panel-actions">
            <li><a href="#" id="panel-fullscreen" role="button" title="Enter Full Screen Mode"><i
              id="toggleBtn" class="glyphicon glyphicon-resize-full"></i></a></li>
          </ul>
        </div>
      </div>
      <ace-editor></ace-editor>
    </div>
    <p class="autoSaveText">Auto Saved!</p>
  </div>
</template>

<script>
  import AceEditor from './Ace-editor.vue'
  export default {
    name: 'editor-buttons',
    components: { AceEditor }
  }
</script>
