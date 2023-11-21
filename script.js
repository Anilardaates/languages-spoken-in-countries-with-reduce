const wrapper = document.querySelector('.wrapper')
let butunDiller=countries_data.reduce((acc,ulke)=> acc.concat(ulke.languages),[])


let kacDilKacKere = butunDiller.reduce((acc,dil)=>{
    if(dil in acc){
        acc[dil]++
    }else{
        acc[dil]=1
    }
    return acc
},{})



let diziDil=(Object.entries(kacDilKacKere))
 diziDil.sort((a,b)=> b[1] - a[1])
 let İlkOnDil = diziDil.slice(0,256)
 let toplamUlke=countries_data.length
 İlkOnDil.forEach(dil => {
    const kapsayici=document.createElement('div')
    kapsayici.className='kapsayici'
    const DilAdı=document.createElement('p')
    DilAdı.textContent=dil[0]
    const dilMiktarı = document.createElement('p')
    dilMiktarı.textContent=dil[1]
    const grafik = document.createElement('div')
    grafik.classList ='grafik'
    const oran = document.createElement('div')
    oran.classList.add('oran')
    oran.style.width=`${(dil[1]/toplamUlke)*100}%`
    grafik.append(oran)
    kapsayici.append(DilAdı,grafik,dilMiktarı)
    wrapper.append(kapsayici)
 })