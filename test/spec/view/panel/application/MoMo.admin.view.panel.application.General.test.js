/* DoOverwrite */

describe('MoMo.admin.view.panel.application.General', function() {
  var General;

  beforeEach(function() {
      General = Ext.create('MoMo.admin.view.panel.application.General');
  });

  afterEach(function() {
      General.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.General).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(General).to.be.a(MoMo.admin.view.panel.application.General);
        });
    });
});

