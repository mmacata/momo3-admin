/* DoOverwrite */

describe('MoMo.admin.model.TileGrid', function() {
  var TileGrid;

  beforeEach(function() {
      TileGrid = Ext.create('MoMo.admin.model.TileGrid');
  });

  afterEach(function() {
      TileGrid.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.model.TileGrid).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(TileGrid).to.be.a(MoMo.admin.model.TileGrid);
        });
    });
});

