/* DoOverwrite */

describe('MoMo.admin.store.MapProjection', function() {
  var MapProjection;

  beforeEach(function() {
      MapProjection = Ext.create('MoMo.admin.store.MapProjection');
  });

  afterEach(function() {
      MapProjection.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.MapProjection).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(MapProjection).to.be.a(MoMo.admin.store.MapProjection);
        });
    });
});

