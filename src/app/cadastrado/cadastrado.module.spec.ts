import { CadastradoModule } from './cadastrado.module';

describe('CadastradoModule', () => {
  let cadastradoModule: CadastradoModule;

  beforeEach(() => {
    cadastradoModule = new CadastradoModule();
  });

  it('should create an instance', () => {
    expect(cadastradoModule).toBeTruthy();
  });
});
