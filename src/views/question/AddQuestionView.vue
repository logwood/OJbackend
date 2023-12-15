<template>
  <div id="addQuestionView">
    <h2>创建题目</h2>
    <a-form :model="form">
      <a-form-item field="title" label="标题">
        <a-input v-model="form.title" placeholder="请输入标题" />
      </a-form-item>
      <a-form-item field="tags" label="标签">
        <a-input-tag v-model="form.tags" placeholder="请选择标签" />
      </a-form-item>
      <a-form-item field="answer" label="答案">
        <MdEditor :value="form.answer" :handle-change="onMdChange1" />
      </a-form-item>
      <a-form-item field="content" label="内容">
        <MdEditor :value="form.content" :handle-change="onMdChange2" />
      </a-form-item>
      <a-form-item
        label="判题配置"
        :content-flex="false"
        :merge-props="false"
        extra=""
      >
        <a-space direction="vertical" fill>
          <a-form-item
            field="judgeConfig.timeLimit"
            label="时间限制"
            style="min-width: 400px"
          >
            <a-input-number
              v-model="form.judgeConfig.timeLimit"
              placeholder="请输入时间限制"
              mode="button"
              size="large"
              class="input-demo"
              min="0"
            />
          </a-form-item>
          <a-form-item field="judgeConfig.stackLimit" label="堆栈限制">
            <a-input-number
              v-model="form.judgeConfig.stackLimit"
              placeholder="请输入堆栈限制"
              mode="button"
              size="large"
              class="input-demo"
              min="0"
            />
          </a-form-item>
          <a-form-item field="judgeConfig.memoryLimit" label="内存限制">
            <a-input-number
              v-model="form.judgeConfig.memoryLimit"
              placeholder="请输入内存限制"
              mode="button"
              size="large"
              class="input-demo"
              min="0"
            />
          </a-form-item>
        </a-space>
      </a-form-item>
      <a-form-item
        label="测试用例配置"
        :content-flex="false"
        :merge-props="false"
      >
        <a-form-item
          v-for="(judegCaseItem, index) of form.judegCase"
          :label="`测试样例-${index}`"
          :key="index"
        >
          <a-space direction="vertical" style="min-width: 480px">
            <a-form-item
              :label="`输入用例-${index}`"
              :key="index"
              :field="`form.judegCase[$(index)].input`"
            >
              <a-input
                v-model="judegCaseItem.input"
                placeholder="请输入测试输入用例"
              />
            </a-form-item>
            <a-form-item
              :label="`输出用例-${index}`"
              :key="index"
              :field="`form.judegCase[$(index)].output`"
            >
              <a-input
                v-model="judegCaseItem.output"
                placeholder="请输入测试输出用例"
              />
            </a-form-item>

            <a-button
              status="danger"
              @click="handleDelete(index)"
              :style="{ marginLeft: '10px' }"
              >Delete</a-button
            >
          </a-space>
        </a-form-item>
        <div style="margin-top: 32px">
          <a-button @click="handleAdd" type="outline" status="success"
            >新增测试用例</a-button
          >
        </div>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="width: 120px"
          @click="doSubmit"
        >
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import { QuestionControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
const form = reactive({
  answer: "",
  content: "",
  isDelete: 0,
  judegCase: [
    {
      input: "",
      output: "",
    },
  ],
  judgeConfig: {
    memoryLimit: 1000,
    stackLimit: 1000,
    timeLimit: 1000,
  },
  tags: [],
  title: "",
});
const handleAdd = () => {
  form.judegCase.push({
    input: "",
    output: "",
  });
};

const doSubmit = async () => {
  console.log(form);
  const res = await QuestionControllerService.addQuestionUsingPost(form);
  if (res.code === 0) {
    message.success("添加成功");
  } else {
    message.error("添加失败" + res.message);
  }
};
const handleDelete = (index: number) => {
  form.judegCase.splice(index, 1);
};

const onMdChange1 = (v: string) => {
  form.answer = v;
};
const onMdChange2 = (v: string) => {
  form.content = v;
};
</script>
