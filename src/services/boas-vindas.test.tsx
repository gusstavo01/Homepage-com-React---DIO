import { Welcome } from "./boas-vindas";

describe('Boas vindas', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    
    it('Deve dar boas vindas', () => {
        Welcome();
        expect(window.alert).toHaveBeenCalledWith('Bem vindo ao GA Bank');
    })
})