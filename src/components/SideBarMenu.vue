<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#1D2B36"
      @open="handleOpen"
      @close="handleClose"
      router="true"
      text-color="#FFFFFF"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>管理信息</span>
        </template>
        <el-menu-item-group class="item-group">
          <el-menu-item index="/bunks">住院床位</el-menu-item>
          <el-menu-item index="/nurses">医生护士</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/patientin">
        <i class="el-icon-menu"></i>
        <span slot="title">病人入院信息</span>
      </el-menu-item>
      <el-menu-item index="/patientout">
        <i class="el-icon-menu"></i>
        <span slot="title">病人出院信息</span>
      </el-menu-item>
      <el-menu-item index="/bill">
        <i class="el-icon-menu"></i>
        <span slot="title">病人账单信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBarMenu',
  setup() {
    function handleOpen() {}
    function handleClose() {}
    return {
      handleOpen,
      handleClose,
    };
  },
};
</script>

<style lang="scss" scoped>
.el-submenu {
  background-color: #1d2b36;
}
.item-group {
  .el-menu-item {
    margin-left: -30px;
  }
}
.el-menu-vertical-demo {
  border: hidden;
}
</style>
