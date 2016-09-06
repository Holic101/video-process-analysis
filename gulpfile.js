var gulp = require("gulp"),
    browserSync = require("browser-sync");
    
gulp.task("default", function() {
    console.log("Hello Gulp");
});

gulp.task("browser-sync", function( {
    browserSync({
        files: "index.html, css/style.css, js/main.js/main",
        port: 8082  
    });
  
}));