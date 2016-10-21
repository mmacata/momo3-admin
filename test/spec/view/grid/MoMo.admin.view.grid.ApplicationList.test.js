/* DoOverwrite */

describe('MoMo.admin.view.grid.ApplicationList', function() {
  var ApplicationList;

  beforeEach(function() {
      ApplicationList = Ext.create('MoMo.admin.view.grid.ApplicationList');
  });

  afterEach(function() {
      ApplicationList.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.ApplicationList).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ApplicationList).to.be.a(MoMo.admin.view.grid.ApplicationList);
        });
    });
});

