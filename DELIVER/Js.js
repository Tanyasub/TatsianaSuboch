 
;(function() {
	'use strict';
 
})();
 
;(function() {
	'use strict';
 
	var coverflow = function(coverflow, setup) {
		
		this.init(this.setup.type);
	};
})();

;(function() {
	'use strict';
	
	var Coverflow = function(id, setup) {
		
		this.init(this.setup.type);
	};
 
	window.Coverflow = Coverflow;
})();

var Coverflow = function(id, setup) {
	// настройки по-умолчанию
	this.defaults = {
		w:			400,	// ширина элемента,
		h:			266,	// высота элемента
		shiftY:		0,		// сдвиг по оси Y
		shiftZ:		100,	// сдвиг по оси Z при наведении
		initShiftZ:	190,	// сдвиг по оси Z при инициализации
		rotateX:	0.1,	// угол поворота по оси X
		duration:	400,	// время анимации при листании
		durationZ:	200,	// время анимации при наведении
		flag:		true,	// блокировка управления на время анимации
		isctrl: 	false	// блокировка повторной регистрации обработчиков
	};
 
	this.setup = setup;
 
	// основные DOM-элементы галереи определяющие её каркас
	// родительский элемент галереи
	this.content = document.getElementById(id);
	this.coverflow = this.content.querySelector('.coverflow');
	// коллекция элементов галереи
	this.elements = this.coverflow.querySelectorAll('.coverflow > div');
	// коллекция контейнеров внутри элементов галереи, к которым будет применяться
	// свойство CSS 'background'
	this.elementsBg = this.coverflow.querySelectorAll('.coverflow > div > div');
	// родительский элемент переключателей типа эффекта Cover Flow
	this.parentSwitches = document.getElementById('switches_type');
	// коллекция элементов, переключающих тип эффекта Cover Flow
	// эти элементы необходимы только для демонстрации эффектов
	this.tabs = this.parentSwitches.querySelectorAll('li');
	// массив для хранения координат z0 каждого элемента
	// используется при наведении курсора на элемент
	this.arrayZ0 = [];
 
	// построение галереи исходя из полученных настроек
	this.init(this.setup.type);
};
 