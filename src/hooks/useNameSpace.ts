const defaultNamespace = "harexs";
const statePrefix = "is-";

//BEM 类名生成
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) cls += `-${blockSuffix}`;
  if (element) cls += `__${element}`;
  if (modifier) cls += `--${modifier}`;
  return cls;
};

// 得到bem规范的样式命名 和 变量生成
export const useNamespace = (block: string) => {
  const b = (blockSuffix = "") =>
    _bem(defaultNamespace, block, blockSuffix, "", "");
  const e = (element: string) => _bem(defaultNamespace, block, "", element, "");
  const m = (modifer: string) => _bem(defaultNamespace, block, "", "", modifer);
  const be = (blockSuffix: string, element: string) =>
    _bem(defaultNamespace, block, blockSuffix, element, "");
  const em = (modifer: string, element: string) =>
    _bem(defaultNamespace, block, "", element, modifer);
  const bm = (blockSuffix: string, modifer: string) =>
    _bem(defaultNamespace, block, blockSuffix, "", modifer);
  const bem = (blockSuffix: string, element: string, modifer: string) =>
    _bem(defaultNamespace, block, blockSuffix, element, modifer);
  // is-xxx
  const is = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length > 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  // --el-xxx
  const cssVar = (object: Record<string, any>) => {
    const styles: Record<string, any> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${defaultNamespace}-${key}`] = object[key];
      }
    }
    return styles;
  };
  // -el-harexs-xxx
  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${defaultNamespace}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  // --el-xxx by Name
  const cssVarName = (name: string) => `--${defaultNamespace}-${name}`;
  const cssVarBlockName = (name: string) =>
    `--${defaultNamespace}-${block}-${name}`;

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
    cssVar,
    cssVarBlock,
    cssVarBlockName,
    cssVarName,
  };
};

// typeof 得到函数的类型描述，ReturnType根据类型描述 得到具体的返回类型
export type NameSpaceType = ReturnType<typeof useNamespace>;
