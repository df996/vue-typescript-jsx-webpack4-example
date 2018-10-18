import Vue, { VNode } from 'vue'
import {Component} from 'vue-property-decorator'

@Component
export default class App extends Vue {
  public render (): VNode {
    return (
      <div id='app'>
        <router-view></router-view>
      </div>
    )
  }
}
