import { defineStore, storeToRefs } from "pinia";
import { reactive } from "vue";
import { HeaderStyleSystemProp, colorSystem } from "./counterType";

// 自定义样式体系
const rootBgColor = "#e7fbf1";
const colorSystemObj: colorSystem = {
  whiteAnBlackSystem: {
    textColor: "#000",
    backgroundColor: "#fff",
  },
  defaultSystem: {
    textColor: "#fff",
    backgroundColor: rootBgColor,
  },
};

export const headerStyle = defineStore("headerStyleSystem", () => {
  // 定义样式变量
  const headerStyleSystem: HeaderStyleSystemProp = reactive({
    textColor: "#fff",
    backgroundColor: rootBgColor,
  });

  return {
    headerStyleSystem,
  };
});

const changeHeaderStyleSystem: any = {};

Object.keys(colorSystemObj).forEach((key) => {
  changeHeaderStyleSystem[key] = function () {
    changeStyle({
      textColor: colorSystemObj[key].textColor,
      backgroundColor: colorSystemObj[key].backgroundColor,
    });
  };
});

function changeStyle({ textColor, backgroundColor }: HeaderStyleSystemProp) {
  const headerStyleInstance = headerStyle();
  const { headerStyleSystem } = storeToRefs(headerStyleInstance);
  headerStyleSystem.value.textColor = textColor;
  headerStyleSystem.value.backgroundColor = backgroundColor;
}
export { changeHeaderStyleSystem };
