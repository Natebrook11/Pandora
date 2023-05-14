class password extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        <!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>CodePen - Random Password Generator - HTML | CSS | JS</title>
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'>
	<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat&amp;display=swap'>
	<link rel="stylesheet" href="./style.css">

</head>

<body>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<div class="animate-bottom" id="content">

		<div   class="password-container">
			<h2 class="title">Password Generator</h2>
			<div class="result">
				<div class="result__title field-title">Generated Password</div>
				<div class="result__info right">click to copy</div>
				<div class="result__info left">copied</div>
				<div class="result__viewbox" id="result">CLICK GENERATE</div>
				<button id="copy-btn" style="--x: 0; --y: 0"><i class="far fa-copy"></i></button>
			</div>
			<div class="length range__slider" data-min="4" data-max="32">
				<div class="length__title field-title" data-length='0'>length:</div>
				<input id="slider" type="range" min="4" max="32" value="16" />
			</div>

			<div class="settings">
				<span class="settings__title field-title">settings</span>
				<div class="setting">
					<input type="checkbox" id="uppercase" checked />
					<label for="uppercase">Include Uppercase</label>
				</div>
				<div class="setting">
					<input type="checkbox" id="lowercase" checked />
					<label for="lowercase">Include Lowercase</label>
				</div>
				<div class="setting">
					<input type="checkbox" id="number" checked />
					<label for="number">Include Numbers</label>
				</div>
				<div class="setting">
					<input type="checkbox" id="symbol" />
					<label for="symbol">Include Symbols</label>
				</div>
			</div>

			<button class="btn generate" id="generate">Generate Password</button>
		</div>
	</div>
  <link rel="stylesheet" href="/dist/random-password/style.css">
  
</body>

</html>
      `;
    }
}
customElements.define('password-component', password);
