<template>
  <div>
    <div class="main-content" style="min-height: 794px">
      <section class="section">
        <div class="section-header">
          <h1>MedPad Store</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active">
              <router-link tag="a" :to="{ name: 'home' }">Home</router-link>
            </div>
            <div class="breadcrumb-item">MedPad Store</div>
          </div>
        </div>
        <div class="section-body">
          <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="card">
                <div class="card-header">
                  <h4>Update medpad here!</h4>
                </div>
                <div class="card-body">
                  <form
                    id="wizard_with_validation"
                    role="application"
                    class="wizard clearfix"
                    novalidate="novalidate"
                  >
                    <div class="content clearfix">
                      <fieldset
                        id="wizard_with_validation-p-0"
                        role="tabpanel"
                        aria-labelledby="wizard_with_validation-h-0"
                        class="body current"
                        aria-hidden="true"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                >Browse apk
                                <span class="mr-5"
                                  >-------------------------------------------------------------->
                                  OR</span
                                ></label
                              >
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <div class="input-group-text">
                                    <i class="fas fa-file"></i>
                                  </div>
                                </div>
                                <input
                                  type="file"
                                  @change="browseFile($event)"
                                  ref="file"
                                  class="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Enter link</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <div class="input-group-text">
                                    <i class="fas fa-link"></i>
                                  </div>
                                </div>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter link of apk"
                                  v-model="form.link"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <label>version code</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">
                                <i class="fas fa-edit"></i>
                              </div>
                            </div>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Enter the version code"
                              v-model="form.version_code"
                            />
                          </div>
                        </div>

                        <div class="form-group">
                          <label>Change Text(optional)</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">
                                <i class="fas fa-edit"></i>
                              </div>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter change text"
                              v-model="form.change_text"
                            />
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div class="float-right">
                      <div class="buttons">
                        <button
                          class="btn btn-icon icon-left btn-secondary"
                          @click.prevent="start"
                        >
                          <i class="fas fa-times-circle"></i> Cancel
                        </button>
                        <button
                          @click.prevent="submitted"
                          class="btn btn-icon icon-left btn-success"
                        >
                          <i class="fas fa-check"></i> update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4>Store apps View</h4>
                </div>
                <div class="card-body p-10">
                  <div class="table-responsive">
                    <table class="table table-striped dataTable">
                      <tbody>
                        <tr>
                          <th>APP LINK</th>
                          <th>APP VERSION CODE</th>
                          <th class="align-middle">DATE PUBLISH</th>
                          <th class="align-middle">DEVICES INSTALLATIONS</th>
                          <th></th>
                        </tr>
                        <tr v-for="data in view" :key="data">
                          <td>{{ data.apk }}</td>

                          <td>{{ data.version_code }}.0.0</td>
                          <td class="align-middle">
                            <i class="fas fa-calendar-alt"></i>
                            {{ data.date_enregistrement.split("|")[0] }}

                            <i class="fas fa-clock"></i>
                            {{ data.date_enregistrement.split("|")[1] }}
                          </td>

                          <td class="align-middle">
                            <div class="badge badge-info">{{ data.installations }}</div>
                          </td>
                          <td>
                            <a href="#" class="btn btn-icon btn-danger"
                              ><i class="fas fa-times"></i
                            ></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedpadStore",

  data() {
    return {
      form: {
        apk: "",
        link: "",
        version_code: "",
        change_text: "",
      },
    };
  },

  mounted() {
    this.$store.dispatch("viewUpdates");
  },

  computed: {
    view() {
      return this.$store.getters.getUpdates;
    },
  },

  methods: {
    submitted() {
      if (this.form.apk === "" && this.form.link === "") {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          position: "top-end",
          timer: 2000,
          timerProgressBar: false,
          icon: "warning",
          title: "Please browse apk file or enter link !",
        });
        return;
      }

      if (this.form.version_code === "") {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          position: "top-end",
          timer: 2000,
          timerProgressBar: false,
          icon: "warning",
          title: "The version code of apk is required!",
        });
        return;
      }

      let apk = this.form.apk !== "" ? this.form.apk : this.form.link;

      console.log(apk);

      let formData = new FormData();
      formData.append("version_code", this.form.version_code);
      formData.append("apk", apk);
      formData.append("change_text", this.form.change_text);

      this.$axios
        .post("devices/updates/publish", formData)
        .then((result) => {
          if (result.data.error) {
            this.$swal({
              toast: true,
              showConfirmButton: false,
              position: "top-end",
              timer: 2000,
              timerProgressBar: false,
              icon: "warning",
              title: "the version code has already been published",
            });
            return;
          }
          if (result.data.reponse.status === "success") {
            this.$swal({
              toast: true,
              showConfirmButton: false,
              position: "top-end",
              timer: 2000,
              timerProgressBar: false,
              icon: "success",
              title: "updated successfully!",
            });
            this.$store.dispatch("viewUpdates");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    browseFile(event) {
      this.form.apk = this.$refs.file.files[0];
      event.target.files[0];
    },

    state() {
      this.$loading(true);
    },
  },
};
</script>
