/* DoOverwrite */

describe('MoMo.admin.model.Layer', function() {
  var Layer;

  beforeEach(function() {
      Layer = Ext.create('MoMo.admin.model.Layer');
  });

  afterEach(function() {
      Layer.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.model.Layer).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Layer).to.be.a(MoMo.admin.model.Layer);
        });
    });
});

