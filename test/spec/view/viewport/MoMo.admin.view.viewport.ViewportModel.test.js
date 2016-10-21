/* DoOverwrite */

describe('MoMo.admin.view.viewport.ViewportModel', function() {
  var ViewportModel;

  beforeEach(function() {
      ViewportModel = Ext.create('MoMo.admin.view.viewport.ViewportModel');
  });

  afterEach(function() {
      ViewportModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.viewport.ViewportModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ViewportModel).to.be.a(MoMo.admin.view.viewport.ViewportModel);
        });
    });
});

