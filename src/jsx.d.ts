declare namespace JSX {
  // allows to use "noImplicitAny": true in tsconfig.json
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
