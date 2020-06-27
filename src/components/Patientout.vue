<template>
  <div>
    <h1 style="text-align: left;">病人入院信息</h1>
    <br />
    <div class="above">
      <el-input
        placeholder="请输入内容"
        v-model="searchData"
        class="el-input-search"
      >
      </el-input>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="name" label="姓名" width="280">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="280"> </el-table-column>
        <el-table-column prop="intime" label="入院日期" width="280">
        </el-table-column>
        <el-table-column prop="outtime" label="出院日期" width="280">
        </el-table-column>
        <el-table-column prop="state" label="康复情况" width="280">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
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
          name: 'LiTao',
          age: '52',
          intime: '2020-01-05',
          outtime: '2020-02-04',
          state: '已康复',
        },
        {
          name: 'Tomca',
          age: '51',
          intime: '2020-04-14',
          outtime: '2020-05-02',
          state: '已康复',
        },
        {
          name: 'LiNa',
          age: '44',
          intime: '2020-04-25',
          outtime: '2020-05-09',
          state: '已康复',
        },
        {
          name: 'JackLiu',
          age: '49',
          intime: '2020-03-16',
          outtime: '2020-04-09',
          state: '已康复',
        },
        {
          name: 'Aili',
          age: '22',
          intime: '2020-02-23',
          outtime: '2020-04-09',
          state: '已康复',
        },
      ],
      searchData: '',
      dialogFormVisible: false,
      form: {
        name: '',
        age: '',
        intime: '',
        outime: '',
        state: '',
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
