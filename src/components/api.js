import machines from '../data/machine.json'
const Api = {
    get(url){
        let data
        const split = url.split('/');
        if (url.startsWith('/machine')){
            if(!split[2]) {
                return machines
            } else {
                return machines.filter(m => m['Host Name'] === split[2])[0]
            }

        }
    }
}

export default Api