/* DoOverwrite */

describe('MoMo.admin.store.Layout', function() {
  var Layout;

  beforeEach(function() {
      Layout = Ext.create('MoMo.admin.store.Layout');
  });

  afterEach(function() {
      Layout.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.Layout).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Layout).to.be.a(MoMo.admin.store.Layout);
        });
    });
});

