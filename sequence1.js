function seq(letter) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(letter);
        resolve();
      },1000);
    });
  }
  
  async function printSeq() {
    await seq('a');
    await seq('b');
    await seq('c');
    await seq('d');
    await seq('e');
  }
  
  printSeq();
  