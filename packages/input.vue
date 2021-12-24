<template>
  <div class="hm-input" :class="{ 'hm-input_inner': showSuffix }">
    <input
      class="hm-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :value="value"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      @input="handlerInput"
    />

    <span class="hm-input_suffix">
      <i class="hm-input_icon hm-icon-cancel" v-if="clearable && value" @click="clear"></i>
      <i
        class="hm-input_icon hm-icon-visible"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HmInput',
  comphmnts: {},
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 显示是否显示密码框
      passwordVisible: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handlerInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-input {
  // width: 100%;
  width: 200px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hm-input_inner {
    -webkit-appearance: nhm;
    background-color: #fff;
    background-image: nhm;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: nhm;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: nhm;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .hm-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
  .hm-input_inner {
    padding-right: 30px;
  }
}
</style>
