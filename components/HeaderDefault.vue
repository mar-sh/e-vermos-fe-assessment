<template>
  <nav>
    <!-- Desktop -->
    <div class="desktop-nav" :class="{ 'mobile-active': expandMobileMenu }">
      <div class="navbar">
        <div class="menu-container">
          <!-- Main Menu -->
          <div class="container-left">
            <!-- Logo  -->
            <div class="logo">
              <nuxt-link class="logo-text" to="/"> EverCatalog </nuxt-link>
            </div>

            <!-- Menu -->
            <ul class="nav-menu">
              <li class="nav-item">
                <nuxt-link to="/categories"> Browse Catalog </nuxt-link>
              </li>
            </ul>
          </div>

          <!-- Button show mobile -->
          <div class="toggle-container">
            <button
              class="toggle"
              @click="expandMobileMenu = !expandMobileMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                style="width: 1.5rem; height: 1.5rem"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="mobile-nav" :class="{ hidden: !expandMobileMenu }">
      <ul class="nav-menu">
        <li class="nav-item">
          <nuxt-link to="/categories"> Browse Catalog </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderDefault',

  data() {
    return {
      expandMobileMenu: false,
    }
  },
}
</script>

<style lang="scss">
nav {
  .desktop-nav {
    background-color: #fff;
    border-bottom: 1px solid #d4d8dd;

    &.mobile-active {
      border-bottom: none;
    }

    .navbar {
      max-width: 95rem;
      margin: 0 auto;

      .menu-container {
        display: flex;
        justify-content: space-between;

        .container-left {
          display: flex;
          margin-left: 1rem;

          .logo {
            display: flex;
            align-items: center;
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            margin-right: 2rem;

            .logo-text {
              font-weight: bold;
              font-size: 24px;
              color: #004751;
            }
          }

          .nav-menu {
            display: none;
          }
        }

        .toggle-container {
          display: flex;
          align-items: center;

          .toggle {
            background: #fff;
            border: none;
          }
        }
      }
    }
  }

  .mobile-nav {
    display: block;
    margin-bottom: 20px;
    border-bottom: 1px solid #d4d8dd;

    &.hidden {
      display: none;
    }

    .nav-menu {
      .nav-item {
        display: block;
        font-weight: bold;
        padding-top: 0.5rem;
        padding-right: 1rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  nav {
    .desktop-nav {
      .navbar {
        .menu-container {
          .container-left {
            .nav-menu {
              display: flex;
              align-items: center;

              .nav-item {
                font-weight: 600;
              }
            }
          }

          .toggle-container {
            display: none;
          }
        }
      }
    }

    .mobile-nav {
      display: none;
    }
  }
}
</style>
