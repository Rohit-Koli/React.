let weatherCondition=["Sunny","Rainy","Cloudy"]
console.log(weatherCondition[0])
console.log(weatherCondition[1])
console.log(weatherCondition[2])

function print(){
    weatherCondition.map((k)=>(
        console.log(k)
    ))
}