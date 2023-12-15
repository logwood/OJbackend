<template>
  <div id="exampleView">
    <MdEditor :value="MdValue" :handle-change="onMdChange" />
    <CodeEditor :value="CodeValue" :handle-change="onCodeChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue";
const MdValue = ref();
const CodeValue = ref();
const onMdChange = (v: string) => {
  MdValue.value = v;
};
const onCodeChange = (v: string) => {
  CodeValue.value = v;
};
</script>
