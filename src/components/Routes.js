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
        {name: 'overview', path: 'overview', component: Overview},
        {name: 'processlist', path: 'processlist', component: ProcessList},
        {name: 'netstat', path: 'netstat', component: Netstat},
        {name: 'services', path: 'services', component: Services},
        {name: 'softwarelist', path: 'softwarelist', component: SoftwareList},
      ]},
    ]
  }
]
