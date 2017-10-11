import SecondaryMenu from './SecondaryMenu.vue'
import PrimaryMenu from './PrimaryMenu.vue'

import MachinesList from './MachinesList.vue'
import Machine from './Machine.vue'
import Summary from './Summary.vue'
import Overview from './Overview.vue'
import Netstat from './Netstat.vue'
import Services from './Services.vue'
import ProcessList from './ProcessList.vue'
import SoftwareList from './SoftwareList.vue'

import Browser from './Browser.vue'
import Ie from './Ie.vue'
import Chrome from './Chrome.vue'
import Firefox from './Firefox.vue'


export default [
  {path: '', redirect: 'machine'},
  {
    name:'machine',
    path: '/machine',
    components: {
      default: MachinesList,
      menu: PrimaryMenu
    },
  },
  {
    name:'wip',
    path: '/wip',
  },
  {
    path: '/machine/:machine',
    components: {
      default: Machine,
      menu: SecondaryMenu
    },
    props: {
      default:true
    },
    children: [
      {path: '', redirect:'summary'},
      {path: 'summary', component: Summary, props:true, children: [
        {path: '', redirect: 'overview'},
        {name: 'overview', path: 'overview', component: Overview, props:true},
        {name: 'processlist', path: 'processlist', component: ProcessList, props:true},
        {name: 'netstat', path: 'netstat', component: Netstat, props:true},
        {name: 'services', path: 'services', component: Services, props:true},
        {name: 'softwarelist', path: 'softwarelist', component: SoftwareList, props:true},
      ]},
      {path: 'browser', component: Browser, props:true, children: [
        {path: '', redirect: 'ie'},
        {name: 'ie', path: 'ie', component: Ie, props:true},
        {name: 'chrome', path: 'chrome', component: Chrome, props:true},
        {name: 'firefox', path: 'firefox', component: Firefox, props:true},
      ]},
    ]
  }
]
