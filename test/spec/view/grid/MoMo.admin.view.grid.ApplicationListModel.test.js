/* DoOverwrite */

describe('MoMo.admin.view.grid.ApplicationListModel', function() {
  var ApplicationListModel;

  beforeEach(function() {
      ApplicationListModel = Ext.create('MoMo.admin.view.grid.ApplicationListModel');
  });

  afterEach(function() {
      ApplicationListModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.ApplicationListModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ApplicationListModel).to.be.a(MoMo.admin.view.grid.ApplicationListModel);
        });
    });
});

