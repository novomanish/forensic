import machines from '../data/machine.json'
import summary from '../data/summary.json'

const Api = {
    get(url){
        let data
        const split = url.split('/');
        if (url.startsWith('/machine')){
            if(!split[2]) {
                return machines
            } else {
                if(!split[3]){
                  return machines.filter(m => m['Host Name'] === split[2])[0]
                } else {
                  switch(split[3]){
                    case 'summary': return summary
                  }
                }
            }

        }
    }
}

export default Api
