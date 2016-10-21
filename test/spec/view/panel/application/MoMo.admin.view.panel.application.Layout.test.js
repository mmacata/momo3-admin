/* DoOverwrite */

describe('MoMo.admin.view.panel.application.Layout', function() {
  var Layout;

  beforeEach(function() {
      Layout = Ext.create('MoMo.admin.view.panel.application.Layout');
  });

  afterEach(function() {
      Layout.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.Layout).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Layout).to.be.a(MoMo.admin.view.panel.application.Layout);
        });
    });
});

