interface Func {
  (): void;
}
type defaultColorSystem = {
  whiteAnBlackSystem: Func;
  defaultSystem: Func;
};
type HeaderStyleSystemProp = {
  textColor: string;
  backgroundColor: string;
};
interface getHeaderStyleSystem {
  (): HeaderStyleSystemProp;
}
type headerStyleSystemReturn = {
  colorSystem: colorSystem;
  headerStyleSystem: HeaderStyleSystemProp;
};
type colorSystem = {
  [index: string]: any;
  whiteAnBlackSystem: HeaderStyleSystemProp;
  defaultSystem: HeaderStyleSystemProp;
};

export {
  Func,
  colorSystem,
  headerStyleSystemReturn,
  getHeaderStyleSystem,
  HeaderStyleSystemProp,
  defaultColorSystem,
};
