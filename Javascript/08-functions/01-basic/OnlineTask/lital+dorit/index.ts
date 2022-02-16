function percentAge(age:number, manOrWoman:string){
    let averageMan:number = 81;
    let averageWoman:number = 84.5;
    if (manOrWoman == 'man'){
        return `your age in percent is ${age/averageMan*100}`
    } else if(manOrWoman == 'woman'){
        return `your age in percent is ${age/averageWoman*100}`
    }
}
    const y = percentAge( 24, 'woman') 
    console.log(y);