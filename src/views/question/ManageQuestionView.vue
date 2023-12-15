<template>
  <a-table
    :ref="tableRef"
    :columns="columns"
    :data="dataList"
    :pagination="{
      showTotal: true,
      pageSize: searchParams.pageSize,
      current: searchParams.current,
      total: total,
    }"
    @page-change="onPageChange"
  >
    <template #optional="{ record }">
      <a-space>
        <a-button type="primary" @click="doUpdate(record)">修改</a-button>
        <a-button status="danger" @click="doDelete(record)">删除</a-button>
      </a-space>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import message from "@arco-design/web-vue/es/message";
import { QuestionControllerService, Question } from "../../../generated";
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
  loadData();
};
const tableRef = ref();
const dataList = ref([]);
watchEffect(() => {
  console.log(dataList.value);
});
const searchParams = ref({
  pageSize: 1,
  current: 1,
});
const total = ref(0);
const loadData = async () => {
  const res = await QuestionControllerService.listQuestionByPageUsingPost(
    searchParams.value
  );
  if (res.code === 0) {
    dataList.value = res.data.records;
    total.value = res.data.total;
  } else {
    message.error("获取数据失败" + res.message);
  }
};
const doDelete = async (question: Question) => {
  const res = await QuestionControllerService.deleteQuestionUsingPost({
    id: question.id,
  });
  if (res.code === 0) {
    message.success("删除成功");
    loadData();
  } else {
    message.error("删除失败" + res.message);
  }
};
const router = useRouter();
const doUpdate = async (question: Question) => {
  console.log(question);
  //更新数据
  router.push({
    path: "/update/question",
    query: {
      id: question.id,
    },
  });
};
onMounted(() => {
  loadData();
  console.log(tableRef);
});
const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "内容",
    dataIndex: "content",
  },
  {
    title: "标签",
    dataIndex: "tags",
  },
  {
    title: "答案",
    dataIndex: "answer",
  },
  {
    title: "提交数",
    dataIndex: "submitNum",
  },
  {
    title: "AC数",
    dataIndex: "acceptNum",
  },
  {
    title: "用户id",
    dataIndex: "userId",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "判题配置",
    dataIndex: "judgeConfig",
  },
  {
    title: "判题用例",
    dataIndex: "judegCase",
  },
  {
    title: "用户id",
    dataIndex: "userId",
  },
  {
    title: "Optical",
    slotName: "optional",
  },
];
</script>
