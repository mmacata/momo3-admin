/* DoOverwrite */

describe('MoMo.admin.view.panel.application.LayoutModel', function() {
  var LayoutModel;

  beforeEach(function() {
      LayoutModel = Ext.create('MoMo.admin.view.panel.application.LayoutModel');
  });

  afterEach(function() {
      LayoutModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.LayoutModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayoutModel).to.be.a(MoMo.admin.view.panel.application.LayoutModel);
        });
    });
});

