import Vue, { VNode } from 'vue';
import {Component} from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  private helloWorld: string = 'Hello World'

  public render (): VNode {
    return (
      <div>{this.helloWorld}</div>
    )
  }
}
