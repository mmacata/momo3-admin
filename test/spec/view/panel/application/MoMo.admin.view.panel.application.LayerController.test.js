/* DoOverwrite */

describe('MoMo.admin.view.panel.application.LayerController', function() {
  var LayerController;

  beforeEach(function() {
      LayerController = Ext.create('MoMo.admin.view.panel.application.LayerController');
  });

  afterEach(function() {
      LayerController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.LayerController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayerController).to.be.a(MoMo.admin.view.panel.application.LayerController);
        });
    });
});

