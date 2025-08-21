<template>
  <ul class="pagination">
    <li class="page-item"><a class="page-link">&lt;</a></li>
    <!-- 會從 1 ~ 10 出現十次<li> -->
    <li class="page-item" v-for="page in 10">
      <a class="page-link" href="#">{{ page }}</a>
    </li>
    <li class="page-item"><a class="page-link">&gt;</a></li>
  </ul>
</template>

<script setup></script>

<style scoped>
ul {
  margin-bottom: 16px;
}

.pagination {
  display: flex;
  list-style: none;
}

.page-item {
  margin: 0;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.375rem 0.75rem;
  color: #0d6efd;
  text-decoration: none;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  transition: background-color 0.15s, color 0.15s;
}

.page-link:hover {
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>
