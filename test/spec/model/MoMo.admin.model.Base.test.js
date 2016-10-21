/* DoOverwrite */

describe('MoMo.admin.model.Base', function() {
  var Base;

  beforeEach(function() {
      Base = Ext.create('MoMo.admin.model.Base');
  });

  afterEach(function() {
      Base.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.model.Base).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Base).to.be.a(MoMo.admin.model.Base);
        });
    });
});

