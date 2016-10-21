/* DoOverwrite */

describe('MoMo.admin.view.grid.ApplicationListController', function() {
  var ApplicationListController;

  beforeEach(function() {
      ApplicationListController = Ext.create('MoMo.admin.view.grid.ApplicationListController');
  });

  afterEach(function() {
      ApplicationListController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.ApplicationListController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ApplicationListController).to.be.a(MoMo.admin.view.grid.ApplicationListController);
        });
    });
});

