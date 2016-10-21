/* DoOverwrite */

describe('MoMo.admin.view.container.MainContainer', function() {
  var MainContainer;

  beforeEach(function() {
      MainContainer = Ext.create('MoMo.admin.view.container.MainContainer');
  });

  afterEach(function() {
      MainContainer.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.container.MainContainer).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(MainContainer).to.be.a(MoMo.admin.view.container.MainContainer);
        });
    });
});

