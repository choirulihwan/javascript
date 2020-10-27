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
