/* DoOverwrite */

describe('MoMo.admin.store.AvailableModules', function() {
  var AvailableModules;

  beforeEach(function() {
      AvailableModules = Ext.create('MoMo.admin.store.AvailableModules');
  });

  afterEach(function() {
      AvailableModules.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.AvailableModules).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(AvailableModules).to.be.a(MoMo.admin.store.AvailableModules);
        });
    });
});

