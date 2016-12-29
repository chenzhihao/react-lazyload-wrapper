const buildModeOptions = [
  'webapp_use_vendorjs',
  'webapp_use_external_script',
  'umd_libs_use_external_script',
];
const specificConfig = {
  useCssModules: false,
  useSourceMapInProd: false,
  buildMode: buildModeOptions[2],
  extractResourcePublicPath: './assets',
};

module.exports = specificConfig;
