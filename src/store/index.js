//#1
import Vue from 'vue'
import Vuex from 'vuex';

//#2
Vue.use(Vuex);

//#3
export var store = new Vuex.Store({
  //상태 & 공유되는 데이터 & data 속성
  state : {
    todoItems : []
  },
  //상태(state)를 변경하는 매서드(methods)
  //그래서 state가 첫 번째 인자로 넘어온다.
  mutations : {
      removeTodo(state, paramObj) {
        localStorage.removeItem(paramObj.todoItem);
        state.todoItems.splice(paramObj.index, 1);
      },
      clearAll(state) {
        localStorage.clear();
        state.todoItems = [];
      },
      addTodo(state,todoItem) {
        localStorage.setItem(todoItem, todoItem);
        state.todoItems.push(todoItem);
      },
  },
  
});