function seq (value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(value)
            resolve();

        },1000)

    });
}

seq("a")
  .then(() => seq("b"))
  .then(() => seq("c"))
  .then(() => seq("d"))
  .then(() => seq("e"));