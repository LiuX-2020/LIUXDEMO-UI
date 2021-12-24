<template>
  <div class="hm-form-item">
    <label :style="labelStyle" class="hm-form-item_label">{{ label }}</label>
    <div class="hm-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HmFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-form-item {
  margin-bottom: 22px;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  .hm-form-item_label {
    // display: inline-block;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .hm-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    &::before,
    &::after {
      display: table;
      content: '';
    }
  }
}
</style>
