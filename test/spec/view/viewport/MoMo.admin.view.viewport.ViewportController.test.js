/* DoOverwrite */

describe('MoMo.admin.view.viewport.ViewportController', function() {
  var ViewportController;

  beforeEach(function() {
      ViewportController = Ext.create('MoMo.admin.view.viewport.ViewportController');
  });

  afterEach(function() {
      ViewportController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.viewport.ViewportController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ViewportController).to.be.a(MoMo.admin.view.viewport.ViewportController);
        });
    });
});

