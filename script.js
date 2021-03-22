const required = document.querySelector('input[required]');
required.onblur = function(){ this.classList.add('visitado'); };