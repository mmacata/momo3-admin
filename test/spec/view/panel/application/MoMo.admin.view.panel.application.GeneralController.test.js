/* DoOverwrite */

describe('MoMo.admin.view.panel.application.GeneralController', function() {
  var GeneralController;

  beforeEach(function() {
      GeneralController = Ext.create('MoMo.admin.view.panel.application.GeneralController');
  });

  afterEach(function() {
      GeneralController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.GeneralController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(GeneralController).to.be.a(MoMo.admin.view.panel.application.GeneralController);
        });
    });
});

