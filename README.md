TypeScript Function Parameters Different Length Demo
===================================================

如何在typescript定义一个函数，它有两种调用方式，一种只有一个参数，另一种有两个参数（且第一个参数类型与第一种不同）

在这个Demo中的实现函数：

```
function visit(...params: any): void
```

中，使用了`...params: any`，虽然可用，但是实际上失去了类型安全，但是也没有找到更好的做法。

https://stackoverflow.com/questions/56232992/how-to-define-param-names-and-types-for-a-function-which-accepts-1-parameter-or

```
npm install
npm run demo
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

