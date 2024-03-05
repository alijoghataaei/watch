const degVar = ["--hourDeg", "--minuteDeg", "--secondDeg"]
const elements = Array.from(document.querySelector(".watch").children)
const maxDegree = [359.5 , 359.9 , 354]

let counter360Array = [0,0,0];

let num = 354;

function time(){
    const exactTime = (new Date).toLocaleTimeString("fr").split(":")
    
    const exactDegree = [(exactTime[0] % 12 *30) + (exactTime[1] * 0.5), (exactTime[1]*6) + (exactTime[2] * 0.1), exactTime[2] *6]
    
    
    for(let i=0  ; i < elements.length ; i++ ){
       if(exactDegree[i] === maxDegree[i]){
            const x = exactDegree[i] + (counter360Array[i] * 360)
            document.documentElement.style.setProperty(degVar[i], x+"deg");
            // setTimeout(()=>{
            //     // برای ایکه از 354 به -6 نپرد ما ترنزیشن را نان کردیم
            //     elements[i].style.transition = "none"
            //     const floorNum = (Math.floor((maxDegree[i]*10)-3600))/10
            //     document.documentElement.style.setProperty(degVar[i], floorNum+"deg");
            //     console.log(floorNum)
            // },990) // بعد 999 میلی ثانیه 
            counter360Array[i]++

        }else{
            const x = exactDegree[i] + (counter360Array[i] * 360)
            document.documentElement.style.setProperty(degVar[i], x+"deg");
            console.log(x)
        }
        
    }  
    console.log(counter360Array)
    run()
}

function run(){
    const timeout = setTimeout(() => {
        clearTimeout(timeout)
        time()
    }, 1000);
}

time()

