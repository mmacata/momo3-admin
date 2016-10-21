/* DoOverwrite */

describe('MoMo.admin.view.tab.CreateOrEditApplicationController', function() {
  var CreateOrEditApplicationController;

  beforeEach(function() {
      CreateOrEditApplicationController = Ext.create('MoMo.admin.view.tab.CreateOrEditApplicationController');
  });

  afterEach(function() {
      CreateOrEditApplicationController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.tab.CreateOrEditApplicationController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(CreateOrEditApplicationController).to.be.a(MoMo.admin.view.tab.CreateOrEditApplicationController);
        });
    });
});

