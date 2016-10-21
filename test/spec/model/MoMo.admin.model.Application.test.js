/* DoOverwrite */

describe('MoMo.admin.model.Application', function() {
  var Application;

  beforeEach(function() {
      Application = Ext.create('MoMo.admin.model.Application');
  });

  afterEach(function() {
      Application.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.model.Application).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(Application).to.be.a(MoMo.admin.model.Application);
        });
    });
});

