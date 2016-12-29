const specificConfig = require('./specificConfig');
const options = {
    umd_libs_use_external_script : './production/webpack.production_for_umd_lib.config',
    webapp_use_external_script : './production/webpack.production_for_using_external.config',
    webapp_use_vendorjs: './production/webpack.production_for_using_vendorjs.config'
};

module.exports = require(options[specificConfig.buildMode]);
