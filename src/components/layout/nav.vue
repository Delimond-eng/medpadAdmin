<template>
  <div>
    <nav class="navbar navbar-expand-lg main-navbar" style="background-color: #6777ef">
      <div class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
          <li>
            <a
              href="#"
              data-toggle="sidebar"
              class="nav-link nav-link-lg collapse-btn text-light"
              ><i class="fas fa-bars"></i
            ></a>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav navbar-right">
        <li>
          <a
            href="#"
            data-toggle="dropdown"
            class="nav-link notification-toggle nav-link-lg beep text-light"
            ><i class="far fa-bell"></i
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>
