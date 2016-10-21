/* DoOverwrite */

describe('MoMo.admin.view.panel.application.StartViewController', function() {
  var StartViewController;

  beforeEach(function() {
      StartViewController = Ext.create('MoMo.admin.view.panel.application.StartViewController');
  });

  afterEach(function() {
      StartViewController.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.StartViewController).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(StartViewController).to.be.a(MoMo.admin.view.panel.application.StartViewController);
        });
    });
});

