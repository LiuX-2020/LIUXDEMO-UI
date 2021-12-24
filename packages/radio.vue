<template>
  <label class="hm-radio is-checke" :class="{ 'is-checked': label == value }">
    <span class="hm-radio_input">
      <span class="hm-radio_inner"></span>
      <input :value="label" type="radio" class="hm-radio_original" v-model="model" />
    </span>

    <span class="hm-radio_label">
      <!-- 插槽没有内容就显示 label -->
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HmRadio',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  watch: {},
  data() {
    return {}
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(value) {
        // 触发父组件的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup() {
      return !!this.RadioGroup
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.hm-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: nhm;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: nhm;
  -webkit-user-select: nhm;
  -moz-user-select: nhm;
  .hm-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: nhm;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .hm-radio_original {
      opacity: 0;
      outline: nhm;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hm-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.hm-radio.is-checked {
  .hm-radio_input {
    .hm-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .hm-radio_label {
    color: #409eff;
  }
}
</style>
