/* DoOverwrite */

describe('MoMo.admin.store.NavigationTree', function() {
  var NavigationTree;

  beforeEach(function() {
      NavigationTree = Ext.create('MoMo.admin.store.NavigationTree');
  });

  afterEach(function() {
      NavigationTree.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.NavigationTree).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(NavigationTree).to.be.a(MoMo.admin.store.NavigationTree);
        });
    });
});

