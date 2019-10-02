import convertX500 from '../../src/scripts/convertX500'

describe('Testing the constructor of convertX500', () => {    
	it('should store the X500 string value in the field x500', () => {
		const testConvertX500 = new convertX500('O=Acme,OU=Explosives,L=Area 51,C=US')
		expect(testConvertX500.x500).toMatch('O=Acme,OU=Explosives,L=Area 51,C=US')
	})
})
