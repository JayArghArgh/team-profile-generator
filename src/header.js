"useStrict";

const returnHeader = () => `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Team Generator by JayArghArgh</title>
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>

<nav class="navbar navbar-light bg-light">
	<div class="container-fluid d-flex justify-content-center">
		<a class="navbar-brand" href="#">My Team</a>
	</div>
</nav>
<div class="container">
	<div class="row d-flex justify-content-center">
<!--end header template-->`
;

module.exports = {
	returnHeader,
};