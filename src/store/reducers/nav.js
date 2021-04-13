import {DEL_TAGS, SET_TAGS, MATCH_TAGS} from '../action-types'

const defaultStore = {
    tags: [],
    currentTag: ''
}

//eslint-disable-next-line
export default (store = defaultStore, actions) => {
    let newStore = JSON.parse(JSON.stringify(store));
    console.log("actions", actions, store);
    switch (actions.type) {
            // 设置标签
        case SET_TAGS:
            const currentTag = newStore.tags.find(item => item.title === actions.value.title);
            if (!currentTag) {
                newStore.tags.unshift(actions.value);
            }
            newStore.currentTag = actions.value;
            return newStore;
            // 删除标签
        case DEL_TAGS:
            let currentDelTagIndex = newStore.tags.findIndex(item => item.title === actions.value.title);
            if (currentDelTagIndex<=-1) {
                throw new Error('暂无该标签！');
            }
            if(newStore.tags[currentDelTagIndex].title === newStore.currentTag.title) {
                newStore.currentTag = newStore.tags[currentDelTagIndex + 1];
            }
            newStore.tags.splice(currentDelTagIndex, 1);
            return newStore;
            // 匹配标签
        case MATCH_TAGS:
            newStore.currentTag = actions.value;
            return newStore
        default:
            return store
    }
}