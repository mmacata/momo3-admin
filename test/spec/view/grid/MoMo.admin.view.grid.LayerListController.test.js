/* DoOverwrite */

describe('MoMo.admin.view.grid.LayerListController', function() {
  var LayerListController;

  beforeEach(function() {
      LayerListController = Ext.create('MoMo.admin.view.grid.LayerListController');
  });

  afterEach(function() {
      LayerListController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.LayerListController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayerListController).to.be.a(MoMo.admin.view.grid.LayerListController);
        });
    });
});

