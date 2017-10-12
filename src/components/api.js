import UrlPattern from 'url-pattern'

function clone(obj){
  "use strict";
  return JSON.parse(JSON.stringify(obj));
}
const Api = {
  get(url){

    if((new UrlPattern("/machine")).match(url)) {
      return clone(require('../data/machine.json'))
    }

    {
      let match = (new UrlPattern("/machine/:machineId")).match(url);
      if(match) {
        return clone(require('../data/machine.json').filter(m => m['Host Name'] === match.machineId)[0])
      }
    }

    {
      let match = (new UrlPattern("/machine/:machine/:sub")).match(url)
      if(match) {
        const machineFilter = o => {return o['Hostname'] === match.machine || o['Host Name'] === match.machine}

        switch(match.sub){
          case 'overview': return clone(require('../data/overview.json').filter(machineFilter))
          case 'processlist': return clone(require('../data/processlist.json').filter(machineFilter))
          case 'netstat': return clone(require('../data/netstat.json').filter(machineFilter))
          case 'services': return clone(require('../data/services.json').filter(machineFilter))
          case 'softwarelist': return clone(require('../data/softwarelist.json').filter(machineFilter))
        }
      }
    }

    {
      let match = (new UrlPattern("/machine/:machine/:browser")).match(url)
      if(match) {
        const machineFilter = o => {return o['Hostname'] === match.machine || o['Host Name'] === match.machine}

        switch(match.browser){
          case 'ie': return clone(require('../data/ie.json').filter(machineFilter))
          case 'chrome': return clone(require('../data/chrome.json').filter(machineFilter))
        }
      }
    }

    {
      let match = (new UrlPattern("/machine/:machine/persistence/:type")).match(url)
      if(match) {
        const machineFilter = o => {return o['Hostname'] === match.machine || o['Host Name'] === match.machine}

        switch(match.type){
          case 'startup': return clone(require('../data/registry_startup.json').filter(machineFilter))
          case 'entry': return clone(require('../data/registry_entry.json').filter(machineFilter))
        }
      }
    }

    {
      let match = (new UrlPattern("/machine/:machine/evidence/:type")).match(url)
      if(match) {
        const machineFilter = o => {return o['Hostname'] === match.machine || o['Host Name'] === match.machine || o['Hostname Name'] === match.machine}

        switch(match.type){
          case 'prefetch': return clone(require('../data/prefetch.json').filter(machineFilter))
          case 'shimcache': return clone(require('../data/shimcache.json').filter(machineFilter))
          case 'jumplist': return clone(require('../data/jumplist.json').filter(machineFilter))
        }
      }
    }

  }

}

export default Api
