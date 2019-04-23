import token from '@/api/token';
import { Component, Vue } from 'vue-property-decorator';

interface ISR {
  baseAddress?: string;
  sasToken?: string;
}

@Component({})
// you can declare a mixin as the same style as components.
export default class MyMixin extends Vue {
  private staticResource: ISR = token.staticResource;

  private beforeCreate(): void {
    let newTime: number = new Date().getTime();
    if (newTime > token.timeStramp + 3600 * 1000 * 2) {
      token.Login();
    }
  }
  // 拼接静态资源字符串
  public jointStr(str: string): string {
    if (!str) {
      return '';
    }
    return `${this.staticResource.baseAddress}/${encodeURI(str)}?${this.staticResource.sasToken}`;
  }
}
