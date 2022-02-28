import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'
// codemirror language
import 'codemirror/mode/vue/vue.js'
import 'codemirror/mode/sql/sql.js'
// codemirror active-line.js
import 'codemirror/addon/selection/active-line.js'
// more codemirror resource...

Vue.use(VueCodemirror)