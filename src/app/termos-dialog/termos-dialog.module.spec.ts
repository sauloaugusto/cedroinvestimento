import { TermosDialogModule } from './termos-dialog.module';

describe('TermosDialogModule', () => {
  let termosDialogModule: TermosDialogModule;

  beforeEach(() => {
    termosDialogModule = new TermosDialogModule();
  });

  it('should create an instance', () => {
    expect(termosDialogModule).toBeTruthy();
  });
});
