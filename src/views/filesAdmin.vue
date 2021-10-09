<template>
  <div class="hello">
    <MyHeader isGoBack="1" header_title="文件采集" />
    <el-form ref="form" :model="form" label-width="60px">
      <el-form-item label="事件">
        <el-select
          v-model="form.event"
          placeholder="请选择事件"
          style="width: 270px"
        >
          <el-option
            v-for="(item, index) in eventList"
            :key="index"
            :label="item.title"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";

export default {
  name: "filesAdmin",
  components: {
    MyHeader,
  },
  data() {
    return {
      eventList: [],
      filesList: [],
      form: {
        event: "",
      },
    };
  },
  methods: {
    getFilesList() {
      let req = {
        eventId: this.form.event,
        classId: JSON.parse(sessionStorage.getItem("teacherInfo")).classId,
      };
      this.$axios.post("/teacher/files/getFilesList",req).then((res) => {
        if (res.data.rspCode === "0000") {
          this.filesList = res.data.rspData;
        } else {
        }
      });
    },
    getEventList() {
      this.$axios.post("/event/selectEventList").then((res) => {
        if (res.data.rspCode === "0000") {
          this.eventList = res.data.rspData;
        } else {
        }
      });
    },
  },
  created: function(){
      this.getEventList();
  },
  watch:{
      'form.event':function(){
          this.filesList=[];
          this.getFilesList();
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
