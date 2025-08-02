<template>
  <div class="js-open-close-window-button">
    <button class="open-document-button" @click="openDocument">開新文件</button>
    <button class="close-window-button" @click="closeWindow">關閉目前視窗</button>
  </div>
</template>

<script setup>
function openDocument() {
  const newWin = window.open('', 'newWin');

  if (newWin) {
    newWin.document.open('text/html');
    newWin.document.write('這是新的HTML文件');
    newWin.document.close();
  } else {
    alert('彈出窗口被阻擋，請允許彈出窗口後重新操作');
  };
};

function closeWindow() {
  window.close();
};
</script>

<style scoped>
.js-open-close-window-button {
  display: flex;
  gap: 5px;
}

.open-document-button {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #0d6efd;
  background-color: #ffffff;
  border: 1px solid #0d6efd;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out;
    border-color: 0.15s ease-in-out;
}

.open-document-button:hover {
  color: #ffffff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.close-window-button {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #dc3545;
  background-color: #ffffff;
  border: 1px solid #dc3545;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out;
    border-color: 0.15s ease-in-out;
}

.close-window-button:hover {
  color: #ffffff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
