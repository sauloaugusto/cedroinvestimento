import { PerfilInvestidorModule } from './perfil-investidor.module';

describe('PerfilInvestidorModule', () => {
  let perfilInvestidorModule: PerfilInvestidorModule;

  beforeEach(() => {
    perfilInvestidorModule = new PerfilInvestidorModule();
  });

  it('should create an instance', () => {
    expect(perfilInvestidorModule).toBeTruthy();
  });
});
