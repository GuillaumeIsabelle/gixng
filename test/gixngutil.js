var expect = require("chai").expect;


var { outputPath, projectName } = require('../gixngutil');


describe("Test read Angular config", function () {
  
  describe("Read conf", function () {

    it("Read the angular.json", function () {

      var x = require('../gixngutil');
      var l = x.outputPath.length;
      console.log(x.outputPath);
      expect(l, "invalid output path").to.greaterThan(2);
    });

    it('read a valid projectName', () => {      
      expect(projectName, "Invalid projectName").to.equal('x3');
    });

    it('read a valid outputPath', () => {      
      expect(outputPath, "Invalid outputPath").to.equal('dist/x3');
    });
  });


});