<template>
  <div id="viewQuestionView">
    <a-row :gutter="[24, 24]">
      <a-col :md="12" :xs="24">
        <a-tabs default-active-key="2">
          <a-tab-pane key="question" title="题目">
            <a-card v-if="question" :title="question.title">
              <MdViewer :value="question.content || ''" />
            </a-card>
          </a-tab-pane>
          <a-tab-pane key="comment" title="评论" disabled>
            Content of Tab Panel 2
          </a-tab-pane>
          <a-tab-pane key="answer" title="答案"> 暂无答案 </a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :md="12">
        <CodeEditor />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import message from "@arco-design/web-vue/es/message";
import {
  QuestionControllerService,
  Question,
  QuestionVO,
} from "../../../generated";
import { onMounted, ref, withDefaults, defineProps } from "vue";
import { useRouter } from "vue-router";
import CodeEditor from "@/components/CodeEditor.vue";
import MdViewer from "@/components/MdViewer.vue";
const router = useRouter();

// 在组件加载时获取路由参数
const id = router.currentRoute.value.params.id;

const question = ref<QuestionVO>();
const loadData = async () => {
  console.log("id", id);
  const res = await QuestionControllerService.getQuestionVoByIdUsingGet(
    id as any
  );
  if (res.code === 0) {
    question.value = res.data;
  } else {
    message.error("获取数据失败" + res.message);
  }
};
onMounted(() => {
  loadData();
});
</script>
<style scoped>
#viewQuestionView {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
