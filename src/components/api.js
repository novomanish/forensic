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
//          case 'firefox': return clone(require('../data/firefox.json').filter(machineFilter))
        }
      }
    }
  }

}

export default Api
