var project = require('./package.json');
exports.config = {
    fromBase: '/home/jenik/projects/'+project.name+'/bem/desktop.bundles/index/',
    toBase:   '/home/jenik/projects/'+project.name+'/'+project.name+'/assets/',
    patterns: {        
        '(fonts)(.*?)(eot|svg|ttf|woff)$' : 'fonts/',
        '(blocks)(.*?)(jpg|png|gif|svg|eot|ttf|woff)$': 'img/',        
    }
};
