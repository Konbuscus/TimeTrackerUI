const activeWin = require('active-win');

    setTimeout(function(){
        (async () => {
        
            console.log(await activeWin());
        
            /*
            {
                title: 'Unicorns - Google Search',
                id: 5762,
                bounds: {
                    x: 0,
                    y: 0,
                    height: 900,
                    width: 1440
                },
                owner: {
                    name: 'Google Chrome',
                    processId: 310,
                    bundleId: 'com.google.Chrome',
                    path: '/Applications/Google Chrome.app'
                },
                memoryUsage: 11015432
            }
            */
        })();
    },1000);
    
   

