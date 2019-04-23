import { getToken } from '@/api/index';

export default {
  staticResource: {},
  timeStramp: 0,
  Login(): any {
    return getToken()
      .then((res: any) => {
        this.initData(res.data);
        return true;
      })
      .catch(() => {
        this.initData({
          baseAddress:
            'https://fitnessresourcetest.blob.core.chinacloudapi.cn/resource',
          sasToken:
            'sig=2dBssvEiPJHcyrdAslinhdnlgi9QA7SY%2F1N0el42lrI%3D&se=2018-09-17T05%3A17%3A44Z&sv=2017-07-29&sp=r&sr=c',
          expireTime: '1537161464815'
        });
        return true;
      });
  },
  initData(data: any): void {
    this.staticResource = data;
    this.timeStramp = new Date().getTime();
  },
  getData(): any {
    return this.staticResource;
  }
};
