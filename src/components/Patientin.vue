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
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" class="addBtn" @click="dialogFormVisible = true"
        >添加新住院患者</el-button
      >
      <el-dialog title="new Product" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="入院日期" :label-width="formLabelWidth">
            <el-input v-model="form.intime" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="病因" :label-width="formLabelWidth">
            <el-input v-model="form.reason" autocomplete="off"></el-input>
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
        <el-table-column prop="name" label="姓名" width="330">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="330"> </el-table-column>
        <el-table-column prop="intime" label="入院日期" width="330">
        </el-table-column>
        <el-table-column prop="reason" label="病因" width="330">
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
            <el-button size="mini" type="info" @click="showDetail(scope.$index)"
              >详情</el-button
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
          name: 'Anni',
          age: '82',
          intime: '2020-01-05',
          reason: '新冠肺炎',
        },
        {
          name: 'Tomca',
          age: '51',
          intime: '2020-04-14',
          reason: '新冠肺炎',
        },
        {
          name: 'Larcy',
          age: '72',
          intime: '2020-04-25',
          reason: '新冠肺炎',
        },
        {
          name: 'Anna',
          age: '42',
          intime: '2020-03-16',
          reason: '新冠肺炎',
        },
        {
          name: 'JackChen',
          age: '34',
          intime: '2020-02-23',
          reason: '食物中毒',
        },
        {
          name: 'LiTao',
          age: '52',
          intime: '2020-01-05',
          outtime: '2020-02-04',
          state: '已康复',
          reason: '新冠肺炎',
        },
        {
          name: 'Tomca',
          age: '51',
          intime: '2020-04-14',
          outtime: '2020-05-02',
          state: '已康复',
          reason: '新冠肺炎',
        },
        {
          name: 'LiNa',
          age: '44',
          intime: '2020-04-25',
          outtime: '2020-05-09',
          state: '已康复',
          reason: '新冠肺炎',
        },
        {
          name: 'JackLiu',
          age: '49',
          intime: '2020-03-16',
          outtime: '2020-04-09',
          state: '已康复',
          reason: '新冠肺炎',
        },
        {
          name: 'Aili',
          age: '22',
          intime: '2020-02-23',
          outtime: '2020-04-09',
          state: '已康复',
          reason: '新冠肺炎',
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
