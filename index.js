import pkgJson from './package.json'
import view from './view'
import action from './action'
import state from './state'
import './img/logo.png'
import './style.less'
import * as components from './component'
import {  registerComponent } from 'maka'

registerComponent('antd', components)

const name = pkgJson.name

export {
    name,
    view,
    state,
    action
}

