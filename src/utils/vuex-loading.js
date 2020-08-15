// 设置命名空间
const NAMESPACED = 'myLoading';

// 高阶函数写法创建插件
const createLoadingPlugin = ({ namespaced = NAMESPACED } = {}) => (store) => {
  if (store.state[namespaced]) {
    throw new Error('createLoadingPlugin is exited');
  }
  // 注册子模块
  store.registerModule(namespaced, {
    namespaced: true,
    state: {
      effect: {},
    },
    mutations: {
      show(state, payload) {
        state.effect = {
          ...state.effect,
          [payload]: true,
        };
      },
      hide(state, payload) {
        state.effect = {
          ...state.effect,
          [payload]: false,
        };
      },
    },
  });

  store.subscribeAction({
    before: (action, state) => {
      console.log(`before action ${action.type}`);
      store.commit(`${namespaced}/show`, action.type);
    },
    after: (action, state) => {
      console.log(`after action ${action.type}`);
      store.commit(`${namespaced}/hide`, action.type);
    },
  });
};

export default createLoadingPlugin;
