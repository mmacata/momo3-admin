/* DoOverwrite */

describe('MoMo.admin.view.grid.LayerListModel', function() {
  var LayerListModel;

  beforeEach(function() {
      LayerListModel = Ext.create('MoMo.admin.view.grid.LayerListModel');
  });

  afterEach(function() {
      LayerListModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.LayerListModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(LayerListModel).to.be.a(MoMo.admin.view.grid.LayerListModel);
        });
    });
});

