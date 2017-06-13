<template>
  <div class="modal-body">
    <div class="modal-group">
      <button type="button" class="btn hovercard-light btn-sm btn-modal" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
        Theme <span class="caret"></span>
      </button>
      <ul class="dropdown-menu modal-dropdown" style="height: 150px;overflow: auto;">
        <li class="text-center"
            style="font-size: smaller; background: #f5f5f5;text-transform: uppercase;">Bright
        </li>
        <li><a class="changetheme" id="dawn" href="#">Dawn</a></li>
        <li><a class="changetheme" id="github" href="#">GitHub</a></li>
        <li><a class="changetheme" id="solarized_light" href="#">Solarized Light</a></li>
        <li><a class="changetheme" id="tomorrow" href="#">Tomorrow</a></li>
        <li><a class="changetheme" id="xcode" href="#">Xcode</a></li>
        <li class="text-center"
            style="font-size: smaller; background: #f5f5f5;text-transform: uppercase;">Dark
        </li>
        <li><a class="changetheme" id="clouds_midnight" href="#">Clouds Midnight</a></li>
        <li><a class="changetheme" id="cobalt" href="#">Cobalt</a></li>
        <li><a class="changetheme" id="idle_fingers" href="#">idle Fingers</a></li>
        <li><a class="changetheme" id="mono_industrial" href="#">Mono Industrial</a></li>
        <li><a class="changetheme" id="monokai" href="#">Monokai</a></li>
        <li><a class="changetheme" id="pastel_on_dark" href="#">Pastel on Dark</a></li>
        <li><a class="changetheme" id="solarized_dark" href="#">Solarized Dark</a></li>
        <li><a class="changetheme" id="tomorrow_night" href="#">Tomorrow Night</a></li>
        <li><a class="changetheme" id="twilight" href="#">Twilight</a></li>
      </ul>
    </div>

    <div class="modal-group">
      <button type="button" class="btn hovercard-light btn-sm btn-modal" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
        Font <span class="caret"></span>
      </button>
      <ul class="dropdown-menu modal-dropdown" style="height: 150px;overflow: auto;">
        <li><a onclick="setFont('Lucida Console');" href="#">Lucida Console</a></li>
        <li><a onclick="setFont('Anonymous Pro');" href="#">Anonymous Pro</a></li>
        <li><a onclick="setFont('Courier');" href="#">Courier</a></li>
        <li><a onclick="setFont('Droid Sans Mono');" href="#">Droid Sans Mono</a></li>
        <li><a onclick="setFont('Inconsolata');" href="#">Inconsolata</a></li>
        <li><a onclick="setFont('Source Code Pro');" href="#">Source Code Pro</a></li>
        <li><a onclick="setFont('Ubuntu Mono');" href="#">Ubuntu Mono</a></li>

      </ul>
    </div>
    <div class="modal-group">
      <button type="button" class="btn hovercard-light btn-sm btn-modal" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
        Size <span class="caret"></span>
      </button>
      <ul class="dropdown-menu modal-dropdown" style="height: 150px;overflow: auto;">
        <li><a onclick="setFontSize('9');" href="#">9</a></li>
        <li><a onclick="setFontSize('10');" href="#">10</a></li>
        <li><a onclick="setFontSize('12');" href="#">12</a></li>
        <li><a onclick="setFontSize('14');" href="#">14</a></li>
        <li><a onclick="setFontSize('16');" href="#">16</a></li>
        <li><a onclick="setFontSize('18');" href="#">18</a></li>
        <li><a onclick="setFontSize('20');" href="#">20</a></li>
        <li><a onclick="setFontSize('24');" href="#">24</a></li>
        <li><a onclick="setFontSize('30');" href="#">30</a></li>
        <li><a onclick="setFontSize('36');" href="#">36</a></li>
        <li><a onclick="setFontSize('42');" href="#">42</a></li>
        <li><a onclick="setFontSize('48');" href="#">48</a></li>
        <li><a onclick="setFontSize('56');" href="#">56</a></li>
        <li><a onclick="setFontSize('72');" href="#">72</a></li>
      </ul>
    </div>
    <div class="modal-group">
      <button type="button" class="btn hovercard-light btn-sm btn-modal" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
        Auto Save <span class="caret"></span>
      </button>
      <ul class="dropdown-menu modal-dropdown" style="height: 100%;overflow: auto;">
        <li><a onclick="setAutoSave(1);" href="#">ON</a></li>
        <li><a onclick="setAutoSave(0);" href="#">OFF</a></li>
      </ul>
    </div>
    <div class="modal-group">
      <button id="reset" type="button" class="btn hovercard-light btn-sm btn-modal">
        Reset All
      </button>
    </div>
  </div>
</template>
