<template>
  <div>
    <div class="login-box">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="login-header">MEDPAD</h3>
        </div>
        <div class="card-body">
          <form method="POST" action="#" class="needs-validation" novalidate="">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                tabindex="1"
                required=""
                placeholder="Enter email"
                autofocus=""
                v-model="user.email"
              />
              <div class="invalid-feedback">Please fill in your email</div>
            </div>
            <div class="form-group">
              <div class="d-block">
                <label for="password" class="control-label">Password</label>
              </div>
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                placeholder="Enter password"
                tabindex="2"
                required=""
                v-model="user.pass"
              />
              <div class="invalid-feedback">please fill in your password</div>
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                tabindex="4"
                @click.prevent="login"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      user: {
        email: "",
        pass: "",
      },
    };
  },

  methods: {
    login() {
      if (this.user.email === "" || this.user.pass === "") {
        alert("veuillez insérer vos identifiants !");
        return;
      }

      if (this.user.email === "medpad@gmail.com" && this.user.pass === "12345") {
        localStorage.setItem("token", "medpad@drc2020");
        this.$router.go(this.$router.push({ name: "home" }));
      } else {
        alert("identifiants erronés !");
        return;
      }
    },
  },
};
</script>
