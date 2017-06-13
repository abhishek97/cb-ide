<template>
  <div class="col-md-8 colw90 panelTopOptions">
              <textarea id="fileName" class="panelTopTextbox textbox hovercard-light panelTopOptions" rows="1"
                        style="font-size:16px!important;width: 25%; max-width:100%; margin: 0 5px 0 0!important;resize: none!important;"
                        placeholder="Enter file name"></textarea>
    <div class="btn-group panelTopOptions panelTopButton" style="float: right">
      <button type="button" id="downlaod" class="btn hover-light btn-sm btn-filled"
              onclick="saveCodeAsFile();">Download
      </button>
    </div>
    <div class="btn-group panelTopOptions panelTopButton" style="float: right;margin-right: 5px;">
      <button type="button" id="uploadFile" class=" btn hover-light btn-sm btn-filled">
        Upload <span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
      </button>
      <input type="file" id="upload" style="display:none;">
    </div>
  </div>
</template>
