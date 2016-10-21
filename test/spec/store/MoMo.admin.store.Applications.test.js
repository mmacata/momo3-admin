/* DoOverwrite */

describe('MoMo.admin.store.Applications', function() {
  var Applications;

  beforeEach(function() {
      Applications = Ext.create('MoMo.admin.store.Applications');
  });

  afterEach(function() {
      Applications.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.Applications).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Applications).to.be.a(MoMo.admin.store.Applications);
        });
    });
});

