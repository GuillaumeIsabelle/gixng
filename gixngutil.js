
var path = require('path');

var angular;
var initialized = false;

function loadAngularConfig() {

  try {
   // var ngConfPath = path.join(process.cwd(), 'angular.json');
    var ngConfPath =   './angular.json';
    console.log(ngConfPath);
    angular = require(  ngConfPath );


  } catch (error) {
    console.log(error);
    console.log("maybe you need to run this at the root of your angular project.")
    return;
  }
}

function init() {
  loadAngularConfig();

  initialized = true;
}

function getOutputPath() {
  if (!initialized) init();

  var outputPath = "";
  try {

    var result = Object.keys(angular.projects).map(function (key) {
      return angular.projects[key];
    });

    outputPath = result[0].architect.build.options.outputPath;

  } catch (error) {
    console.log(error);
  }

  return outputPath;
}

function getProjectName() {
  if (!initialized) init();

  var projectName = "";


  try {

    var projectNaming = Object.keys(angular.projects).map(function (key) {
      return key;
    });

    projectName = projectNaming[0];

  } catch (error) {
    console.log(error);
  }

  return projectName;
}

function getAngularConf()
{
  if (!initialized) init();
  return angular;
}

/**
 * Project Output path
 */
exports.outputPath = getOutputPath();

/**
 * Project Name
 */
exports.projectName = getProjectName();

/**
 * Project Angular JSON as Object
 */
exports.angularConfig = getAngularConf();
