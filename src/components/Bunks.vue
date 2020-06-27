<template>
  <div>
    <h1 style="text-align: left;">床位信息</h1>
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
        >添加新床位信息</el-button
      >
      <el-dialog title="new Product" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="房间号" :label-width="formLabelWidth">
            <el-input v-model="form.room" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="床位数量" :label-width="formLabelWidth">
            <el-input v-model="form.bednum" autocomplete="off"></el-input>
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
        <el-table-column prop="room" label="房间号" width="470">
        </el-table-column>
        <el-table-column prop="bednum" label="床位数量" width="470">
        </el-table-column>
        <el-table-column prop="date" label="更新日期" width="470">
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
          room: 'A-1',
          bednum: '16',
          date: '2020-06-21',
        },
        {
          room: 'A-3',
          bednum: '12',
          date: '2020-06-21',
        },
        {
          room: 'A-5',
          bednum: '10',
          date: '2020-06-21',
        },
        {
          room: 'B-1',
          bednum: '14',
          date: '2020-06-21',
        },
        {
          room: 'B-3',
          bednum: '15',
          date: '2020-06-21',
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
