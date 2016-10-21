/* DoOverwrite */

describe('MoMo.admin.store.Users', function() {
  var Users;

  beforeEach(function() {
      Users = Ext.create('MoMo.admin.store.Users');
  });

  afterEach(function() {
      Users.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.store.Users).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Users).to.be.a(MoMo.admin.store.Users);
        });
    });
});

