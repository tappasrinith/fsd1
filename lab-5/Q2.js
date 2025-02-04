
const os = require('os');
const si = require('systeminformation');

setInterval(() => {
  const freeMemory = os.freemem();
  const totalMemory = os.totalmem();
  const usedMemory = totalMemory - freeMemory;
  const freeMemoryPercentage = (freeMemory / totalMemory) * 100;

  console.log(`Current Memory Usage: ${usedMemory / (1024 * 1024 * 1024)} GB`);
  console.log(`Free Memory: ${freeMemory / (1024 * 1024 * 1024)} GB`);
  console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%`);
  console.log('------------------------');
}, 5000);


// const os = require('os');

// function getMemoryInfo() {
//     const totalMemory = os.totalmem() / (1024 * 1024 * 1024); // Convert bytes to GB
//     const freeMemory = os.freemem() / (1024 * 1024 * 1024);   // Convert bytes to GB
//     const usedMemory = totalMemory - freeMemory;
//     const usedMemoryPercent = (usedMemory / totalMemory) * 100;
//     const freeMemoryPercent = 100 - usedMemoryPercent;

//     return { totalMemory, usedMemory, freeMemory, usedMemoryPercent, freeMemoryPercent };
// }

// function displayMemoryInfo() {
//     setInterval(() => {
//         const { totalMemory, usedMemory, freeMemory, usedMemoryPercent, freeMemoryPercent } = getMemoryInfo();
        
//         console.clear();
//         console.log(`Total Memory: ${totalMemory.toFixed(2)} GB`);
//         console.log(`Used Memory: ${usedMemory.toFixed(2)} GB`);
//         console.log(`Free Memory: ${freeMemory.toFixed(2)} GB`);
//         console.log(`Memory Used: ${usedMemoryPercent.toFixed(2)}%`);
//         console.log(`Memory Free: ${freeMemoryPercent.toFixed(2)}%`);
//     }, 5000);  // Update every 5 seconds
// }

// displayMemoryInfo();
