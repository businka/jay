<template>
  <span>
    {{props.row[col.field]}}
  </span>
</template>
<script>
export default {
  props: ['col', 'props', 'data']
}
</script>
