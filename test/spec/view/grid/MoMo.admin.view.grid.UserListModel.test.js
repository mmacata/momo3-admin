/* DoOverwrite */

describe('MoMo.admin.view.grid.UserListModel', function() {
  var UserListModel;

  beforeEach(function() {
      UserListModel = Ext.create('MoMo.admin.view.grid.UserListModel');
  });

  afterEach(function() {
      UserListModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.UserListModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(UserListModel).to.be.a(MoMo.admin.view.grid.UserListModel);
        });
    });
});

