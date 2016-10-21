/* DoOverwrite */

describe('MoMo.admin.store.Language', function() {
  var Language;

  beforeEach(function() {
      Language = Ext.create('MoMo.admin.store.Language');
  });

  afterEach(function() {
      Language.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.Language).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Language).to.be.a(MoMo.admin.store.Language);
        });
    });
});

