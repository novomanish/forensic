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
        switch(match.sub){
          case 'summary': return clone(require('../data/summary.json'))
          case 'processlist': return clone(require('../data/processlist.json'))
          case 'netstat': return clone(require('../data/netstat.json'))
          case 'services': return clone(require('../data/services.json'))
          case 'softwarelist': return clone(require('../data/softwarelist.json'))
          case 'summary': return clone(require('../data/summary.json'))
          case 'summary': return clone(require('../data/summary.json'))
        }
      }
    }
  }

}

export default Api
