var app = new Vue({
    el: "#app",
    data: {
      password: null,
      password_length: 0,
      contieneocho: false,
      contienenum: false,
      contienemayuscula: false,
      contieneespecial: false,
      valid_password: false
    },
    /*Definición de los métodos de Vuejs*/
    methods: {
      checkPassword() {
        this.password_length = this.password.length;
              const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
              
        if (this.password_length > 8) {
          this.contieneocho = true;
        } else {
          this.contieneocho = false;
              }
              
        this.contienenum = /\d/.test(this.password);
        this.contienemayuscula = /[A-Z]/.test(this.password);
        this.contieneespecial = format.test(this.password);
        
        if (this.contieneocho === true &&
            this.contieneespecial === true &&
            this.contienemayuscula === true &&
            this.contienenum === true) {
            this.valid_password = true;			
        } else {
          this.valid_password = false;
        }
      }
    }
  });