/* DoOverwrite */

describe('MoMo.admin.store.ApplicationLayout', function() {
  var ApplicationLayout;

  beforeEach(function() {
      ApplicationLayout = Ext.create('MoMo.admin.store.ApplicationLayout');
  });

  afterEach(function() {
      ApplicationLayout.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.ApplicationLayout).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(ApplicationLayout).to.be.a(MoMo.admin.store.ApplicationLayout);
        });
    });
});

