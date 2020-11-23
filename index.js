// constanta
const name="choirul"
const family = ["erna", "daffa", "diva"]
const rumah_japar = {
    dusun: 'tarudan',
    desa: 'bangunharjo',
    kec: 'sewon'
}

console.log('Namaku:', name)
console.log('Istriku:', family[0])
console.log('Dusun rumah japar:', rumah_japar.dusun)

// variabel
let toko = 'wandana'
toko = 'bungadiva'

console.log('nama toko:', toko)

// arrow function
//tanpa parameter
const hello = () => {
    return 'helloworld!'
}
console.log(hello())

//1 parameter
const helloName = (name) => {
    return `hello ${name}`
    // return 'hello ' + name
}
console.log(helloName('choirul'))

//2 parameter
const helloWife = (name, wife) => {
    return `hello guys, namaku ${name} dan ini istriku ${wife}`
    // return 'hello ' + name
}
console.log(helloWife('choirul', 'erna'))

//1 parameter return object
const helloRumah = (nama, alamat) => {
    return {
        name: nama,
        desa: alamat.desa
    }
}
console.log(helloRumah('choirul', rumah_japar))

//1 parameter return array
const helloFamily = (nama, keluarga) => {
    return {
        name: nama,
        wife: keluarga[0],
        son: keluarga[1],
        daughter: keluarga[2],
    }
}
console.log(helloFamily('choirul', family))

// rest operator = membuat parameter input menjadi array
const angka = (...angka) => {
    return angka
}
console.log(angka(1,4,2,6,8,3,7,5))

const sorting = (...angka) => {
    return angka.sort()
}
console.log('setelah disort', sorting(1,4,2,6,8,3,7,5))

// spread operator = mengcopy object atau array dan memanipulasinya
const cpRumahJapar = {...rumah_japar, kab:'Bantul', nama:'Rumah japar'}
console.log(cpRumahJapar)

const cpFamily = [...family, 'davi']
console.log(cpFamily)

// destructuring = memmecah object atau array ke dalam single variabel
const {dusun, nama} = cpRumahJapar
console.log(nama, 'ada di', dusun)

const [istriku, anakku] = cpFamily
console.log(istriku, 'dan', anakku, 'forever')

//class example
class Car {
    constructor(brand) {
        this.brand = brand
    }

    // method biasa
    present = () => {
        return `Mobil saya adalah ${this.brand}`
    }

    // static method
    static mine = (brand) => {
        return `Mobil saya adalah ${brand}`
    }
}
myCar = new Car('avanza')
console.log(myCar.present())
console.log(Car.mine('HRV'), '(static)')

// inheritance sample
class CarSport extends Car {
    gardan = () => {
        return `Mobil ${this.brand} punya dobel gardan (4x4)`
    }
}
mySuv = new CarSport('Pajero')
console.log(mySuv.present(), '(inheritance)')
console.log(mySuv.gardan(), '(inheritance method)')

// callback function (pengolahan data asynchronous dengan waktu delay)
const callData = callback => {
    setTimeout(() => {
        const data = 'choirul'
        callback(data)
    }, 1000)
}
callData(name => console.log(`nama saya adalah ${name}`, '(callback)'))

//chaining callback
const callData2 = (firstname, callback) => {
    setTimeout(() => {
        const data = `${firstname} ihwan`
        callback(data)
    }, 1000)
}
callData(name => callData2(name, result => console.log(`nama saya adalah ${result}`, '(callback chaining)')))

// promise (pengolahan data asynchronous dengan kemampuan chaining)
const firstName = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = 'choirul'
            resolve(data)
        }, 1000)
    })
}

const lastName = (name) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = `${name} ihwan`
            resolve(data)
        }, 1000)
    })
}

firstName().then(data => lastName(data)).then(result => console.log(result, '(Promise)'))

// async await (pengolahan data asynchronous dengan membuatnya sbg async)
const firstName1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = 'choirul'
            resolve(data)
        }, 1000)
    })
}

const lastName1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = `ihwan`
            resolve(data) 
        }, 1000)
    })
}

const resultName = async() => {
    const first = await firstName1()
    const last = await lastName1()
    return `${first} ${last}`
}

resultName().then(result => console.log(result, '(async await)'))

// async and fetch
const fetch = require('node-fetch')

const callApi = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return data.json()
}

callApi().then(result => console.log(result))