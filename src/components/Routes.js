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
import WIP from './WIP.vue'

import Browser from './Browser.vue'
import Ie from './Ie.vue'
import Chrome from './Chrome.vue'
import Firefox from './Firefox.vue'

import Persistence from './Persistence.vue'
import RegistryStartup from './RegistryStartup.vue'
import RegistryEntry from './RegistryEntry.vue'

import Evidence from './Evidence.vue'
import Prefetch from './Prefetch.vue'
import ShimCache from './ShimCache.vue'
import JumpList from './JumpList.vue'

import Lateral from './Lateral.vue'

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
      default:route => ({ machine: route.params.machine, details: route.query.details})
    },
    children: [
      {path: '', redirect:'summary'},
      {path: 'summary', component: Summary, props:true, children: [
        {path: '', redirect: 'overview'},
        {name: 'overview', path: 'overview', component: Overview, props:true},
        {name: 'processlist', path: 'processlist', component: ProcessList,
          props: route => ({ machine: route.params.machine, ProcessId: route.query.ProcessId, Threat: route.query.Threat})
        },
        {name: 'netstat', path: 'netstat', component: Netstat,
          props: route => ({ machine: route.params.machine, Threat: route.query.Threat})
        },
        {name: 'services', path: 'services', component: Services, props:true},
        {name: 'softwarelist', path: 'softwarelist', component: SoftwareList, props:true},
      ]},
      {path: 'browser', component: Browser, props:true, children: [
        {path: '', redirect: 'ie'},
        {name: 'ie', path: 'ie', component: Ie, props:true},
        {name: 'chrome', path: 'chrome', component: Chrome, props:true},
        {name: 'firefox', path: 'firefox', component: Firefox, props:true},
      ]},
      {path: 'persistence', component: Persistence, props:true, children: [
        {path: '', redirect: 'startup'},
        {name: 'startup', path: 'startup', component: RegistryStartup, props:true},
        {name: 'entry', path: 'entry', component: RegistryEntry, props:true},
        {path: 'wip', component: WIP, props:true},
      ]},
      {path: 'evidence', component: Evidence, props:true, children: [
        {path: '', redirect: 'wip'},
        {name: 'prefetch', path: 'prefetch', component: Prefetch, props:true},
        {name: 'shimcache', path: 'shimcache', component: ShimCache, props:true},
        {name: 'jumplist', path: 'jumplist', component: JumpList, props:true},
        {path: 'wip', component: WIP, props:true},
      ]},
      {path: 'lateral', component: Lateral, props:true, children: [
        {path: '', redirect: 'wip'},
        {name: 'rdp', path: 'rdp', component: WIP, props:true},
        {name: 'runmru', path: 'runmru', component: WIP, props:true},
      ]},
    ]
  }
]
