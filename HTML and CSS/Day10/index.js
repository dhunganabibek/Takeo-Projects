const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
  
      const p2 = new Promise((res, rej) => {
  
        setTimeout(() => {
  
          res("inner data resolved");
  
        });
  
        resolve(p2);
  
      });
  
    }, 2000);
  
    setTimeout(() => {
  
      reject("Promise is rejected");
  
    }, 3000);
  
  });

p1.then(data => data)).then((result)=> console.log(result));