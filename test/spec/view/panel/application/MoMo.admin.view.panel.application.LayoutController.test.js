/* DoOverwrite */

describe('MoMo.admin.view.panel.application.LayoutController', function() {
  var LayoutController;

  beforeEach(function() {
      LayoutController = Ext.create('MoMo.admin.view.panel.application.LayoutController');
  });

  afterEach(function() {
      LayoutController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.LayoutController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayoutController).to.be.a(MoMo.admin.view.panel.application.LayoutController);
        });
    });
});

