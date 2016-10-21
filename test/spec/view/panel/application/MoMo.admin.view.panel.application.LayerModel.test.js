/* DoOverwrite */

describe('MoMo.admin.view.panel.application.LayerModel', function() {
  var LayerModel;

  beforeEach(function() {
      LayerModel = Ext.create('MoMo.admin.view.panel.application.LayerModel');
  });

  afterEach(function() {
      LayerModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.LayerModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayerModel).to.be.a(MoMo.admin.view.panel.application.LayerModel);
        });
    });
});

