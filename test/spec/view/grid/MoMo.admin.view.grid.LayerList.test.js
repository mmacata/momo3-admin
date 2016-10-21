/* DoOverwrite */

describe('MoMo.admin.view.grid.LayerList', function() {
  var LayerList;

  beforeEach(function() {
      LayerList = Ext.create('MoMo.admin.view.grid.LayerList');
  });

  afterEach(function() {
      LayerList.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.LayerList).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayerList).to.be.a(MoMo.admin.view.grid.LayerList);
        });
    });
});

