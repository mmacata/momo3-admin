/* DoOverwrite */

describe('MoMo.admin.view.grid.UserList', function() {
  var UserList;

  beforeEach(function() {
      UserList = Ext.create('MoMo.admin.view.grid.UserList');
  });

  afterEach(function() {
      UserList.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.UserList).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(UserList).to.be.a(MoMo.admin.view.grid.UserList);
        });
    });
});

