/* DoOverwrite */

describe('MoMo.admin.model.User', function() {
  var User;

  beforeEach(function() {
      User = Ext.create('MoMo.admin.model.User');
  });

  afterEach(function() {
      User.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.model.User).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(User).to.be.a(MoMo.admin.model.User);
        });
    });
});

