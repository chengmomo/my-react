import {observable, action} from 'mobx';

const HomeStore = observable({
  title: 'this is home page',
  list: []    // 获取首页数据
});
export default HomeStore;
