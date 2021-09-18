<template>
  <div>
    <div class="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div class="sidebar-brand bg-light-blue">
          <a href="#">
            <span class="logo-name">MEDPAD</span>
          </a>
        </div>
        <ul class="sidebar-menu">
          <li class="menu-header">Main</li>
          <li>
            <router-link class="nav-link" tag="a" :to="{ name: 'home' }"
              ><i class="fas fa-home"></i><span>Dashboard</span></router-link
            >
          </li>
          <li>
            <router-link to="/medpad/store" tag="a" class="nav-link" href="#"
              ><i class="fas fa-shopping-bag"></i><span>Medpad Store</span></router-link
            >
          </li>
          <li class="dropdown">
            <a href="#" class="nav-link has-dropdown"
              ><i class="fas fa-chart-area"></i><span>Billing</span></a
            >
            <ul class="dropdown-menu">
              <li><a class="nav-link" href="widget-chart.html">Chart Widgets</a></li>
              <li><a class="nav-link" href="widget-data.html">Data Widgets</a></li>
            </ul>
          </li>

          <li class="menu-header">Manager</li>
          <li>
            <router-link class="nav-link" tag="a" :to="{ name: 'home' }"
              ><i class="fas fa-hospital-alt"></i
              ><span>hospitals subscribed</span></router-link
            >
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>
