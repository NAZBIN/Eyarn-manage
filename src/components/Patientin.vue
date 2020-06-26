<template>
  <div>
    <h1 style="text-align: left;">Products</h1>
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
        >create Product</el-button
      >
      <el-dialog title="new Product" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Product Name" :label-width="formLabelWidth">
            <el-input v-model="form.product" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Develop Name" :label-width="formLabelWidth">
            <el-input v-model="form.developer" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Release Name" :label-width="formLabelWidth">
            <el-input v-model="form.release" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Owner" :label-width="formLabelWidth">
            <el-input v-model="form.owner" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Features" :label-width="formLabelWidth">
            <el-input v-model="form.features" autocomplete="off"></el-input>
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
        <el-table-column prop="product" label="Product Name" width="280">
        </el-table-column>
        <el-table-column prop="developer" label="Develop Name" width="280">
        </el-table-column>
        <el-table-column prop="release" label="Release Name" width="280">
        </el-table-column>
        <el-table-column prop="owner" label="Owner" width="280">
        </el-table-column>
        <el-table-column prop="features" label="Features" width="280">
        </el-table-column>
        <el-table-column label="Operations">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >delete</el-button
            >
            <el-button size="mini" type="info" @click="showDetail(scope.$index)"
              >detail</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {getProductsForm} from '../api/home';
export default {
  name: 'Products',
  data() {
    return {
      tableData: [],
      searchData: '',
      dialogFormVisible: false,
      form: {
        product: '',
        developer: '',
        release: '',
        owner: '',
        features: '',
      },
    };
  },
  created() {
    //test datas.
    this.fetchData();
  },
  methods: {
    fetchData() {
      for (let i = 0; i < 20; i++) {
        getProductsForm().then(res => {
          this.tableData.push(res);
        });
      }
    },
    showDetail(index) {
      const vm = this;
      vm.$router.push({name: 'detail', params: {id: index}});
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
