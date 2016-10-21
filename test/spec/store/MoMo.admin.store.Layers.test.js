/* DoOverwrite */

describe('MoMo.admin.store.Layers', function() {
  var Layers;

  beforeEach(function() {
      Layers = Ext.create('MoMo.admin.store.Layers');
  });

  afterEach(function() {
      Layers.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.Layers).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Layers).to.be.a(MoMo.admin.store.Layers);
        });
    });
});

