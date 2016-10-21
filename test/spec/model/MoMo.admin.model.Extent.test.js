/* DoOverwrite */

describe('MoMo.admin.model.Extent', function() {
  var Extent;

  beforeEach(function() {
      Extent = Ext.create('MoMo.admin.model.Extent');
  });

  afterEach(function() {
      Extent.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.model.Extent).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Extent).to.be.a(MoMo.admin.model.Extent);
        });
    });
});

