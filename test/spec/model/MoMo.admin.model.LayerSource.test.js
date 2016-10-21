/* DoOverwrite */

describe('MoMo.admin.model.LayerSource', function() {
  var LayerSource;

  beforeEach(function() {
      LayerSource = Ext.create('MoMo.admin.model.LayerSource');
  });

  afterEach(function() {
      LayerSource.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.model.LayerSource).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayerSource).to.be.a(MoMo.admin.model.LayerSource);
        });
    });
});

