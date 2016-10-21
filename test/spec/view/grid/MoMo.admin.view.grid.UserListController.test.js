/* DoOverwrite */

describe('MoMo.admin.view.grid.UserListController', function() {
  var UserListController;

  beforeEach(function() {
      UserListController = Ext.create('MoMo.admin.view.grid.UserListController');
  });

  afterEach(function() {
      UserListController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.grid.UserListController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(UserListController).to.be.a(MoMo.admin.view.grid.UserListController);
        });
    });
});

