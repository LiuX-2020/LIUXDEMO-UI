import Vue from 'vue'
// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import HmButton from './button.vue'
import HmDialog from './dialog.vue'
import HmInput from './input.vue'
import HmSwitch from './switch.vue'
import HmRadio from './radio.vue'
import HmRadioGroup from './radio-group.vue'
import HmCheckbox from './checkbox.vue'
import HmCheckboxGroup from './checkbox-group.vue'
import HmForm from './form.vue'
import HmFormItem from './form-item.vue'

const components = [
  HmButton,
  HmDialog,
  HmInput,
  HmSwitch,
  HmRadio,
  HmRadioGroup,
  HmCheckbox,
  HmCheckboxGroup,
  HmForm,
  HmFormItem
]
// 定义install方法
const install = function (vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出install方法
export default {
  install
}
