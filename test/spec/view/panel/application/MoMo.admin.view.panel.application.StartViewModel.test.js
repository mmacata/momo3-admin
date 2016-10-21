/* DoOverwrite */

describe('MoMo.admin.view.panel.application.StartViewModel', function() {
  var StartViewModel;

  beforeEach(function() {
      StartViewModel = Ext.create('MoMo.admin.view.panel.application.StartViewModel');
  });

  afterEach(function() {
      StartViewModel.destroy();
  });

  describe('Basics', function() {
        it('is defined', function() {
            expect(MoMo.admin.view.panel.application.StartViewModel).to.not.be(undefined);
        });
        it('can be instantiated', function(){
            expect(StartViewModel).to.be.a(MoMo.admin.view.panel.application.StartViewModel);
        });
    });
});

