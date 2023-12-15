<template>
  <div class="code-editor" ref="codeEditorRef" style="min-height: 400px"></div>
  <!-- <a-button @click="fillValue"></a-button>  -->
</template>
<script setup lang="ts">
import * as monaco from "monaco-editor";
import { onMounted, ref, toRaw, withDefaults, defineProps } from "vue";
interface Props {
  value: string;
  handleChange: (v: string) => void;
}
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  handleChange: (v: string) => {
    console.log(v);
  },
});
const codeEditorRef = ref();
const codeEditor = ref();
const fillValue = () => {
  if (!codeEditor.value) {
    return;
  }
  //改变值
  toRaw(codeEditorRef.value).setValue("新的值");
};
onMounted(() => {
  if (!codeEditorRef.value) {
    return;
  }
  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: props.value,
    language: "java",
    automaticLayout: true,
    minimap: {
      enabled: true,
      scale: 5,
    },
    colorDecorators: true,
    //lineNumbers: "off",
    //roundedSelection: false,
    //scrollBeyondLastLine: false,
    readOnly: false,
    theme: "vs-dark",
  });
  codeEditor.value.onDidChangeModelContent(() => {
    props.handleChange(toRaw(codeEditor.value).getValue());
  });
});
</script>

<style scoped>
.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:last-child {
  display: none;
}
</style>
