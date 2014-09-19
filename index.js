require('bem').api.make()
    .then(function() {
        require('bem/lib/level').resetLevelsCache();
        var project = require('./package.json');
      console.log('build complete');
      var fs = require('fs');
      var files = ['_index.js'];
      var needlePath = '../'+project.name+'/assets';
      var srcPath = 'desktop.bundles/index';
      //moving images
      
      var child = require('child_process');
      var command = "cssrb -c cssrb.js "+srcPath+"/_index.css "+needlePath+"/_index.css --copy";
      console.log('Executing '+command);
      child.exec(command,function(err, stdout, stderr){
        if(err){
          console.error(stderr);
        }
        console.log(stdout);        
        console.log('complete');
      });

      console.log('start copy files from '+srcPath+' to '+needlePath);
      for (var i=0; i<files.length; i++){
        var file = files[i];
        console.log('copy '+file);
        fs.createReadStream(srcPath+'/'+file).pipe(fs.createWriteStream(needlePath+'/'+file)); 
      }

    });
