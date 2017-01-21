module.exports = {
    src_folders: ['./test/e2e/'],
    output_folder : "./reports/e2e",
    custom_commands_path : "./config/nightwatch/custom_commands",
    // custom_assertions_path : "",
    // page_objects_path : "",
    // globals_path : "",
    selenium : {
        start_process : false, // tells nightwatch to start/stop the selenium process
        server_path : "",
        log_path : "",
        host : "127.0.0.1",
        port : 4444,
        cli_args : {
            "webdriver.chrome.driver" : "",
            "webdriver.ie.driver" : ""
        }
    },

    test_workers : {"enabled" : true, "workers" : "auto"},

    test_settings : {
        default : {
            launch_url: "http://localhost",
            selenium_port: 80,
            selenium_host: "ondemand.saucelabs.com",
            silent: true,
            screenshots : {
                "enabled" : true,
                "path" : "./reports/e2e/screenshots"
            },
            globals: {
                waitForConditionTimeout: 10000,
            },
            username: process.env.SAUCE_USERNAME,
            access_key: process.env.SAUCE_ACCESS_KEY,

            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCerts: true,
                build: 'build' + ${process.env.TRAVIS_JOB_NUMBER',
                'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
            }
        },

        chrome: {
            desiredCapabilities: {
                platform: "MAC",
                browserName: "chrome",
                version: "Latest"
            }
        }
    }
};
