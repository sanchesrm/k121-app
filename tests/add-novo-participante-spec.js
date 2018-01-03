describe('Adding a new participante', function() {
	beforeEach(function() {
		browser.get('http://localhost:8080/novoParticipante');
	});

	it('should have a save button', function() {
		expect(element(by.css(".div-buttons .btn-success")).isPresent()).toBe(true);
	});

	it('should save button be disabled', function() {
		expect(element(by.css(".div-buttons .btn-success")).isEnabled()).toBe(false);
	});

	it('should have inputs Nome and E-mail', function() {
		expect(element(by.model("participante.nome")).isPresent()).toBe(true);
		expect(element(by.model("participante.email")).isPresent()).toBe(true);
	});

	it('should save button be disabled', function() {
		element(by.model("participante.nome")).sendKeys('k121');
		element(by.model("participante.email")).sendKeys('k121@test.com');

		expect(element(by.css(".div-buttons .btn-success")).isEnabled()).toBe(true);
	});

	it('should have a back button', function() {
		expect(element(by.css(".div-buttons .btn-default")).isPresent()).toBe(true);
	});

	it('should back button redirect', function() {
		element(by.css("a.btn-default")).click();
		
		browser.wait(expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/amigoSecreto'), 5000);
	});

	it('should brand button redirect', function() {
		element(by.css(".navbar-header .navbar-brand")).click();
		
		browser.wait(expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/amigoSecreto'), 5000);
	});
});