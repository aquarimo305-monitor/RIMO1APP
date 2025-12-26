const navTemplate = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <div class="container">
    <a class="navbar-brand" href="index.html">🐠 Tank Monitor</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Dashboard</a></li>
        <li class="nav-item"><a class="nav-link" href="camera.html">Camera</a></li>
        <li class="nav-item"><a class="nav-link" href="ph.html">pH Detail</a></li>
        <li class="nav-item"><a class="nav-link" href="temp.html">Temp Detail</a></li>
        <li class="nav-item"><a class="nav-link" href="feeder.html">Feeder</a></li>
      </ul>
    </div>
  </div>
</nav>
`;

document.body.insertAdjacentHTML('afterbegin', navTemplate);