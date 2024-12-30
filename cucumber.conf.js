module.exports ={
    default: '--publish-quiet',
    require: ['./tests/Step_definitions/**/*.js'],
    paths: ['./tests/features/**/*.feature'],
    format: ['pretty'],
    publishQuiet: true,
    parallel: 0,
    retry: 1,
    strict: true,
    
default : {
     launch_url: 'https://www.facebook.com/',
     browser: 'chrome',
     server_path: 'C:\Users\HinthumathiV\Desktop\Nightwatch_framework\node_modules\.bin\chromedriver.exe',
     port: 9515,
     desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
             chromeOptions: {
            debuggerAddress: '127.0.0.1:65025',
          },
          args: ['--headless', '--disable-gpu', '--no-sandbox']
        },
    },

}}
