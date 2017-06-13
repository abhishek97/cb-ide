<template>
  <div class="row fsHide">
    <div class="col-md-12 buttonCenter">
      <button id="submit" type="button" class="btn btn-sm hover-light btn-filled"
              data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Running">Run
      </button>
      <button type="button" id="save" class="btn hover-light btn-sm btn-filled"
              onclick="saveCode();">Save
      </button>
      <button id="clear" type="button" class="btn bg-dark hover-light btn-sm">Clear All</button>
    </div>
  </div>
</template>
