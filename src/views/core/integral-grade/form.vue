<template>
   <div class="app-container">
     <!-- 输入表单 -->
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
   </div>
</template>

<script>
import integralGradeApi from '@/api/core/integral-grade';

export default {
   data() {
      return {
         // 初始化数据
         integralGrade: {}, 
         // 保存按钮是否禁用，防止表单重复提交
         saveBtnDisabled: false
      }
   },

   methods: {
      saveOrUpdate() {
         // 禁用保存按钮
         this.saveBtnDisabled = true
         this.saveData()
      },
      // 新增数据
      saveData() {
         integralGradeApi.save(this.integralGrade).then(response => {
            this.$message({
               type: 'success',
               message: response.message
            })
            this.$router.push('/core/integral-grade/list')
         })
      }
   }

}
</script>