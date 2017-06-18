/**
 * Created by abhishek on 14/06/17.
 */
'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import base64 from 'base-64'
import samples from '../assets/js/sample-source'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    code: '',
    language: 'C++',
    showCustomInput: 'false',
    customInput: '',
    output: ''
  },
  mutations: {
    toggleCustomInput (state) {
      state.showCustomInput = !state.showCustomInput
    },
    changeLanguage (state, val) {
      state.language = val
    },
    updateCode (state, val) {
      state.code = val
    },
    uploadCode (state,val) {
      state.code = val
    },
    updateOutput (state,val) {
      state.output = val
    },
    resetCode (state) {
      state.code = samples[state.language]
    }
  },
  actions: {
    runCode ({state,commit}) {
      let lang='c'
      switch(state.language){
        case 'C++': lang='cpp'; break
        case 'Javascript': lang='js'; break
        case 'Java': lang='java'; break
        case 'Python': lang='py2'; break
      }

      const config = {
        headers: {
          'Access-Token': '79f3c2f8301fc60565de003f4ac76a1d4e5242cb0836995ec2bd28fd083ce86f'
        }
      }
      return axios.post('https://judge.cb.lk/api/submission',{
              lang,
              source: base64.encode(state.code),
              test_count: 1,
              input: [state.customInput],
              expected_output: [''],
              get_output: true,
              wait: true
            },config)
            .then( ({data})=>{
              const output = data.result == 'compile_error' ? data.error : data.data.testcases[0].output // I know this seems stupid, but i got no choice :(
              console.log(output);
              commit('updateOutput',base64.decode(output))
            })
      }
  }
})
