<template>
  <div>
    <el-row id="buttonContainer">
      <el-row>
          <el-button>Default</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
      </el-row>
      <el-row>
          <el-button plain>Plain</el-button>
          <el-button type="primary" plain>Primary</el-button>
          <el-button type="success" plain>Success</el-button>
          <el-button type="info" plain>Info</el-button>
          <el-button type="warning" plain>Warning</el-button>
          <el-button type="danger" plain>Danger</el-button>
      </el-row>
      <el-row>
          <el-button round>Round</el-button>
          <el-button type="primary" round>Primary</el-button>
          <el-button type="success" round>Success</el-button>
          <el-button type="info" round>Info</el-button>
          <el-button type="warning" round>Warning</el-button>
          <el-button type="danger" round>Danger</el-button>
      </el-row>
    </el-row>
    
    <div>
      <p :style="{ display: pshow}">
        Click the button to hide me
      </p>
      <el-button @click="onclick" type="primary">{{ hide }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: "Hide",
      pshow: "block"
    }
  },
  methods: {
    onclick() {
      if (this.pshow == "block") {
        this.pshow = "none";
        this.hide = "Show";
      }
      else {
        this.pshow = "block";
        this.hide = "Hide";
      }
      console.log(this.pshow);
    }
  }
}

</script>

<style scoped lang="scss">

.el-button {
  min-width: 6em;
}

#buttonContainer {
  width: 100%;
  margin: 0 auto;
}

.el-row {
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border-color: black;
}

</style>