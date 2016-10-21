/* DoOverwrite */

describe('MoMo.admin.view.tab.CreateOrEditApplicationModel', function() {
  var CreateOrEditApplicationModel;

  beforeEach(function() {
      CreateOrEditApplicationModel = Ext.create('MoMo.admin.view.tab.CreateOrEditApplicationModel');
  });

  afterEach(function() {
      CreateOrEditApplicationModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.tab.CreateOrEditApplicationModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(CreateOrEditApplicationModel).to.be.a(MoMo.admin.view.tab.CreateOrEditApplicationModel);
        });
    });
});

