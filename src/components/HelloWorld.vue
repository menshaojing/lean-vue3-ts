<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>
  <el-row>
    <p>
      图标演示
  </p>
     
    <el-col :span="12" :offset="0">

  <el-icon :size="20">
      <i-mdi-account-box style="font-size: 2em; color: red"/>
  </el-icon>
  <el-icon :size="20">
    <i-ep-avatar style="font-size: 2em; color: red"/>
  </el-icon>
    </el-col>

    <el-col :span="24" :offset="0">
      自定义图标
    <el-icon :size="20">
    <i-my-incns-star style="font-size: 2em; color: red"/>
  </el-icon>
    </el-col>
   

  
  </el-row>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
