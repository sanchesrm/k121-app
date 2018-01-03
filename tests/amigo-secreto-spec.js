describe('Amigo secreto table list', function() {
	beforeEach(function() {
		browser.get('http://localhost:8080/');
	});

	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('K121 KENOBY');
	});

	it('should have a table', function() {
		expect(element(by.css(".participanteTable")).isPresent()).toBe(true);
	});

	it('should have a button Sortear', function() {
		expect(element(by.css(".sortearButton")).isPresent()).toBe(true);
	});

	it('should have a button to add a new participante', function() {
		expect(element(by.css(".nav.navbar-nav.navbar-right")).isPresent()).toBe(true);
	});	

	it('should button to add a new participante change url', function() {
		browser.wait(element(by.css(".nav.navbar-nav.navbar-right a")).click(), 5000);
		
		expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/novoParticipante');
	});
});