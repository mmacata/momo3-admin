/* DoOverwrite */

describe('MoMo.admin.view.panel.application.Layer', function() {
  var Layer;

  beforeEach(function() {
      Layer = Ext.create('MoMo.admin.view.panel.application.Layer');
  });

  afterEach(function() {
      Layer.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.Layer).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Layer).to.be.a(MoMo.admin.view.panel.application.Layer);
        });
    });
});

