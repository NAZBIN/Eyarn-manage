<template>
  <div>
    <h1 style="text-align: left;">病人账单信息</h1>
    <br />
    <div class="above">
      <el-input
        placeholder="请输入内容"
        v-model="searchData"
        class="el-input-search"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="name" label="姓名" width="330">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="330"> </el-table-column>
        <el-table-column prop="intime" label="入院日期" width="330">
        </el-table-column>
        <el-table-column prop="money" label="花费钱数" width="330">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      tableData: [
        {
          name: 'Anni',
          age: '82',
          intime: '2020-01-05',
          money: '$3200',
        },
        {
          name: 'Tomca',
          age: '51',
          intime: '2020-04-14',
          money: '$2000',
        },
        {
          name: 'Larcy',
          age: '72',
          intime: '2020-04-25',
          money: '$2400',
        },
        {
          name: 'Anna',
          age: '42',
          intime: '2020-03-16',
          money: '$1800',
        },
        {
          name: 'JackChen',
          age: '34',
          intime: '2020-02-23',
          money: '$1900',
        },
      ],
      searchData: '',
      dialogFormVisible: false,
      form: {
        name: '',
        age: '',
        intime: '',
        reason: '',
      },
    };
  },
  created() {},
  methods: {
    showDetail(index) {
      const vm = this;
      console.log(index);
      vm.$router.push({name: 'detail'});
    },
  },
};
</script>

<style scoped>
.above {
  width: 80vw;
  display: flex;
  justify-content: space-between;
}
.el-input-search {
  width: 20vw;
}
</style>
