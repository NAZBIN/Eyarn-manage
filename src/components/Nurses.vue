<template>
  <div>
    <h1 style="text-align: left;">医护信息</h1>
    <br />
    <div class="above">
      <el-input
        placeholder="请输入内容"
        v-model="searchData"
        class="el-input-search"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" class="addBtn" @click="dialogFormVisible = true"
        >添加新员工</el-button
      >
      <el-dialog title="new Product" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="职称" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="name" label="姓名" width="350">
        </el-table-column>
        <el-table-column prop="age" label="姓名" width="350"> </el-table-column>
        <el-table-column prop="title" label="职称" width="350">
        </el-table-column>
        <el-table-column prop="date" label="入职时间" width="350">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="warn"
              @click="handleDelete(scope.$index, scope.row)"
              >更新</el-button
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
          name: '李林',
          age: '29',
          date: '2014-02-21',
          title: '护士',
        },
        {
          name: '张艳红',
          age: '24',
          date: '2018-05-24',
          title: '护士',
        },
        {
          name: '陈涛',
          age: '33',
          date: '2016-03-14',
          title: '主治医生',
        },
        {
          name: '李志艳',
          age: '23',
          date: '2012-05-04',
          title: '主治医生',
        },
      ],
      searchData: '',
      dialogFormVisible: false,
      form: {
        room: '',
        bednum: '',
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
