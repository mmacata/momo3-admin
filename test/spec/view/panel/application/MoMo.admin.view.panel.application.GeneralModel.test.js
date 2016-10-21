/* DoOverwrite */

describe('MoMo.admin.view.panel.application.GeneralModel', function() {
  var GeneralModel;

  beforeEach(function() {
      GeneralModel = Ext.create('MoMo.admin.view.panel.application.GeneralModel');
  });

  afterEach(function() {
      GeneralModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.GeneralModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(GeneralModel).to.be.a(MoMo.admin.view.panel.application.GeneralModel);
        });
    });
});

