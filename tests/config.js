exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
  	'amigo-secreto-spec.js',
  	'add-novo-participante-spec.js'
  ],
  capabilities: {
    browserName: 'chrome'
  }
}