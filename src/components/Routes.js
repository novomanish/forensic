import SecondaryMenu from './SecondaryMenu.vue'
import PrimaryMenu from './PrimaryMenu.vue'

import MachinesList from './MachinesList.vue'
import Machine from './Machine.vue'
import Summary from './Summary.vue'
import Netstat from './Netstat.vue'
import Services from './Services.vue'
import SoftwareList from './SoftwareList.vue'

export default [
  {path: '*', redirect: 'machine'},
  {
    name:'machine',
    path: '/machine',
    components: {
      default: MachinesList,
      menu: PrimaryMenu
    },
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
      {name: 'summary', path: '', component: Summary},
      {name: 'netstat', path: 'netstat', component: Netstat},
      {name: 'services', path: 'services', component: Services},
      {name: 'softwarelist', path: 'softwarelist', component: SoftwareList},
    ]
  }
]
