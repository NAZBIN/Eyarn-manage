<template>
  <div id="app">
    <div v-if="login">
      <div class="header">医院管理系统</div>
      <el-container>
        <el-aside width="150px">
          <div class="aside-box"><side-bar-menu></side-bar-menu></div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
    <div class="logcheck" v-if="!login">
      <h1 class="title">欢迎登陆医院管理系统</h1>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="number">
          <el-input v-model="ruleForm.number"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登陆</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import SideBarMenu from './components/SideBarMenu.vue';

export default {
  name: 'App',
  components: {
    SideBarMenu,
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      login: false,
      ruleForm: {
        pass: '',
        number: '',
      },
      rules: {
        pass: [{validator: validatePass, trigger: 'blur'}],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const {number, pass} = this.ruleForm;
      let res = false;
      const self = this;
      console.log(number, pass);
      if (number === '123' && pass === '123') res = true;
      this.$refs[formName].validate(valid => {
        if (valid && res) {
          this.$message({
            message: '登陆成功！',
            type: 'success',
          });
          console.log('ok');
          self.login = true;
        } else {
          this.$message({
            message: '您输入的密码不正确，请重新输入',
            type: 'warning',
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  background-color: #1d2b36;
  height: 60px;
  width: 150px;
  color: skyblue;
  text-align: left;
  font-size: 1.5rem;
  line-height: 60px;
}
.logcheck {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  margin-top: -80px;
  margin-bottom: 30px;
}
.demo-ruleForm {
  width: 350px;
  height: 200px;
  border: slategrey 5px solid;
  padding: 50px 65px 0px 0;
}
.el-aside {
  background-color: #1d2b36;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: white;
  color: #333;
  height: 100vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.aside-box {
  width: inherit;
  overflow: hidden;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
