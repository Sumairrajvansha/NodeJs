const {readFile , writeFile} = require('fs');
console.log('start'); //TO DEMONSTRATE THE ASYNC NATURE

//ASYNCHRONOUS WORKS WITH CALLBACKS
//RUN CALLBACK WHEN WE ARE DONE
//WE USE ADD EVENT LISTENER
//CALL BACK WILL RUN EVERYTIME WE CLICK ON EVENT


//readFile takes TWO ARGUMENTS PATH AND CALLBACKS
//CALLBACKS TAKES TWO ARGUMENTS ERROR,RESULT
//IF UTF CODING NOT PROVIDED THEN WE GET BUFFER ADD UTF-8 AS SECOND ARGUMENT TO GET NOT BUFFER
readFile('./4 - InBuiltModules/Content/ForFSFirst.txt','utf8',(err, result)=>{
    if(err)
    {
        console.log(error); //if any error
        return; 
    }
    // else{
    //     console.log(result); //if no error
    // }
    const first = result;
    readFile('./4 - InBuiltModules/Content/ForFSSecond.txt','utf8',(err, result) => {
    if(err)
    {
        console.log(error); //if any error
        return; 
    }
    const second = result;  //READ SECOND FILE 
    writeFile('./4 - InBuiltModules/Content/result-async.txt',`Here is the result : ${first},${second}`, (err, result) => {
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(result);   //UNDEFINED
    console.log('Done with this task'); //TO DEMONSTRATE THE ASYNC NATURE
    });
    })
})
console.log('starting next one'); //TO DEMONSTRATE THE ASYNC NATURE

//start
//starting next one
//done with this task


