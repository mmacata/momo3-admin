/* DoOverwrite */

describe('MoMo.admin.model.LayerAppearance', function() {
  var LayerAppearance;

  beforeEach(function() {
      LayerAppearance = Ext.create('MoMo.admin.model.LayerAppearance');
  });

  afterEach(function() {
      LayerAppearance.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.model.LayerAppearance).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayerAppearance).to.be.a(MoMo.admin.model.LayerAppearance);
        });
    });
});

